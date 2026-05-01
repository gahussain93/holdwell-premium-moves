import { createFileRoute } from "@tanstack/react-router";
import { AreaPage } from "@/components/site/AreaPage";
import { AREAS_LOCAL } from "@/lib/areas-data";

export const Route = createFileRoute("/removals-harrow")({
  head: () => ({
    meta: [
      { title: "Removals Harrow — House & Office Movers HA1 | HoldWell" },
      { name: "description", content: "Professional removals across Harrow HA1, HA2, HA3. House moves, offices, single items, small moves. Call/WhatsApp 07737 731115." },
      { property: "og:title", content: "Removals in Harrow — HoldWell Removal Co." },
      { property: "og:description", content: "House & office removals across Harrow." },
    ],
  }),
  component: () => <AreaPage area={AREAS_LOCAL.harrow} />,
});
