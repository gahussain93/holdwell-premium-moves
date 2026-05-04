import { createFileRoute } from "@tanstack/react-router";
import { AreaPage } from "@/components/site/AreaPage";
import { AREAS_LOCAL } from "@/lib/areas-data";

export const Route = createFileRoute("/removals-richmond")({
  head: () => ({
    meta: [
      { title: "Removals Richmond — House & Office Movers TW9 | HoldWell" },
      { name: "description", content: "Careful removals in Richmond TW9/TW10 — Georgian townhouses, riverside flats and town-centre offices. Call/WhatsApp 07737 731115." },
      { property: "og:title", content: "Removals in Richmond — HoldWell Removal Co." },
      { property: "og:description", content: "House & office removals across Richmond." },
    ],
      links: [{ rel: "canonical", href: "https://www.holdwellremovals.co.uk/removals-richmond" }],
  }),
  component: () => <AreaPage area={AREAS_LOCAL.richmond} />,
});
