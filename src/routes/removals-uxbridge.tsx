import { createFileRoute } from "@tanstack/react-router";
import { AreaPage } from "@/components/site/AreaPage";
import { AREAS_LOCAL } from "@/lib/areas-data";

export const Route = createFileRoute("/removals-uxbridge")({
  head: () => ({
    meta: [
      { title: "Removals Uxbridge — House & Office Movers UB8 | HoldWell" },
      { name: "description", content: "Removals in Uxbridge UB8 — family homes, student flats and Stockley Park offices. Call/WhatsApp 07737 731115." },
      { property: "og:title", content: "Removals in Uxbridge — HoldWell Removal Co." },
      { property: "og:description", content: "House & office removals across Uxbridge." },
    ],
  }),
  component: () => <AreaPage area={AREAS_LOCAL.uxbridge} />,
});
