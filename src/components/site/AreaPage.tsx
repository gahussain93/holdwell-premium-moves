import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Home as HomeIcon, Briefcase, Truck, Package, ShieldCheck, Sparkles, Clock, AlertCircle, HelpCircle, ArrowRight } from "lucide-react";
import { SiteLayout } from "./SiteLayout";
import { CtaBand } from "./CtaBand";
import { WhatsAppButton } from "./WhatsAppButton";
import { Button } from "@/components/ui/button";
import { PRICING } from "@/lib/site-data";
import { AREAS_LOCAL, type AreaInfo, type AreaSlug } from "@/lib/areas-data";
import { SERVICES_SEO } from "@/lib/services-data";

const AREA_BLOG_LINK_CLS = "font-medium text-primary underline-offset-2 hover:underline";

const AREA_GUIDES: Record<AreaSlug, Array<{ href: string; label: string }>> = {
  ealing: [
    { href: "/blog/parking-permits-moving-london", label: "parking and bay suspension guide" },
    { href: "/blog/cost-of-moving-house-london", label: "what an Ealing move tends to cost" },
    { href: "/blog/how-to-pack-for-a-house-move-london", label: "smart packing for tight access" },
  ],
  chiswick: [
    { href: "/blog/parking-permits-moving-london", label: "permit advice for CPZ streets" },
    { href: "/blog/cost-of-moving-house-london", label: "price guide for Chiswick moves" },
    { href: "/blog/how-long-does-a-house-move-take-london", label: "realistic move-day timings" },
  ],
  fulham: [
    { href: "/blog/parking-permits-moving-london", label: "Fulham parking and bay suspensions" },
    { href: "/blog/moving-a-1-bed-flat-london", label: "moving a small flat without stress" },
    { href: "/blog/man-and-van-vs-removals-london", label: "man-and-van versus full removals" },
  ],
  "shepherds-bush": [
    { href: "/blog/parking-permits-moving-london", label: "London moving parking advice" },
    { href: "/blog/moving-a-1-bed-flat-london", label: "what a 1-bed flat move involves" },
    { href: "/blog/best-time-to-move-house-london", label: "quieter days that cost less" },
  ],
  brentford: [
    { href: "/blog/storage-options-when-moving-london", label: "local storage for in-between dates" },
    { href: "/blog/parking-permits-moving-london", label: "permits for riverside access" },
    { href: "/blog/cost-of-moving-house-london", label: "typical Brentford move cost" },
  ],
  hounslow: [
    { href: "/blog/moving-house-checklist-uk", label: "our 4-week moving checklist" },
    { href: "/blog/how-long-does-a-house-move-take-london", label: "how long the day usually takes" },
    { href: "/blog/cost-of-moving-house-london", label: "Hounslow moving price guide" },
  ],
  richmond: [
    { href: "/blog/cost-of-moving-house-london", label: "price guide for Richmond moves" },
    { href: "/blog/moving-house-checklist-uk", label: "the run-up to move day, week by week" },
    { href: "/blog/how-to-pack-for-a-house-move-london", label: "packing a family home efficiently" },
  ],
  uxbridge: [
    { href: "/blog/how-long-does-a-house-move-take-london", label: "realistic move-day timings" },
    { href: "/blog/storage-options-when-moving-london", label: "storage between completion dates" },
    { href: "/blog/moving-house-checklist-uk", label: "a 4-week pre-move checklist" },
  ],
  harrow: [
    { href: "/blog/moving-house-checklist-uk", label: "our pre-move checklist" },
    { href: "/blog/how-long-does-a-house-move-take-london", label: "how long a Harrow move usually takes" },
    { href: "/blog/storage-options-when-moving-london", label: "storage when dates don't line up" },
  ],
  wembley: [
    { href: "/blog/how-long-does-a-house-move-take-london", label: "typical move durations" },
    { href: "/blog/moving-a-1-bed-flat-london", label: "moving a small flat in London" },
    { href: "/blog/storage-options-when-moving-london", label: "storage options near Wembley" },
  ],
};

function renderAreaGuides(slug: AreaSlug) {
  const items = AREA_GUIDES[slug] ?? [];
  return items.map((g, i) => (
    <span key={g.href}>
      {i > 0 && (i === items.length - 1 ? " and " : ", ")}
      <a href={g.href} className={AREA_BLOG_LINK_CLS}>{g.label}</a>
    </span>
  ));
}

export function AreaPage({ area }: { area: AreaInfo }) {
  const sections = [
    { icon: HomeIcon, title: "House moves", body: area.houseMoves, to: "/house-removals-london" as const },
    { icon: Briefcase, title: "Office moves", body: area.officeMoves, to: "/office-removals-london" as const },
    { icon: Truck, title: "Single item transport", body: area.singleItem, to: "/single-item-transport-london" as const },
    { icon: Package, title: "Small moves", body: area.smallMoves, to: "/small-moves-london" as const },
  ];

  const faqJsonLd = area.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: area.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <SiteLayout>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
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
                <Phone className="h-4 w-4" /> Call 07737 731115
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
              <Link key={s.title} to={s.to} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-colors hover:border-primary/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </Link>
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

      {/* MOVING IN [AREA]: WHAT TO EXPECT */}
      <section className="bg-surface-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Moving in {area.name}: what to expect
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">{area.whatToExpect}</p>
          <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
            Planning your move? See {renderAreaGuides(area.slug)} for what to expect locally.
          </p>
        </div>
      </section>

      {/* COMMON CHALLENGES */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              Common moving challenges in {area.name}
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {area.challenges.map((c) => (
              <div
                key={c}
                className="flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
              >
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" />
                <p className="text-sm text-foreground">{c}</p>
              </div>
            ))}
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

      {/* TYPICAL TIMES */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary md:text-3xl">
                Typical move times in {area.name}
              </h2>
            </div>
            <p className="mt-5 text-muted-foreground">{area.typicalTimes}</p>
            <p className="mt-3 text-xs text-muted-foreground">
              Times are general expectations, not promises — final duration depends on your specific access, inventory and route.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES (internal linking) */}
      <section className="bg-surface-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            Popular services in {area.name}
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {area.relatedServices.map((slug) => {
              const rs = SERVICES_SEO[slug];
              return (
                <a
                  key={slug}
                  href={`/${slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/40"
                >
                  {rs.name} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              );
            })}
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
                <a
                  key={slug}
                  href={`/removals-${slug}`}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-card)] transition-colors hover:border-primary/30"
                >
                  <MapPin className="h-4 w-4 text-accent-foreground" />
                  <span className="text-sm font-medium text-foreground">
                    Removals in {n.name}
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
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Removals in {area.name} — FAQs</h2>
          </div>
          <div className="mt-8 space-y-4">
            {area.faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
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
