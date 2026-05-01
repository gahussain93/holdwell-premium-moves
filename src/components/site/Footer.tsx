import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { Logo } from "./Logo";

const services = [
  "House Moves",
  "Office Moves",
  "Business Relocations",
  "Single Item Transport",
  "Small Moves",
  "Packing",
];

const areas = [
  "Central London",
  "North London",
  "South London",
  "East London",
  "West London",
  "Greater London",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-soft">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Removal &amp; transport specialists for homes and businesses across London.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href="tel:07737731115" className="flex items-center gap-2 text-foreground hover:text-primary">
              <Phone className="h-4 w-4" />
              <span>07737 731115</span>
            </a>
            <a
              href="https://wa.me/447737731115"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            <a href="mailto:hello@holdwellremovals.co.uk" className="flex items-center gap-2 text-foreground hover:text-primary">
              <Mail className="h-4 w-4" />
              <span>hello@holdwellremovals.co.uk</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-primary">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/pricing", label: "Pricing" },
              { to: "/areas", label: "Areas" },
              { to: "/contact", label: "Get a Quote" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-primary">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s}>
                <Link to="/services" className="text-muted-foreground hover:text-primary">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-primary">Service Areas</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {areas.map((a) => (
              <li key={a}>
                <Link to="/areas" className="text-muted-foreground hover:text-primary">
                  {a}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} HoldWell Removal Co. All rights reserved.</p>
          <p>Removal &amp; Transport Specialists · London</p>
        </div>
      </div>
    </footer>
  );
}
