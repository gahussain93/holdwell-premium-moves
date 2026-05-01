import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "./WhatsAppButton";

export function CtaBand() {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:px-6 md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
            Ready to move? Get a fast quote today.
          </h2>
          <p className="mt-2 text-sm text-primary-foreground/80">
            Call or message us — most quotes within minutes.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary" className="rounded-full">
            <a href="tel:07737731115" className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> 07737 731115
            </a>
          </Button>
          <WhatsAppButton size="lg" />
          <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
