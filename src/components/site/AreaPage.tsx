import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Home as HomeIcon, Briefcase, Truck, Package, ShieldCheck, Sparkles } from "lucide-react";
import { SiteLayout } from "./SiteLayout";
import { CtaBand } from "./CtaBand";
import { WhatsAppButton } from "./WhatsAppButton";
import { Button } from "@/components/ui/button";
import { PRICING } from "@/lib/site-data";
import { AREAS_LOCAL, type AreaInfo } from "@/lib/areas-data";

export function AreaPage({ area }: { area: AreaInfo }) {
  const sections = [
    { icon: HomeIcon, title: "House moves", body: area.houseMoves },
    { icon: Briefcase, title: "Office moves", body: area.officeMoves },
    { icon: Truck, title: "Single item transport", body: area.singleItem },
    { icon: Package, title: "Small moves", body: area.smallMoves },
  ];

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-primary">
            <MapPin className="h-3.5 w-3.5" /> {area.name}, London
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            House &amp; Office Removals in <span className="text-primary">{area.name}</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base text-muted-foreground md:text-lg">{area.intro}</p>
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

      {/* SERVICES */}
      <section className="bg-surface-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Our removal services in {area.name}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {sections.map((s) => (
              <div key={s.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESS NOTES */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-primary md:text-3xl">
                Local access in {area.name}
              </h2>
            </div>
            <p className="mt-5 text-muted-foreground">{area.accessNotes}</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-foreground">
              <Sparkles className="h-4 w-4 text-accent-foreground" />
              Careful handling of your belongings and equipment.
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-surface-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Removal prices in {area.name}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Clear, upfront pricing — no surprises. Final price depends on access, distance, items
            and job details.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PRICING.map((p) => (
              <div key={p.label} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]">
                <p className="text-sm font-medium text-muted-foreground">{p.label}</p>
                <p className="mt-3 text-2xl font-bold text-primary">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY AREAS */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">Nearby areas we cover</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {area.nearby.map((slug) => {
              const n = AREAS_LOCAL[slug];
              return (
                <Link
                  key={slug}
                  to={`/removals-${slug}` as "/removals-ealing"}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-card)] transition-colors hover:border-primary/30"
                >
                  <MapPin className="h-4 w-4 text-accent-foreground" />
                  <span className="text-sm font-medium text-foreground">
                    Removals in {n.name}
                  </span>
                </Link>
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
