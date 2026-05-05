import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(5).max(40),
  email: z.string().trim().email().max(255).optional().or(z.literal("")),
  date: z.string().trim().max(40).optional().or(z.literal("")),
  from: z.string().trim().min(1).max(120),
  to: z.string().trim().min(1).max(120),
  type: z.string().trim().max(80).optional().or(z.literal("")),
  stairs: z.string().trim().max(80).optional().or(z.literal("")),
  items: z.string().trim().max(500).optional().or(z.literal("")),
  access: z.string().trim().max(1000).optional().or(z.literal("")),
  // honeypot — must be empty
  company: z.string().max(0).optional(),
  // idempotency token
  nonce: z.string().min(8).max(80),
});

// Simple in-memory dedupe (per worker instance)
const seen = new Map<string, number>();
const TTL_MS = 5 * 60 * 1000;

function dedupe(nonce: string): boolean {
  const now = Date.now();
  for (const [k, t] of seen) if (now - t > TTL_MS) seen.delete(k);
  if (seen.has(nonce)) return false;
  seen.set(nonce, now);
  return true;
}

async function deliverLead(lead: z.infer<typeof LeadSchema>) {
  // Structured log — captured by Cloudflare Worker logs as the durable record.
  // If RESEND_API_KEY is configured, also send an email to the inbox.
  const payload = {
    type: "quote_lead",
    receivedAt: new Date().toISOString(),
    ...lead,
  };
  console.log("[LEAD]", JSON.stringify(payload));

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
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
        from: "HoldWell Leads <leads@holdwellremovals.co.uk>",
        to: ["holdwellremovals@hotmail.com"],
        reply_to: lead.email || undefined,
        subject: `New quote request — ${lead.name}`,
        text: lines.join("\n"),
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`Email delivery failed: ${res.status} ${body}`);
    }
  }
}

export const Route = createFileRoute("/api/public/lead")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return new Response(JSON.stringify({ ok: false, error: "Invalid JSON" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const parsed = LeadSchema.safeParse(body);
        if (!parsed.success) {
          return new Response(
            JSON.stringify({ ok: false, error: "Invalid input" }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }

        // Honeypot triggered → respond OK silently but do nothing
        if (parsed.data.company && parsed.data.company.length > 0) {
          return Response.json({ ok: true });
        }

        if (!dedupe(parsed.data.nonce)) {
          return Response.json({ ok: true, deduped: true });
        }

        try {
          await deliverLead(parsed.data);
        } catch (err) {
          console.error("[LEAD] delivery error", err);
          return new Response(
            JSON.stringify({ ok: false, error: "Delivery failed" }),
            { status: 502, headers: { "Content-Type": "application/json" } },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
