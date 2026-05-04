import { Link } from "@tanstack/react-router";
import { Phone, MapPin, CheckCircle2, Sparkles, PackageCheck, ListChecks, AlertCircle, PoundSterling, HelpCircle, ArrowRight } from "lucide-react";
import { SiteLayout } from "./SiteLayout";
import { CtaBand } from "./CtaBand";
import { WhatsAppButton } from "./WhatsAppButton";
import { Button } from "@/components/ui/button";
import { PRICING } from "@/lib/site-data";
import { AREAS_LOCAL } from "@/lib/areas-data";
import { SERVICES_SEO, type ServiceInfo } from "@/lib/services-data";

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

      {/* WHAT THIS SERVICE INCLUDES — process step-by-step */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="flex items-center gap-3">
            <ListChecks className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary md:text-4xl">How {service.name.toLowerCase()} works, step by step</h2>
          </div>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            From booking to unloading, here's exactly what to expect when you move with us.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {service.process.map((step, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
                  {i + 1}
                </div>
                <p className="text-sm text-foreground">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h3 className="text-lg font-semibold text-primary">Included as standard</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground">
                {service.included.map((i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h3 className="text-lg font-semibold text-primary">Not included as standard</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {service.notIncluded.map((i) => (
                  <li key={i} className="flex gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON SITUATIONS */}
      <section className="bg-surface-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Common situations we handle</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            London moves rarely fit a template. Here are real scenarios we plan for every week.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.situations.map((s) => (
              <div
                key={s}
                className="flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" />
                <p className="text-sm text-foreground">{s}</p>
              </div>
            ))}
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

          {/* What affects pricing */}
          <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
            <div className="flex items-center gap-3">
              <PoundSterling className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold text-primary">What affects the price</h3>
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-foreground sm:grid-cols-2">
              {service.pricingFactors.map((f) => (
                <li key={f} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Link to="/pricing" className="text-sm font-semibold text-primary hover:opacity-80">
              View all pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* WHEN TO CHOOSE THIS SERVICE */}
      <section className="bg-surface-soft">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">When to choose this service</h2>
            <p className="mt-4 text-muted-foreground">{service.whenToChoose}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {service.relatedServices.map((slug) => {
                const rs = SERVICES_SEO[slug];
                return (
                  <a
                    key={slug}
                    href={`/${slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/40"
                  >
                    {rs.name} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-background">
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

      {/* FAQS */}
      <section className="bg-surface-soft">
        <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <div className="flex items-center gap-3">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary md:text-4xl">{service.name} FAQs</h2>
          </div>
          <div className="mt-8 space-y-4">
            {service.faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] open:bg-card"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-foreground marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
