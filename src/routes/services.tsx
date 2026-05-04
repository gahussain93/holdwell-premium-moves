import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CtaBand } from "@/components/site/CtaBand";
import { SERVICES } from "@/lib/site-data";
import { PackageCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Removal Services in London — HoldWell Removal Co." },
      {
        name: "description",
        content:
          "House moves, office moves, business relocations, single item transport, packing, assembly and storage runs across London.",
      },
      { property: "og:title", content: "Our Services — HoldWell Removal Co." },
      { property: "og:description", content: "Full-service removals & transport across London." },
    ],
      links: [{ rel: "canonical", href: "https://www.holdwellremovals.co.uk/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-primary">
            Services
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Everything you need for a smooth move
          </h1>
          <p className="mt-4 text-muted-foreground">
            From a single item to a full office relocation, our experienced team handles every
            stage with care.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-colors hover:border-primary/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <PackageCheck className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-primary">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-80 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-14 flex justify-center gap-3">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contact">Get a free quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/pricing">View pricing</Link>
          </Button>
        </div>
      </section>
      <CtaBand />
    </SiteLayout>
  );
}
