import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import {
  SITE_URL,
  BUSINESS_NAME,
  PHONE_E164,
  EMAIL,
  LOGO_URL,
  SERVICE_TYPES,
} from "@/lib/site-config";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HoldWell Removal Co. — Removal & Transport Specialists" },
      { name: "description", content: "House & office removals in London. Clear, upfront pricing. Call or WhatsApp 07737 731115." },
      { name: "author", content: "HoldWell Removal Co." },
      { property: "og:title", content: "HoldWell Removal Co." },
      { property: "og:description", content: "Removal & Transport Specialists across London." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

const movingCompanyJsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: BUSINESS_NAME,
  url: SITE_URL,
  telephone: PHONE_E164,
  logo: LOGO_URL,
  image: LOGO_URL,
  priceRange: "££",
  areaServed: SERVICE_AREAS,
  serviceType: SERVICE_TYPES,
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BUSINESS_NAME,
  url: SITE_URL,
};

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(movingCompanyJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
