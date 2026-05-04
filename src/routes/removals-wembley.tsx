import { createFileRoute } from "@tanstack/react-router";
import { AreaPage } from "@/components/site/AreaPage";
import { AREAS_LOCAL } from "@/lib/areas-data";

export const Route = createFileRoute("/removals-wembley")({
  head: () => ({
    meta: [
      { title: "Removals Wembley — House & Office Movers HA9 | HoldWell" },
      { name: "description", content: "Removals in Wembley HA0/HA9 — flats, family homes and offices around Wembley Park. Call/WhatsApp 07737 731115." },
      { property: "og:title", content: "Removals in Wembley — HoldWell Removal Co." },
      { property: "og:description", content: "House & office removals across Wembley." },
    ],
      links: [{ rel: "canonical", href: "https://www.holdwellremovals.co.uk/removals-wembley" }],
  }),
  component: () => <AreaPage area={AREAS_LOCAL.wembley} />,
});
