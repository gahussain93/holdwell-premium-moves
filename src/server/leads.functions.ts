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
    // Honeypot triggered → silently drop. Report ok:false so we never claim
    // a delivery that did not happen.
    if (data.company && data.company.length > 0) {
      return { ok: false as const, error: "rejected" as const };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.LEADS_FROM_EMAIL;
    const toEmail = process.env.LEADS_TO_EMAIL || "holdwellremovals@hotmail.com";

    if (!apiKey || !fromEmail) {
      console.error("[LEAD] missing config", {
        hasApiKey: !!apiKey,
        hasFromEmail: !!fromEmail,
      });
      return { ok: false as const, error: "not_configured" as const };
    }

    // Best-effort, non-authoritative throttle (in-memory; not durable).
    if (seenRecently(data.nonce)) {
      return { ok: false as const, error: "duplicate" as const };
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

    let res: Response;
    try {
      res = await fetch("https://api.resend.com/emails", {
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
    } catch (err) {
      console.error("[LEAD] network error contacting Resend", err);
      recentNonces.delete(data.nonce);
      return { ok: false as const, error: "network_error" as const };
    }

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[LEAD] Resend non-2xx", res.status, body);
      recentNonces.delete(data.nonce);
      return { ok: false as const, error: "provider_error" as const, status: res.status };
    }

    let providerBody: any = null;
    try {
      providerBody = await res.json();
    } catch (err) {
      console.error("[LEAD] could not parse Resend response", err);
      recentNonces.delete(data.nonce);
      return { ok: false as const, error: "invalid_provider_response" as const };
    }

    const messageId: string | undefined = providerBody?.id;
    if (!messageId || typeof messageId !== "string") {
      console.error("[LEAD] Resend response missing message id", providerBody);
      recentNonces.delete(data.nonce);
      return { ok: false as const, error: "no_message_id" as const };
    }

    console.log("[LEAD] delivered", JSON.stringify({
      receivedAt: new Date().toISOString(),
      messageId,
      name: data.name,
      phone: data.phone,
      from: data.from,
      to: data.to,
    }));

    return { ok: true as const, messageId };
  });

