import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, BadgePoundSterling, MapPin, PackageCheck, Clock, Sparkles, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/button";
import { PRICING, SERVICES } from "@/lib/site-data";
import vanImg from "@/assets/removals-van.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HoldWell Removal Co. — House & Office Removals in London" },
      {
        name: "description",
        content:
          "Clear, upfront pricing for house moves, office relocations, single item transport and small moves across London. Call or WhatsApp 07737 731115.",
      },
      { property: "og:title", content: "HoldWell Removal Co. — Removals in London" },
      { property: "og:description", content: "House & office removal specialists across London." },
      { property: "og:image", content: vanImg },
    ],
  }),
  component: HomePage,
});

const trustItems = [
  { icon: BadgePoundSterling, title: "Clear, upfront pricing", desc: "No hidden fees, no surprises." },
  { icon: PackageCheck, title: "House & office specialists", desc: "Experienced with every move type." },
  { icon: MapPin, title: "Local & long-distance", desc: "Across London and beyond." },
  { icon: ShieldCheck, title: "Fully insured", desc: "Your belongings are protected." },
  { icon: Sparkles, title: "Careful handling", desc: "We treat your items like our own." },
  { icon: Clock, title: "Fast quotes", desc: "Reply within minutes by call or WhatsApp." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-primary">
              Removal &amp; Transport Specialists
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
              House &amp; Office Removals in London
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Clear, upfront pricing for house moves, office relocations, single item transport,
              small moves and business relocations across London.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <a href="tel:07737731115" className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Call 07737 731115
                </a>
              </Button>
              <WhatsAppButton size="lg" label="WhatsApp us" />
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Fully insured · Fast quotes · 7 days a week
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-surface-soft" />
            <img
              src={vanImg}
              alt="Modern white removals van for HoldWell Removal Co."
              width={1280}
              height={960}
              className="mx-auto h-auto w-full max-w-xl rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* PRICING STRIP */}
      <section className="border-y border-border bg-surface-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold text-primary md:text-4xl">Transparent pricing</h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Honest starting prices for every type of move.
              </p>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground md:text-right">
              Final price depends on access, distance, items and job details.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PRICING.map((p) => (
              <div
                key={p.label}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
              >
                <p className="text-sm font-medium text-muted-foreground">{p.label}</p>
                <p className="mt-3 text-2xl font-bold text-primary">{p.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/pricing" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:opacity-80">
              See full pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Our services</h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need for a smooth move — from a single item to a full office relocation.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-colors hover:border-primary/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <PackageCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/services">Explore all services</Link>
          </Button>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-surface-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Why choose HoldWell</h2>
            <p className="mt-3 text-muted-foreground">
              A friendly, professional team built on trust and clear communication.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trustItems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-primary">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-20 md:px-6">
          <div className="rounded-3xl bg-surface-soft p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">Honest, flexible pricing</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              For moves involving stairs, longer walking distances or limited access, the price may
              be adjusted slightly depending on the work involved. We always confirm everything
              before continuing.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
