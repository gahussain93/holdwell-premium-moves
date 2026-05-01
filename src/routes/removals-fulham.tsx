import { createFileRoute } from "@tanstack/react-router";
import { AreaPage } from "@/components/site/AreaPage";
import { AREAS_LOCAL } from "@/lib/areas-data";

export const Route = createFileRoute("/removals-fulham")({
  head: () => ({
    meta: [
      { title: "Removals Fulham — House & Office Movers SW6 | HoldWell" },
      { name: "description", content: "Trusted removals in Fulham SW6 — townhouses, mansion blocks and riverside flats. Call/WhatsApp 07737 731115." },
      { property: "og:title", content: "Removals in Fulham — HoldWell Removal Co." },
      { property: "og:description", content: "House & office removals across Fulham SW6." },
    ],
  }),
  component: () => <AreaPage area={AREAS_LOCAL.fulham} />,
});
