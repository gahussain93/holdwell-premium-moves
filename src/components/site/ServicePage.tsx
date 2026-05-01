import { Link } from "@tanstack/react-router";
import { Phone, MapPin, CheckCircle2, Sparkles, PackageCheck } from "lucide-react";
import { SiteLayout } from "./SiteLayout";
import { CtaBand } from "./CtaBand";
import { WhatsAppButton } from "./WhatsAppButton";
import { Button } from "@/components/ui/button";
import { PRICING } from "@/lib/site-data";
import { AREAS_LOCAL } from "@/lib/areas-data";
import type { ServiceInfo } from "@/lib/services-data";

export function ServicePage({ service }: { service: ServiceInfo }) {
  const prices = PRICING.filter((p) => service.pricingLabels.includes(p.label));

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-primary">
            <PackageCheck className="h-3.5 w-3.5" /> {service.name} · London
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {service.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-base text-muted-foreground md:text-lg">
            {service.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <a href="tel:07737731115" className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /> Call / WhatsApp 07737731115
              </a>
            </Button>
            <WhatsAppButton size="lg" />
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="bg-surface-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            What's included
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.bullets.map((b) => (
              <div
                key={b}
                className="flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-foreground">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl text-muted-foreground">
            <p>{service.details}</p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-foreground">
              <Sparkles className="h-4 w-4 text-accent-foreground" />
              Careful handling of your belongings and equipment.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            {service.name} prices
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Clear, upfront pricing — no surprises. Final price depends on access, distance, items
            and job details.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {prices.map((p) => (
              <div
                key={p.label}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]"
              >
                <p className="text-sm font-medium text-muted-foreground">{p.label}</p>
                <p className="mt-3 text-2xl font-bold text-primary">{p.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/pricing" className="text-sm font-semibold text-primary hover:opacity-80">
              View all pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-surface-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            {service.name} in your area
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {service.relatedAreas.map((slug) => {
              const a = AREAS_LOCAL[slug];
              return (
                <a
                  key={slug}
                  href={`/removals-${slug}`}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-card)] transition-colors hover:border-primary/30"
                >
                  <MapPin className="h-4 w-4 text-accent-foreground" />
                  <span className="text-sm font-medium text-foreground">
                    Removals in {a.name}
                  </span>
                </a>
              );
            })}
          </div>
          <div className="mt-10">
            <Link to="/areas" className="text-sm font-semibold text-primary hover:opacity-80">
              View all areas we cover →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
