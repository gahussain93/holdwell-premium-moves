import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone, ShieldCheck, BadgePoundSterling, MapPin, Clock, Sparkles, PackageCheck,
  Package, Home as HomeIcon, Building2, Briefcase, Truck, Boxes, Wrench, Warehouse,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-van-london.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HoldWell Removals — House & Office Removals in London" },
      {
        name: "description",
        content:
          "Clear, upfront pricing for house moves, office relocations, single item transport and small moves across London. Call or WhatsApp 07737 731115.",
      },
      { property: "og:title", content: "HoldWell Removals — Removals in London" },
      { property: "og:description", content: "House & office removal specialists across London." },
      { property: "og:image", content: heroImg },
    ],
      links: [{ rel: "canonical", href: "https://www.holdwellremovals.co.uk/" }],
  }),
  component: HomePage,
});

const PRICING = [
  { label: "Single Item / 1–2 Items", price: "£70", icon: Package },
  { label: "Small Move", price: "£100", icon: Boxes },
  { label: "1-Bed Move", price: "£200", icon: HomeIcon },
  { label: "2-Bed Move", price: "£320", icon: Building2 },
  { label: "3-Bed+ Move", price: "£500", icon: Building2 },
];

const SERVICES = [
  { title: "House Moves", desc: "Local and long-distance house removals of all sizes.", icon: HomeIcon },
  { title: "Office Moves", desc: "Office relocations, equipment transport and business moves.", icon: Briefcase },
  { title: "Business Relocations", desc: "Professional business relocations across London.", icon: Building2 },
  { title: "Single Item Transport", desc: "Fast and reliable single item delivery.", icon: Truck },
  { title: "Small Moves", desc: "Perfect for small loads and part-load moves.", icon: Package },
  { title: "Packing", desc: "Secure packing services to protect your items.", icon: Boxes },
  { title: "Assembly & Dismantling", desc: "Furniture assembly and dismantling service.", icon: Wrench },
  { title: "Storage Runs", desc: "Storage pick-ups and drop-offs.", icon: Warehouse },
];

const trustItems = [
  { icon: BadgePoundSterling, title: "Clear, upfront pricing", desc: "No surprises — what we quote is what you pay for the agreed work." },
  { icon: PackageCheck, title: "House & office specialists", desc: "Experienced with every move type." },
  { icon: MapPin, title: "Local & long-distance", desc: "Across London and beyond." },
  { icon: ShieldCheck, title: "Careful handling", desc: "Careful handling of your belongings and equipment." },
  { icon: Sparkles, title: "Treated like our own", desc: "We treat every item with respect." },
  { icon: Clock, title: "Fast quotes", desc: "Reply within minutes by call or WhatsApp." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:grid-cols-[1fr_1.1fr] md:gap-6 md:px-6 md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-primary shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5" />
              Removal &amp; Transport Specialists
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              House &amp; Office <br className="hidden sm:inline" />
              Removals in <span className="text-primary">West London</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Clear, upfront pricing for house moves, office relocations, single item transport
              and small moves across West London, including Ealing, Hounslow, Harrow and Wembley.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <a href="tel:07737731115" className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Call / WhatsApp 07737731115
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="HoldWell Removals van on a London bridge with the London Eye and Big Ben"
              width={1536}
              height={1024}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="mx-auto h-auto w-full max-w-2xl rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* PRICING STRIP */}
      <section className="bg-background pb-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                {PRICING.map((p) => (
                  <div key={p.label} className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-foreground">{p.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">from</p>
                    <p className="text-3xl font-bold text-primary">{p.price}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-6 lg:max-w-[200px] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="border-l-2 border-accent pl-4 text-sm font-semibold text-foreground">
                  Final price depends on access, distance, items and job details.
                </p>
                <p className="mt-3 pl-4 text-xs text-muted-foreground">
                  We always confirm everything clearly before the move.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Our Services</h2>
            <p className="mt-3 text-muted-foreground">
              Complete removal and transport solutions for homes and businesses.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-colors hover:border-primary/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-primary">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-3">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/services">Explore all services</Link>
            </Button>
            <WhatsAppButton />
          </div>
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
