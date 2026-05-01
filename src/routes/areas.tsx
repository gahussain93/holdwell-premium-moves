import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CtaBand } from "@/components/site/CtaBand";
import { AREAS } from "@/lib/site-data";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Removal Service Areas — London | HoldWell Removal Co." },
      {
        name: "description",
        content:
          "HoldWell Removal Co. covers all London boroughs and surrounding areas. Local and long-distance moves available 7 days a week.",
      },
      { property: "og:title", content: "Service Areas — HoldWell Removal Co." },
      { property: "og:description", content: "London-wide removals & transport." },
    ],
  }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-primary">
            Service Areas
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Covering all of London
          </h1>
          <p className="mt-4 text-muted-foreground">
            From central postcodes to the outer boroughs — and long-distance moves across the UK.
          </p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {AREAS.map((a) => (
            <div
              key={a}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-card)]"
            >
              <MapPin className="h-4 w-4 text-accent-foreground" />
              <span className="text-sm font-medium text-foreground">{a}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl bg-surface-soft p-8 text-center">
          <h2 className="text-xl font-bold text-primary">Don't see your area?</h2>
          <p className="mt-2 text-muted-foreground">
            We cover Greater London and offer long-distance moves across the UK. Get in touch and
            we'll confirm.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Get a quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link to="/services">View services</Link>
            </Button>
          </div>
        </div>
      </section>
      <CtaBand />
    </SiteLayout>
  );
}
