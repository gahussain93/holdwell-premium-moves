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

const BasicEmailSchema = z.string().trim().email();

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

function isValidSender(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;

  if (BasicEmailSchema.safeParse(trimmed).success) {
    return true;
  }

  const displayNameMatch = trimmed.match(/^([^<>]+)<\s*([^<>\s]+@[^<>\s]+)\s*>$/);
  if (!displayNameMatch) {
    return false;
  }

  return BasicEmailSchema.safeParse(displayNameMatch[2]).success;
}

function getConfirmedMessageId(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const body = payload as {
    id?: unknown;
    data?: { id?: unknown } | null;
    error?: unknown;
  };

  if (body.error) {
    return null;
  }

  if (typeof body.id === "string" && body.id.trim()) {
    return body.id;
  }

  if (typeof body.data?.id === "string" && body.data.id.trim()) {
    return body.data.id;
  }

  return null;
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => input)
  .handler(async ({ data }) => {
    try {
      const parsedLead = LeadSchema.safeParse(data);
      if (!parsedLead.success) {
        return { ok: false as const, error: "invalid_input" as const };
      }

      const lead = parsedLead.data;

      // Honeypot triggered → report failure so we never claim a delivery that did not happen.
      if (lead.company && lead.company.length > 0) {
        return { ok: false as const, error: "rejected" as const };
      }

      const apiKey = process.env.RESEND_API_KEY?.trim();
      const fromEmail = process.env.LEADS_FROM_EMAIL?.trim();
      const toEmail = process.env.LEADS_TO_EMAIL?.trim() || "holdwellremovals@hotmail.com";

      if (!apiKey) {
        console.error("[LEAD] missing RESEND_API_KEY");
        return { ok: false as const, error: "not_configured" as const };
      }

      if (!fromEmail || !isValidSender(fromEmail)) {
        console.error("[LEAD] invalid LEADS_FROM_EMAIL");
        return { ok: false as const, error: "not_configured" as const };
      }

      // Best-effort, non-authoritative throttle (in-memory; not durable).
      if (seenRecently(lead.nonce)) {
        return { ok: false as const, error: "duplicate" as const };
      }

      const releaseNonce = () => {
        recentNonces.delete(lead.nonce);
      };

      const lines = [
        `Quote request from ${lead.name}`,
        `Phone: ${lead.phone}`,
        lead.email ? `Email: ${lead.email}` : "",
        `From: ${lead.from}  →  To: ${lead.to}`,
        `Type: ${lead.type || "-"}`,
        `Items / rooms: ${lead.items || "-"}`,
        `Stairs / lift: ${lead.stairs || "-"}`,
        `Access notes: ${lead.access || "-"}`,
        `Preferred date: ${lead.date || "-"}`,
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
          reply_to: lead.email || undefined,
          subject: `New quote request — ${lead.name}`,
          text: lines.join("\n"),
        }),
      });

      let providerBody: unknown = null;
      try {
        providerBody = await res.json();
      } catch (err) {
        console.error("[LEAD] could not parse Resend response", err);
        releaseNonce();
        return { ok: false as const, error: "invalid_provider_response" as const };
      }

      if (!res.ok || (providerBody && typeof providerBody === "object" && "error" in providerBody && (providerBody as { error?: unknown }).error)) {
        console.error("[LEAD] Resend failure", res.status, providerBody);
        releaseNonce();
        return { ok: false as const, error: "provider_error" as const, status: res.status };
      }

      const messageId = getConfirmedMessageId(providerBody);
      if (!messageId) {
        console.error("[LEAD] Resend response missing confirmed message id", providerBody);
        releaseNonce();
        return { ok: false as const, error: "no_message_id" as const };
      }

      console.log("[LEAD] delivered", JSON.stringify({
        receivedAt: new Date().toISOString(),
        messageId,
        name: lead.name,
        phone: lead.phone,
        from: lead.from,
        to: lead.to,
      }));

      return { ok: true as const, messageId };
    } catch (err) {
      const maybeNonce = typeof data === "object" && data !== null && "nonce" in data && typeof (data as { nonce?: unknown }).nonce === "string"
        ? (data as { nonce: string }).nonce
        : null;

      if (maybeNonce) {
        recentNonces.delete(maybeNonce);
      }

      console.error("[LEAD] unexpected error", err);
      return { ok: false as const, error: "unexpected_error" as const };
    }
  });

