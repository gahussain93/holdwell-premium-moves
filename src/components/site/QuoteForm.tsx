import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { submitLead } from "@/server/leads.functions";

function makeNonce() {
  const c = (globalThis as any).crypto;
  if (c?.randomUUID) return c.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const nonceRef = useRef<string>(makeNonce());
  const submitLeadFn = useServerFn(submitLead);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      email: String(data.get("email") || "").trim(),
      from: String(data.get("from") || "").trim(),
      to: String(data.get("to") || "").trim(),
      type: String(data.get("type") || ""),
      items: String(data.get("items") || ""),
      stairs: String(data.get("stairs") || ""),
      access: String(data.get("access") || ""),
      date: String(data.get("date") || ""),
      company: String(data.get("company") || ""),
      nonce: nonceRef.current,
    };

    if (!payload.name || !payload.phone || !payload.from || !payload.to) {
      toast.error("Please fill in name, phone, from and to.");
      return;
    }

    setPending(true);
    try {
      const res = await submitLeadFn({ data: payload });
      if (res?.ok !== true) throw new Error("Submission failed");

      // Only open WhatsApp AFTER the backend has confirmed capture.
      const lines = [
        `Quote request from ${payload.name}`,
        `Phone: ${payload.phone}`,
        ...(payload.email ? [`Email: ${payload.email}`] : []),
        `From: ${payload.from}  →  To: ${payload.to}`,
        `Type: ${payload.type}`,
        `Items / rooms: ${payload.items}`,
        `Stairs / lift: ${payload.stairs}`,
        `Access notes: ${payload.access}`,
        `Preferred date: ${payload.date}`,
      ];
      const message = encodeURIComponent(lines.join("\n"));
      try {
        window.open(`https://wa.me/447737731115?text=${message}`, "_blank");
      } catch {
        // Lead already captured server-side; ignore WhatsApp open failure.
      }
      toast.success("Quote request received. Please complete your message in WhatsApp.");
      setSubmitted(true);
      nonceRef.current = makeNonce();
      form.reset();
    } catch (err) {
      console.error(err);
      // Do NOT open WhatsApp, do NOT reset form, do NOT mark submitted.
      toast.error(
        "We couldn’t save your quote request. Please call us or message us on WhatsApp.",
      );
    } finally {
      setPending(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-[var(--shadow-card)]">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
        <h3 className="mt-4 text-2xl font-bold text-primary">Almost there</h3>
        <p className="mt-2 text-muted-foreground">
          Please complete your message in WhatsApp to send your request.
        </p>
        <Button className="mt-6" onClick={() => setSubmitted(false)} variant="outline">
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" />
        <Field label="Preferred date" name="date" type="date" />
        <Field label="From postcode" name="from" placeholder="e.g. SW1A 1AA" required />
        <Field label="To postcode" name="to" placeholder="e.g. E1 6AN" required />
        <div className="grid gap-2">
          <Label htmlFor="type">Type of move</Label>
          <Select name="type">
            <SelectTrigger id="type">
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Single item">Single item / 1–2 items</SelectItem>
              <SelectItem value="Small move">Small move</SelectItem>
              <SelectItem value="1-bed move">1-bed move</SelectItem>
              <SelectItem value="2-bed move">2-bed move</SelectItem>
              <SelectItem value="3-bed+ move">3-bed+ move</SelectItem>
              <SelectItem value="Office move">Office move</SelectItem>
              <SelectItem value="Business relocation">Business relocation</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="stairs">Stairs or lift?</Label>
          <Select name="stairs">
            <SelectTrigger id="stairs">
              <SelectValue placeholder="Select access" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ground floor">Ground floor</SelectItem>
              <SelectItem value="Lift available">Lift available</SelectItem>
              <SelectItem value="1 flight of stairs">1 flight of stairs</SelectItem>
              <SelectItem value="2+ flights of stairs">2+ flights of stairs</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Field
        label="Rooms / items / desks"
        name="items"
        placeholder="e.g. 1-bed flat, sofa, double bed, 6 boxes"
      />
      <div className="grid gap-2">
        <Label htmlFor="access">Access notes (optional)</Label>
        <Textarea id="access" name="access" rows={3} placeholder="Parking, narrow doors, long walk from van, etc." />
      </div>
      {/* Honeypot field — must remain empty. Hidden from users and assistive tech. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <Button type="submit" size="lg" className="rounded-full" disabled={pending}>
        {pending ? "Sending…" : "Get My Quote"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Final price depends on access, distance, items and job details. We confirm everything before continuing.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>
        {label}
        {required && <span className="text-accent"> *</span>}
      </Label>
      <Input id={name} name={name} type={type} required={required} placeholder={placeholder} />
    </div>
  );
}
