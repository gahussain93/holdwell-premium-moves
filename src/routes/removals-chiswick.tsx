import { createFileRoute } from "@tanstack/react-router";
import { AreaPage } from "@/components/site/AreaPage";
import { AREAS_LOCAL } from "@/lib/areas-data";

export const Route = createFileRoute("/removals-chiswick")({
  head: () => ({
    meta: [
      { title: "Removals Chiswick — House & Office Movers W4 | HoldWell" },
      { name: "description", content: "Careful removals in Chiswick W4 — period homes, riverside flats and Chiswick Park offices. Call/WhatsApp 07737 731115." },
      { property: "og:title", content: "Removals in Chiswick — HoldWell Removal Co." },
      { property: "og:description", content: "House & office removals across Chiswick W4." },
    ],
  }),
  component: () => <AreaPage area={AREAS_LOCAL.chiswick} />,
});
