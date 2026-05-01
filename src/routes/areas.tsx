import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CtaBand } from "@/components/site/CtaBand";
import { AREAS_LOCAL, AREA_SLUGS } from "@/lib/areas-data";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Removals Across West London & Nearby Areas | HoldWell" },
      {
        name: "description",
        content:
          "Local removal pages across West London — Ealing, Hounslow, Harrow, Wembley, Chiswick, Fulham, Shepherd's Bush, Brentford, Richmond and Uxbridge.",
      },
      { property: "og:title", content: "Removals Across West London & Nearby Areas" },
      { property: "og:description", content: "Dedicated local pages for removals across West London." },
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
            Removals Across West London &amp; Nearby Areas
          </h1>
          <p className="mt-4 text-muted-foreground">
            Dedicated local removal pages for the West London areas we cover most. Click your area
            for local pricing, access notes and nearby coverage.
          </p>
        </div>

        {/* Local SEO landing pages */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AREA_SLUGS.map((slug) => {
            const a = AREAS_LOCAL[slug];
            return (
              <a
                key={slug}
                href={`/removals-${slug}`}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-colors hover:border-primary/30"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Removals in {a.name}</p>
                    <p className="text-xs text-muted-foreground">House &amp; office moves</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-primary opacity-60 transition-opacity group-hover:opacity-100" />
              </a>
            );
          })}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl bg-surface-soft p-8 text-center">
          <h2 className="text-xl font-bold text-primary">Don't see your area?</h2>
          <p className="mt-2 text-muted-foreground">
            We also cover wider Greater London and offer long-distance moves across the UK. Get in
            touch and we'll confirm.
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
