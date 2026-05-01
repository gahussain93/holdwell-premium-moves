import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES_SEO } from "@/lib/services-data";

const s = SERVICES_SEO["house-removals-london"];

export const Route = createFileRoute("/house-removals-london")({
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
