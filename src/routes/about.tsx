import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/button";
import { ShieldCheck, BadgePoundSterling, Sparkles, Clock } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HoldWell Removals — London Removal Specialists" },
      { name: "description", content: "HoldWell Removals is a London-based removal & transport specialist. We move, you settle." },
      { property: "og:title", content: "About — HoldWell Removals" },
      { property: "og:description", content: "Friendly, professional London removals team." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: BadgePoundSterling, title: "Honest pricing", desc: "Clear, upfront pricing — no surprises." },
  { icon: ShieldCheck, title: "Careful handling", desc: "Careful handling of your belongings and equipment." },
  { icon: Sparkles, title: "Treated with respect", desc: "We treat your items with the respect they deserve." },
  { icon: Clock, title: "Reliable & on time", desc: "We arrive when we say we will, every time." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-4 py-20 md:px-6 md:py-28 text-center">
        <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-primary">
          About HoldWell
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">
          We move, you settle.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          HoldWell Removals is a friendly, professional removal & transport company based in London.
          From a single item to a full office relocation, we handle every move with care and clear,
          upfront pricing — no surprises.
        </p>
      </section>

      <section className="bg-surface-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">What we stand for</h2>
            <p className="mt-3 text-muted-foreground">
              The values that guide every move we make.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Get a free quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link to="/services">Our services</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
