import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES_SEO } from "@/lib/services-data";

const s = SERVICES_SEO["small-moves-london"];

export const Route = createFileRoute("/small-moves-london")({
  head: () => ({
    meta: [
      { title: s.title },
      { name: "description", content: s.description },
      { property: "og:title", content: s.h1 },
      { property: "og:description", content: s.description },
    ],
      links: [{ rel: "canonical", href: "https://www.holdwellremovals.co.uk/small-moves-london" }],
  }),
  component: () => <ServicePage service={s} />,
});
