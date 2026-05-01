import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CtaBand } from "@/components/site/CtaBand";
import { PRICING } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Removal Pricing in London — HoldWell Removal Co." },
      {
        name: "description",
        content:
          "Clear, upfront removal prices for single items, small moves and 1, 2 or 3-bed homes across London. Final price depends on access and details.",
      },
      { property: "og:title", content: "Pricing — HoldWell Removal Co." },
      { property: "og:description", content: "Honest, transparent removal pricing." },
    ],
  }),
  component: PricingPage,
});

const includes = [
  "Friendly, experienced movers",
  "Modern, clean removals van",
  "Careful loading and unloading",
  "Blankets and straps to protect items",
  "Careful handling of your belongings and equipment",
  "Confirmation before any extra work",
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-primary">
            Pricing
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Clear, upfront pricing
          </h1>
          <p className="mt-4 text-muted-foreground">
            Honest starting prices so you know what to expect. Clear, upfront pricing — no surprises.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PRICING.map((p) => (
            <div
              key={p.label}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]"
            >
              <p className="text-sm font-medium text-muted-foreground">{p.label}</p>
              <p className="mt-3 text-2xl font-bold text-primary">{p.price}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-surface-soft p-8 text-center">
          <p className="text-sm text-muted-foreground">
            Final price depends on access, distance, items and job details. For moves involving
            stairs, longer walking distances or limited access, the price may be adjusted slightly.
            We always confirm everything before continuing.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">What's included</h2>
            <ul className="mt-6 space-y-3">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground">{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-bold text-primary">Get a fast, free quote</h2>
            <p className="mt-3 text-muted-foreground">
              Tell us about your move — most quotes within minutes by call or WhatsApp.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Get a quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="tel:07737731115">Call 07737 731115</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </SiteLayout>
  );
}
