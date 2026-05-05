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
  // idempotency token
  nonce: z.string().min(8).max(80),
});

export type LeadInput = z.infer<typeof LeadSchema>;

const seen = new Map<string, number>();
const TTL_MS = 5 * 60 * 1000;

function dedupe(nonce: string): boolean {
  const now = Date.now();
  for (const [k, t] of seen) if (now - t > TTL_MS) seen.delete(k);
  if (seen.has(nonce)) return false;
  seen.set(nonce, now);
  return true;
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LeadSchema.parse(input))
  .handler(async ({ data }) => {
    // Honeypot triggered → silently accept, do nothing
    if (data.company && data.company.length > 0) {
      return { ok: true as const };
    }

    if (!dedupe(data.nonce)) {
      return { ok: true as const, deduped: true };
    }

    const payload = {
      kind: "quote_lead",
      receivedAt: new Date().toISOString(),
      ...data,
    };
    // Durable record in worker logs
    console.log("[LEAD]", JSON.stringify(payload));

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
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
          from: "HoldWell Leads <leads@holdwellremovals.co.uk>",
          to: ["holdwellremovals@hotmail.com"],
          reply_to: data.email || undefined,
          subject: `New quote request — ${data.name}`,
          text: lines.join("\n"),
        }),
      });
      if (!res.ok) {
        const body = await res.text().catch(() => "");
        console.error("[LEAD] email delivery failed", res.status, body);
        throw new Error("Lead delivery failed");
      }
    }

    return { ok: true as const };
  });
