import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Calendar } from "lucide-react";
import { SiteLayout } from "./SiteLayout";
import { CtaBand } from "./CtaBand";
import { WhatsAppButton } from "./WhatsAppButton";
import { Button } from "@/components/ui/button";

export function BlogPost({
  title,
  intro,
  date,
  children,
}: {
  title: string;
  intro: string;
  date: string;
  children: ReactNode;
}) {
  return (
    <SiteLayout>
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
          <Link to="/blog" className="text-sm font-semibold text-primary hover:opacity-80">
            ← Back to blog
          </Link>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" /> {date}
          </p>
          <p className="mt-6 text-base text-muted-foreground md:text-lg">{intro}</p>

          <article className="prose-blog mt-10 space-y-5 text-foreground [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-primary [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-foreground [&_li]:mt-1 [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a:hover]:opacity-80">
            {children}
          </article>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
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
      <CtaBand />
    </SiteLayout>
  );
}
