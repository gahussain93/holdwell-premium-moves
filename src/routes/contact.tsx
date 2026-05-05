import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { QuoteForm } from "@/components/site/QuoteForm";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get a Quote — HoldWell Removal Co. | London Removals" },
      {
        name: "description",
        content:
          "Request a fast, free removal quote in London. Call or WhatsApp 07737 731115 for house moves, office moves and single item transport.",
      },
      { property: "og:title", content: "Contact HoldWell Removal Co." },
      { property: "og:description", content: "Fast quotes by call, WhatsApp or form." },
    ],
      links: [{ rel: "canonical", href: "https://www.holdwellremovals.co.uk/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <Toaster richColors position="top-center" />
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-primary">
            Get a Quote
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Tell us about your move
          </h1>
          <p className="mt-4 text-muted-foreground">
            Fill in the form and we'll come back to you fast — or message us directly on WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <aside className="space-y-5">
            <ContactCard
              icon={<Phone className="h-5 w-5" />}
              title="Call us"
              line="07737 731115"
              href="tel:07737731115"
            />
            <ContactCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="WhatsApp"
              line="Fastest way to a quote"
              href="https://wa.me/447737731115"
              external
            />
            <ContactCard
              icon={<Mail className="h-5 w-5" />}
              title="Email"
              line="holdwellremovals@hotmail.com"
              href="mailto:holdwellremovals@hotmail.com"
            />
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <h2 className="text-base font-semibold text-primary">Hours</h2>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Open 7 days a week · Early starts &amp; evening moves available on request.
              </p>
            </div>
            <WhatsAppButton size="lg" className="w-full" label="Message on WhatsApp" />
          </aside>

          <div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactCard({
  icon,
  title,
  line,
  href,
  external,
}: {
  icon: React.ReactNode;
  title: string;
  line: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-colors hover:border-primary/30"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-primary">{title}</p>
        <p className="text-sm text-muted-foreground">{line}</p>
      </div>
    </a>
  );
}
