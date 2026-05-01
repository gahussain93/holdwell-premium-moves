import type { AreaSlug } from "./areas-data";

export type ServiceSlug =
  | "house-removals-london"
  | "office-removals-london"
  | "business-relocations-london"
  | "small-moves-london"
  | "single-item-transport-london"
  | "man-and-van-london"
  | "packing-assembly-dismantling-london"
  | "storage-runs-london";

export interface ServiceInfo {
  slug: ServiceSlug;
  name: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  bullets: string[];
  details: string;
  pricingLabels: string[]; // labels from PRICING to show
  relatedAreas: AreaSlug[];
}

export const SERVICES_SEO: Record<ServiceSlug, ServiceInfo> = {
  "house-removals-london": {
    slug: "house-removals-london",
    name: "House Removals",
    h1: "House Removals in London",
    title: "House Removals London — Friendly Home Movers | HoldWell",
    description:
      "House removals across London — flats, terraces and family homes. Careful crews, the right vans and clear, upfront pricing. Call/WhatsApp 07737 731115.",
    intro:
      "Whether you're moving from a studio flat in West London or a four-bedroom family home in the suburbs, our house removal team plans every step around your property, parking and timings.",
    bullets: [
      "Studio, 1-bed, 2-bed and 3-bed+ home moves",
      "Protective blankets, straps and trolleys included",
      "Careful loading of fragile items, art and TVs",
      "Help with stairs, lifts and tight access",
    ],
    details:
      "We start by understanding your inventory, access at both ends and any restricted parking. On move day we arrive with the right van, blankets and equipment, load methodically, and place boxes in the rooms you choose at the new property.",
    pricingLabels: ["1-Bed Move", "2-Bed Move", "3-Bed+ Move"],
    relatedAreas: ["ealing", "chiswick", "fulham", "richmond"],
  },
  "office-removals-london": {
    slug: "office-removals-london",
    name: "Office Removals",
    h1: "Office Removals in London",
    title: "Office Removals London — Business Movers | HoldWell",
    description:
      "Office removals in London with minimal downtime. Evenings and weekends available. Clear, upfront pricing — no surprises.",
    intro:
      "We help London businesses move offices, studios and clinics with minimal disruption — planning out-of-hours where possible so your team is back online fast.",
    bullets: [
      "Desks, monitors, IT and server rooms handled with care",
      "Crate hire and labelling system on request",
      "Evening and weekend slots available",
      "Coordination with building managers and lifts",
    ],
    details:
      "From a few desks above a shop in Shepherd's Bush to a full-floor relocation in Hammersmith, we scope the move, agree timings with your building, and take care of the lift bookings, floor protection and reassembly at the new site.",
    pricingLabels: ["2-Bed Move", "3-Bed+ Move"],
    relatedAreas: ["fulham", "shepherds-bush", "chiswick", "ealing"],
  },
  "business-relocations-london": {
    slug: "business-relocations-london",
    name: "Business Relocations",
    h1: "Business Relocations in London",
    title: "Business Relocations London — Shops, Studios, Clinics | HoldWell",
    description:
      "Full-service business relocations across London — shops, salons, studios and clinics. Careful handling and clear, upfront pricing.",
    intro:
      "Moving a shop, salon, studio or clinic is more than furniture — it's stock, equipment and brand. We treat each business relocation as a project with a clear plan and a single point of contact.",
    bullets: [
      "Retail fit-out and stock moves",
      "Salon and clinic equipment handled carefully",
      "Studio gear, lighting and instruments",
      "Out-of-hours moves to protect trading",
    ],
    details:
      "We walk the site, list the items that need special handling, and book the right vehicle and crew. Where stock or equipment needs staging, we coordinate the order so your new space opens cleanly.",
    pricingLabels: ["2-Bed Move", "3-Bed+ Move"],
    relatedAreas: ["wembley", "harrow", "uxbridge", "brentford"],
  },
  "small-moves-london": {
    slug: "small-moves-london",
    name: "Small Moves",
    h1: "Small Moves in London",
    title: "Small Moves London — Studios, Single Rooms, Flats | HoldWell",
    description:
      "Small moves across London — studios, single rooms and small flats handled with care. Clear, upfront pricing — no surprises.",
    intro:
      "Small moves still deserve a proper crew. We handle studio flats, single-room moves and student moves across London with the same care as a full house move.",
    bullets: [
      "Studio and single-room moves",
      "Student moves to and from halls",
      "Box-only and partial moves",
      "Short-notice availability where possible",
    ],
    details:
      "Tell us roughly what's going and where, and we'll suggest the right van size and crew. Most small moves are completed in a single trip with blankets, straps and basic protection included.",
    pricingLabels: ["Single Item / 1–2 Items", "Small Move", "1-Bed Move"],
    relatedAreas: ["shepherds-bush", "fulham", "ealing", "chiswick"],
  },
  "single-item-transport-london": {
    slug: "single-item-transport-london",
    name: "Single Item Transport",
    h1: "Single Item Transport in London",
    title: "Single Item Transport London — Sofas, Fridges, Beds | HoldWell",
    description:
      "Single item transport across London — sofas, fridges, wardrobes, Marketplace pickups. Same-day often available. Call/WhatsApp 07737 731115.",
    intro:
      "Bought a sofa on Facebook Marketplace? Need a fridge moved across town? We collect and deliver single items across London, usually with same-day or next-day availability.",
    bullets: [
      "Sofas, beds, wardrobes and dining tables",
      "Fridges, washing machines and white goods",
      "Marketplace, eBay and Gumtree collections",
      "Two-person lift to upper floors on request",
    ],
    details:
      "Send us a photo of the item, the pickup and drop-off postcodes, and we'll come back with a clear price. We bring blankets, straps and a trolley, and confirm access at both ends before booking.",
    pricingLabels: ["Single Item / 1–2 Items", "Small Move"],
    relatedAreas: ["hounslow", "brentford", "wembley", "harrow"],
  },
  "man-and-van-london": {
    slug: "man-and-van-london",
    name: "Man and Van",
    h1: "Man and Van in London",
    title: "Man and Van London — Reliable Local Movers | HoldWell",
    description:
      "Reliable man and van service across London for small moves, single items and short-notice jobs. Clear, upfront pricing — no surprises.",
    intro:
      "Our man-and-van service covers everything from a couple of boxes across town to a small flat move. One driver, one helper, and the right van for the job.",
    bullets: [
      "Local moves and short cross-town jobs",
      "Marketplace pickups and drop-offs",
      "Help loading and unloading included",
      "Short-notice bookings where possible",
    ],
    details:
      "We confirm the inventory, postcodes and any access notes (lift, stairs, parking) up front so the price doesn't change on the day.",
    pricingLabels: ["Single Item / 1–2 Items", "Small Move", "1-Bed Move"],
    relatedAreas: ["ealing", "shepherds-bush", "chiswick", "fulham"],
  },
  "packing-assembly-dismantling-london": {
    slug: "packing-assembly-dismantling-london",
    name: "Packing, Assembly & Dismantling",
    h1: "Packing, Assembly & Dismantling in London",
    title: "Packing, Assembly & Dismantling London | HoldWell Removals",
    description:
      "Professional packing plus furniture assembly and dismantling across London — beds, wardrobes, desks and flat-pack handled by experienced movers.",
    intro:
      "Add packing or furniture assembly to your move so you don't lift a finger. We use quality materials and bring the tools to take beds, wardrobes and desks apart and rebuild them at the other end.",
    bullets: [
      "Full or partial packing service",
      "Quality boxes, paper and bubble wrap",
      "Beds, wardrobes, desks and flat-pack",
      "TV brackets and shelves on request",
    ],
    details:
      "Tell us which rooms or items you'd like packed, and which furniture needs dismantling. We arrive with materials and tools, work room-by-room, and label everything clearly.",
    pricingLabels: ["1-Bed Move", "2-Bed Move", "3-Bed+ Move"],
    relatedAreas: ["richmond", "fulham", "chiswick", "ealing"],
  },
  "storage-runs-london": {
    slug: "storage-runs-london",
    name: "Storage Runs",
    h1: "Storage Runs in London",
    title: "Storage Runs London — Drop-offs & Pick-ups | HoldWell",
    description:
      "Storage runs across London — drop-offs and pick-ups from any self-storage facility. Careful loading and clear, upfront pricing.",
    intro:
      "Moving items in or out of self-storage? We handle drop-offs and pick-ups from facilities like Big Yellow, Safestore and Shurgard across London.",
    bullets: [
      "Single trip or multiple loads",
      "Help with trolleys and lifts on site",
      "Careful stacking inside the unit",
      "Coordination with facility access hours",
    ],
    details:
      "Share the facility postcode, unit floor and what's going in or out — we'll bring the right van and crew, and load to make the most of your unit.",
    pricingLabels: ["Single Item / 1–2 Items", "Small Move", "1-Bed Move"],
    relatedAreas: ["ealing", "wembley", "harrow", "uxbridge"],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICES_SEO) as ServiceSlug[];
