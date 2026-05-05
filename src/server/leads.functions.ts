import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(5).max(40),
  email: z.string().trim().max(255).optional().default(""),
  date: z.string().trim().max(40).optional().default(""),
  from: z.string().trim().min(1).max(120),
  to: z.string().trim().min(1).max(120),
  type: z.string().trim().max(80).optional().default(""),
  stairs: z.string().trim().max(80).optional().default(""),
  items: z.string().trim().max(500).optional().default(""),
  access: z.string().trim().max(1000).optional().default(""),
  // honeypot — must be empty
  company: z.string().max(0).optional().default(""),
  // idempotency token (best-effort only; not durable across Worker isolates)
  nonce: z.string().min(8).max(80),
});

export type LeadInput = z.infer<typeof LeadSchema>;

// Best-effort, in-memory throttle. NOT durable across Cloudflare Worker
// isolates — do not rely on this for correctness. Frontend pending-state
// is the primary duplicate-submission guard.
const recentNonces = new Map<string, number>();
const TTL_MS = 5 * 60 * 1000;

function seenRecently(nonce: string): boolean {
  const now = Date.now();
  for (const [k, t] of recentNonces) if (now - t > TTL_MS) recentNonces.delete(k);
  if (recentNonces.has(nonce)) return true;
  recentNonces.set(nonce, now);
  return false;
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LeadSchema.parse(input))
  .handler(async ({ data }) => {
    // Honeypot triggered → silently accept, do nothing
    if (data.company && data.company.length > 0) {
      return { ok: true as const };
    }

    // Best-effort dedupe (not authoritative). Same isolate, same nonce within
    // 5 min → return success so the client can continue to WhatsApp without
    // a duplicate email.
    if (seenRecently(data.nonce)) {
      return { ok: true as const, deduped: true as const };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.LEADS_FROM_EMAIL;
    const toEmail = process.env.LEADS_TO_EMAIL || "holdwellremovals@hotmail.com";

    if (!apiKey) {
      console.error("[LEAD] RESEND_API_KEY is not configured");
      throw new Error("Lead delivery not configured");
    }
    if (!fromEmail) {
      console.error("[LEAD] LEADS_FROM_EMAIL is not configured");
      throw new Error("Lead delivery not configured");
    }

    const lines = [
      `Quote request from ${data.name}`,
      `Phone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : "",
      `From: ${data.from}  →  To: ${data.to}`,
      `Type: ${data.type || "-"}`,
      `Items / rooms: ${data.items || "-"}`,
      `Stairs / lift: ${data.stairs || "-"}`,
      `Access notes: ${data.access || "-"}`,
      `Preferred date: ${data.date || "-"}`,
    ].filter(Boolean);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: data.email || undefined,
        subject: `New quote request — ${data.name}`,
        text: lines.join("\n"),
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[LEAD] email delivery failed", res.status, body);
      // Roll back dedupe so a retry can go through
      recentNonces.delete(data.nonce);
      throw new Error("Lead delivery failed");
    }

    console.log("[LEAD] delivered", JSON.stringify({
      receivedAt: new Date().toISOString(),
      name: data.name,
      phone: data.phone,
      from: data.from,
      to: data.to,
    }));

    return { ok: true as const };
  });
