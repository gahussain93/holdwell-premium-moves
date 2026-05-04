import { createFileRoute } from "@tanstack/react-router";
import { AreaPage } from "@/components/site/AreaPage";
import { AREAS_LOCAL } from "@/lib/areas-data";

export const Route = createFileRoute("/removals-hounslow")({
  head: () => ({
    meta: [
      { title: "Removals Hounslow — House & Office Movers TW3 | HoldWell" },
      { name: "description", content: "Reliable removals in Hounslow TW3, TW4, TW5. House moves, office moves, single items and small loads. Call/WhatsApp 07737 731115." },
      { property: "og:title", content: "Removals in Hounslow — HoldWell Removal Co." },
      { property: "og:description", content: "House & office removals across Hounslow and the TW area." },
    ],
      links: [{ rel: "canonical", href: "https://www.holdwellremovals.co.uk/removals-hounslow" }],
  }),
  component: () => <AreaPage area={AREAS_LOCAL.hounslow} />,
});
