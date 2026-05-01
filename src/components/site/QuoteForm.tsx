import { useState } from "react";
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

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const from = String(data.get("from") || "");
    const to = String(data.get("to") || "");
    const type = String(data.get("type") || "");
    const items = String(data.get("items") || "");
    const stairs = String(data.get("stairs") || "");
    const access = String(data.get("access") || "");
    const date = String(data.get("date") || "");

    const lines = [
      `Quote request from ${name}`,
      `Phone: ${phone}`,
      `From: ${from}  →  To: ${to}`,
      `Type: ${type}`,
      `Items / rooms: ${items}`,
      `Stairs / lift: ${stairs}`,
      `Access notes: ${access}`,
      `Preferred date: ${date}`,
    ];
    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/447737731115?text=${message}`, "_blank");
    toast.success("Thanks! We'll be in touch shortly.");
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-[var(--shadow-card)]">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
        <h3 className="mt-4 text-2xl font-bold text-primary">Quote request sent</h3>
        <p className="mt-2 text-muted-foreground">
          We've opened WhatsApp with your details. We'll confirm your quote shortly.
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
      <Button type="submit" size="lg" className="rounded-full">
        Send quote request
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
