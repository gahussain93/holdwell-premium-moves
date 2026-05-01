import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES_SEO } from "@/lib/services-data";

const s = SERVICES_SEO["single-item-transport-london"];

export const Route = createFileRoute("/single-item-transport-london")({
  head: () => ({
    meta: [
      { title: s.title },
      { name: "description", content: s.description },
      { property: "og:title", content: s.h1 },
      { property: "og:description", content: s.description },
    ],
  }),
  component: () => <ServicePage service={s} />,
});
