import { createFileRoute } from "@tanstack/react-router";
import { AreaPage } from "@/components/site/AreaPage";
import { AREAS_LOCAL } from "@/lib/areas-data";

export const Route = createFileRoute("/removals-ealing")({
  head: () => ({
    meta: [
      { title: "Removals Ealing — House & Office Movers W5 | HoldWell" },
      { name: "description", content: "Trusted removals in Ealing W5/W13. House moves, office relocations, single item transport and small moves. Call or WhatsApp 07737 731115." },
      { property: "og:title", content: "Removals in Ealing — HoldWell Removal Co." },
      { property: "og:description", content: "House & office removals across Ealing W5 and W13." },
    ],
      links: [{ rel: "canonical", href: "https://www.holdwellremovals.co.uk/removals-ealing" }],
  }),
  component: () => <AreaPage area={AREAS_LOCAL.ealing} />,
});
