import { createFileRoute } from "@tanstack/react-router";
import { AreaPage } from "@/components/site/AreaPage";
import { AREAS_LOCAL } from "@/lib/areas-data";

export const Route = createFileRoute("/removals-shepherds-bush")({
  head: () => ({
    meta: [
      { title: "Removals Shepherd's Bush — House & Office Movers W12 | HoldWell" },
      { name: "description", content: "Removals in Shepherd's Bush W12 — terraces, flats above shops and offices around Westfield. Call/WhatsApp 07737 731115." },
      { property: "og:title", content: "Removals in Shepherd's Bush — HoldWell Removal Co." },
      { property: "og:description", content: "House & office removals across Shepherd's Bush W12." },
    ],
  }),
  component: () => <AreaPage area={AREAS_LOCAL["shepherds-bush"]} />,
});
