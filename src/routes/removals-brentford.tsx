import { createFileRoute } from "@tanstack/react-router";
import { AreaPage } from "@/components/site/AreaPage";
import { AREAS_LOCAL } from "@/lib/areas-data";

export const Route = createFileRoute("/removals-brentford")({
  head: () => ({
    meta: [
      { title: "Removals Brentford — House & Office Movers TW8 | HoldWell" },
      { name: "description", content: "Removals in Brentford TW8 — riverside apartments, family terraces and Great West Road offices. Call/WhatsApp 07737 731115." },
      { property: "og:title", content: "Removals in Brentford — HoldWell Removal Co." },
      { property: "og:description", content: "House & office removals across Brentford TW8." },
    ],
      links: [{ rel: "canonical", href: "https://www.holdwellremovals.co.uk/removals-brentford" }],
  }),
  component: () => <AreaPage area={AREAS_LOCAL.brentford} />,
});
