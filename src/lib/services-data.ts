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

export interface FAQ {
  q: string;
  a: string;
}

export interface ServiceInfo {
  slug: ServiceSlug;
  name: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  bullets: string[];
  details: string;
  pricingLabels: string[];
  relatedAreas: AreaSlug[];
  // New SEO depth fields
  process: string[]; // booking → arrival → loading → transport → unloading
  included: string[];
  notIncluded: string[];
  situations: string[]; // common London scenarios
  pricingFactors: string[]; // what affects price
  whenToChoose: string; // helps user decide vs other services
  faqs: FAQ[];
  relatedServices: ServiceSlug[];
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
    process: [
      "Booking: share your address, inventory and access notes (lift, stairs, parking) so we can quote a realistic price and crew size.",
      "Pre-move check: we confirm parking suspensions, lift bookings and the date the day before.",
      "Arrival: crew arrives at the agreed slot, walks the property and protects floors and door frames.",
      "Loading: items are wrapped in blankets, secured with straps and loaded room-by-room so unloading is logical at the other end.",
      "Transport: a single dedicated van drives directly to your new address — no consolidated loads.",
      "Unloading: boxes go to the rooms you point out, large furniture is positioned where you want it, and we remove our equipment when done.",
    ],
    included: [
      "Dedicated crew of 2–3 movers",
      "Blankets, straps, trolleys and floor protection",
      "Disassembly of standard beds and tables on request",
      "Direct travel between addresses",
    ],
    notIncluded: [
      "Packing service (available as an add-on)",
      "Parking suspensions or congestion charges",
      "Specialist piano or safe moving",
    ],
    situations: [
      "Top-floor flats with no lift in Victorian conversions",
      "Narrow terraced streets with CPZ bays only",
      "Mansion blocks requiring service-lift bookings",
      "Last-minute moves after a delayed completion",
      "Heavy items like American fridges, sofas and pianos through tight doorways",
    ],
    pricingFactors: [
      "Distance between the two addresses",
      "Number of stairs or whether a lift is available",
      "Walking distance from the parking spot to the door",
      "Volume of items and any awkward or heavy pieces",
      "Whether packing or dismantling is added",
    ],
    whenToChoose:
      "Choose house removals when you're moving an entire 1-bed or larger property and need a proper crew, the right van and equipment. For a few boxes or a single room, our man and van or small moves service is usually a better fit.",
    faqs: [
      {
        q: "How far in advance should I book a house move in London?",
        a: "Two to four weeks is ideal, especially for end-of-month dates and Fridays. We can often handle short-notice moves within 48 hours when crews are available.",
      },
      {
        q: "Do you dismantle and reassemble furniture?",
        a: "Yes. Standard beds, dining tables and basic flat-pack are handled as part of the move. Wardrobes and complex units are best added as a packing/assembly add-on.",
      },
      {
        q: "What happens if my completion is delayed on the day?",
        a: "We hold the van and crew at the loaded address while you wait for keys. There may be a waiting charge after the first hour — we always confirm before any extra cost.",
      },
      {
        q: "Are my belongings insured during the move?",
        a: "We carry goods-in-transit cover for items handled by our crew. For high-value items like fine art or antiques, let us know in advance so we can recommend additional cover.",
      },
      {
        q: "Can you move a 3-bedroom house in a single day?",
        a: "Most 3-bed moves within London are completed in one day with a 3-person crew and a Luton van. Long-distance moves or properties with difficult access may need an early start or a second trip.",
      },
    ],
    relatedServices: ["packing-assembly-dismantling-london", "man-and-van-london", "storage-runs-london"],
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
    process: [
      "Site visit or video walkthrough to map desks, IT, storage and any specialist equipment.",
      "Booking: we agree the date, out-of-hours window and lift slots with your building manager.",
      "Arrival: crew sets up floor protection and stages crates by department.",
      "Loading: monitors, cables and IT are wrapped and labelled; furniture is dismantled where required.",
      "Transport: dedicated vans run direct to the new site so nothing waits overnight.",
      "Unloading: desks rebuilt, crates placed at each workstation, IT positioned ready for your team to power on.",
    ],
    included: [
      "Crew sized to your office",
      "Floor protection and lift padding",
      "Desk and storage dismantling/reassembly",
      "Crate placement by department",
    ],
    notIncluded: [
      "IT decommissioning, recabling or network setup",
      "Crate hire (available as an add-on)",
      "Disposal of old furniture (quoted separately)",
    ],
    situations: [
      "Out-of-hours moves to keep the business trading during the day",
      "Tight service-lift windows in central London buildings",
      "Sensitive equipment like servers, medical devices or studio gear",
      "Multi-floor moves where staging order matters",
      "Loading bays with strict 30-minute limits",
    ],
    pricingFactors: [
      "Number of desks, monitors and storage units",
      "Floor levels and whether service lifts are available",
      "Out-of-hours or weekend timing",
      "Distance and number of vans required",
      "Crate hire and any IT/specialist handling",
    ],
    whenToChoose:
      "Choose office removals when relocating a working business with desks, IT and shared furniture. For a small studio or a handful of items, our man and van service is usually more cost-effective. For shop fit-outs or clinics, see business relocations.",
    faqs: [
      {
        q: "Can you move our office on a weekend or overnight?",
        a: "Yes — most central London office moves run on a Friday evening or Saturday so staff return to a ready desk on Monday.",
      },
      {
        q: "Do you handle the IT equipment?",
        a: "We carefully wrap, transport and place monitors, towers and peripherals. We don't decommission or recable networks — that's usually best left to your IT provider working alongside us.",
      },
      {
        q: "Can you provide crates instead of cardboard boxes?",
        a: "Yes, plastic crate hire is available with delivery before the move and collection after. Crates stack better and protect contents during loading.",
      },
      {
        q: "How do you protect the building during the move?",
        a: "We lay floor runners, pad lift interiors and wrap door frames. Many landlords require this — we coordinate with your building manager up front.",
      },
      {
        q: "Do we need parking permits for both addresses?",
        a: "Most central London buildings have loading bays with time limits. We check both addresses in advance and arrange suspensions if a longer load window is needed.",
      },
    ],
    relatedServices: ["business-relocations-london", "packing-assembly-dismantling-london", "storage-runs-london"],
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
    process: [
      "Site visit: we list specialist items (chairs, beds, racking, lighting) and agree priority order.",
      "Booking: timings agreed around your closing/opening dates and any landlord conditions.",
      "Arrival: protection laid, stock crated and shelving dismantled in load order.",
      "Loading: heavy and high-value items secured first; staged loads if needed.",
      "Transport: direct delivery to keep equipment in sequence.",
      "Unloading: items placed in zones for your team to set up the new space quickly.",
    ],
    included: [
      "Project lead and single point of contact",
      "Dismantling and rebuild of standard fixtures",
      "Floor protection at both sites",
      "Direct, dedicated transport",
    ],
    notIncluded: [
      "Specialist medical or dental decommissioning",
      "Electrical rewiring or plumbing",
      "Disposal of old fit-out (quoted separately)",
    ],
    situations: [
      "Salon chairs and basins with plumbed connections to detach",
      "Retail fit-outs with sensitive stock and signage",
      "Clinic moves with regulated equipment requiring careful timing",
      "Studios with rigging, lighting trusses and instruments",
      "Late-night turnarounds to be open the next morning",
    ],
    pricingFactors: [
      "Volume and weight of stock or equipment",
      "Specialist handling required (e.g. salon, clinic, studio gear)",
      "Out-of-hours or staged moves",
      "Number of vehicles and crew size",
      "Distance and access at both sites",
    ],
    whenToChoose:
      "Choose business relocations when you're moving a customer-facing space — a shop, salon, clinic or studio — with stock and specialist equipment. For a standard desk-based office, our office removals service is the right fit.",
    faqs: [
      {
        q: "Can you move a salon without breaking the basins or chairs?",
        a: "Yes — we work with your installer to disconnect plumbed units, then transport, position and hand back to them for reconnection at the new site.",
      },
      {
        q: "How do you handle high-value stock or equipment?",
        a: "We crate or wrap individually, load into a dedicated van, and keep a single point of contact through the move. Additional insurance can be arranged for declared value.",
      },
      {
        q: "Can you move us overnight so we don't lose a trading day?",
        a: "Yes. Many of our retail and salon clients move after closing on Saturday and reopen Monday morning.",
      },
      {
        q: "Do you remove the old fit-out as part of the move?",
        a: "We can quote a clearance separately, including responsible disposal or donation where suitable.",
      },
      {
        q: "What if our new lease isn't ready on the day?",
        a: "We can deliver to a self-storage facility and run a second leg once the new site is ready — see our storage runs service.",
      },
    ],
    relatedServices: ["office-removals-london", "storage-runs-london", "packing-assembly-dismantling-london"],
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
    process: [
      "Booking: send an item list (or a quick photo of the room) and the two postcodes.",
      "Pre-move check: we confirm access at both ends — lift, stairs and parking.",
      "Arrival: driver and helper arrive at the agreed slot in a Transit or Luton.",
      "Loading: items wrapped in blankets and secured for the trip.",
      "Transport: direct route between addresses.",
      "Unloading: items placed in the room of your choice; we don't leave until you're happy.",
    ],
    included: [
      "Driver plus helper",
      "Blankets, straps and trolley",
      "Direct transport between addresses",
    ],
    notIncluded: [
      "Packing materials (available on request)",
      "Parking suspensions",
      "Storage (see storage runs)",
    ],
    situations: [
      "Studio moves up four flights with no lift",
      "Student moves at end of term with strict halls slots",
      "Couple moving in together with two part-loads in one day",
      "Box-only moves into a partner's flat",
      "Short-notice flat moves after a rental falls through",
    ],
    pricingFactors: [
      "Van size needed (Transit vs Luton)",
      "Floors and stair count without a lift",
      "Distance between the two postcodes",
      "Walk from parking to the door",
      "Whether you need a single trip or two",
    ],
    whenToChoose:
      "Choose small moves for a studio, single room or partial flat — anything below a full 1-bed. For a single sofa or fridge, our single item transport is faster and cheaper. For a full home, see house removals.",
    faqs: [
      {
        q: "What counts as a small move?",
        a: "Roughly: a studio flat, a single room, a partial flat, or up to about 25–30 medium boxes plus a few items of furniture.",
      },
      {
        q: "Can you do a same-day small move in London?",
        a: "Often yes if we have a crew nearby. Message us with the postcodes and inventory and we'll confirm within minutes.",
      },
      {
        q: "Do I need to pack the boxes myself?",
        a: "For the standard small move price, yes. We can add packing if you'd prefer — just ask in advance.",
      },
      {
        q: "Can you handle stairs without a lift?",
        a: "Yes — most London small moves involve stairs. We carry a stair-friendly trolley and use proper lifting technique.",
      },
      {
        q: "What if I have one big item plus boxes?",
        a: "Perfect for a small move. We'll bring blankets and straps to handle the large item and load the boxes around it.",
      },
    ],
    relatedServices: ["man-and-van-london", "single-item-transport-london", "house-removals-london"],
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
    process: [
      "Booking: send a photo, dimensions and the two postcodes.",
      "Pre-collection check: we confirm a slot with the seller and access at the drop-off.",
      "Arrival: driver (and helper for upper floors) arrives in a Transit or Luton.",
      "Loading: item wrapped in a blanket, strapped securely.",
      "Transport: direct trip from collection to delivery.",
      "Delivery: item placed in the room you choose; we take packaging away on request.",
    ],
    included: [
      "Driver (helper available for two-person items)",
      "Blanket, straps and trolley",
      "Direct collection and delivery",
    ],
    notIncluded: [
      "Appliance disconnection (water/gas)",
      "Old item disposal (can be quoted)",
      "Multiple stops as standard (add-on)",
    ],
    situations: [
      "Marketplace sofa pick-up from a third-floor walk-up",
      "Fridge swap where the old unit needs taking away",
      "IKEA flat-pack collection direct to your door",
      "Bed delivery with same-day disposal of the old one",
      "Awkward items like corner sofas through narrow halls",
    ],
    pricingFactors: [
      "Distance between collection and delivery",
      "Whether one or two people are needed for the lift",
      "Stairs at either end and lift availability",
      "Item size and disassembly required",
      "Same-day vs scheduled slot",
    ],
    whenToChoose:
      "Choose single item transport for one or two items. If you've got a few items plus boxes, a small move is usually better value. For a full flat, see house removals.",
    faqs: [
      {
        q: "Can you collect a sofa from Facebook Marketplace today?",
        a: "Often yes — message us the listing, postcodes and your delivery address and we'll confirm a slot within minutes.",
      },
      {
        q: "Do I need to be there for the collection?",
        a: "No. As long as the seller is expecting us and access is clear, we can collect on your behalf and deliver to you.",
      },
      {
        q: "Will the item fit through my door?",
        a: "Send us photos and the doorway width — we'll flag any concerns before the trip and won't proceed if it clearly won't fit.",
      },
      {
        q: "Can you take my old item away at the same time?",
        a: "Yes, for an additional fee covering responsible disposal. Confirm in advance so we bring the right van.",
      },
      {
        q: "Do you carry items upstairs?",
        a: "Yes. For heavy items above ground floor, we send a two-person crew. Let us know floor numbers when booking.",
      },
    ],
    relatedServices: ["man-and-van-london", "small-moves-london", "storage-runs-london"],
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
    process: [
      "Booking: confirm inventory, postcodes and timing by call or WhatsApp.",
      "Pre-arrival: we check access and parking the day before.",
      "Arrival: driver and (optional) helper arrive in a Transit or Luton.",
      "Loading: blanketed and strapped for the trip.",
      "Transport: direct route between addresses.",
      "Unloading: items placed where you want them.",
    ],
    included: [
      "One driver (helper optional)",
      "Blankets, straps, trolley",
      "Direct trip between two addresses",
    ],
    notIncluded: [
      "Packing materials",
      "Parking suspensions",
      "Multiple stops as standard",
    ],
    situations: [
      "A few boxes plus a desk between flats in West London",
      "Marketplace collection then delivery in one trip",
      "Short-notice jobs after a delayed completion",
      "Helping a friend move out of a shared house",
      "Bulk bag of items to a self-storage unit",
    ],
    pricingFactors: [
      "Number of items and total volume",
      "One person or two on the job",
      "Distance and number of stops",
      "Stairs and walking distance from parking",
      "Time of day and notice given",
    ],
    whenToChoose:
      "Choose man and van for jobs that are too small for a full house move but bigger than a single item. For a complete property move, see house removals; for one item, single item transport is faster.",
    faqs: [
      {
        q: "What size van do you bring?",
        a: "Either a long-wheelbase Transit (~600 cu ft) or a Luton with tail-lift (~900 cu ft) depending on the job. We confirm before booking.",
      },
      {
        q: "Is the helper included in the price?",
        a: "We quote with or without a helper. Heavy or upper-floor items usually need a two-person crew.",
      },
      {
        q: "Do you charge by the hour?",
        a: "No — we quote a fixed price based on the inventory and access. There are no hourly surprises if the job runs to plan.",
      },
      {
        q: "Can you do multi-stop trips?",
        a: "Yes, just tell us all the addresses up front so we can plan the route and quote correctly.",
      },
      {
        q: "Are you insured?",
        a: "Yes — we carry goods-in-transit cover for items handled by our crew.",
      },
    ],
    relatedServices: ["small-moves-london", "single-item-transport-london", "house-removals-london"],
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
    process: [
      "Booking: confirm rooms to pack and furniture to dismantle.",
      "Pre-pack: we deliver materials in advance for full-pack jobs.",
      "Arrival: crew arrives with boxes, paper, bubble wrap and tools.",
      "Packing: room-by-room, labelled by destination room.",
      "Dismantling: beds, wardrobes and desks taken apart, fixings bagged and labelled.",
      "Reassembly: furniture rebuilt at the new address; you tell us where it lives.",
    ],
    included: [
      "Boxes, paper, bubble wrap, tape",
      "Furniture dismantling and reassembly",
      "Labelling by room",
      "Tool kit for standard flat-pack",
    ],
    notIncluded: [
      "Specialist crating (art, antiques)",
      "Electrical wiring or plumbing reconnection",
      "Wall-mounting (TV brackets quoted separately)",
    ],
    situations: [
      "Full-pack the day before a Friday move",
      "Kitchen-only pack for a busy family",
      "Dismantling a 3-door wardrobe that won't fit through the new door",
      "Reassembling IKEA flat-pack at the new flat",
      "Packing fragile glassware and art ahead of long-distance transport",
    ],
    pricingFactors: [
      "Number of rooms and density of items",
      "Quantity and type of furniture to dismantle",
      "Materials required (boxes, bubble wrap, custom)",
      "Whether packing is the day before or on the day",
      "Specialist items needing extra protection",
    ],
    whenToChoose:
      "Choose packing/assembly as an add-on to any move when you don't have time to pack, or when furniture needs dismantling for stairs or doorways. The move itself is booked separately as house removals or man and van.",
    faqs: [
      {
        q: "Can you pack the day before the move?",
        a: "Yes — most full-pack jobs run the day before so move day stays focused on loading and transport.",
      },
      {
        q: "Do you provide the boxes?",
        a: "Yes, all materials are included in the packing quote. We bring extra in case you need them.",
      },
      {
        q: "Can you dismantle IKEA furniture without breaking it?",
        a: "Standard IKEA can usually be dismantled and rebuilt safely once. Older units that have been moved before may not survive — we'll flag any concerns first.",
      },
      {
        q: "Do you mount TVs or shelves at the new address?",
        a: "TV brackets and basic shelves can be added — confirm in advance so we bring the right fixings.",
      },
      {
        q: "Will you unpack at the other end?",
        a: "Yes, full-service unpacking is available as an add-on, including flattening boxes for collection.",
      },
    ],
    relatedServices: ["house-removals-london", "office-removals-london", "small-moves-london"],
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
    process: [
      "Booking: confirm facility, unit floor, access hours and inventory.",
      "Pre-arrival: we check facility procedures (PIN access, trolley availability).",
      "Arrival: van loaded at your address with blankets and straps.",
      "Transit: direct trip to the facility.",
      "Unit loading: stacked carefully so the most-used items stay accessible.",
      "Sign-off: photos sent on request before we leave.",
    ],
    included: [
      "Driver and helper",
      "Blankets, straps, trolley",
      "Careful stacking inside the unit",
    ],
    notIncluded: [
      "Storage unit hire (paid directly to the facility)",
      "Insurance for stored items (arranged with the facility)",
      "Out-of-hours facility surcharges",
    ],
    situations: [
      "Decanting a property between sale and completion",
      "Moving Christmas decor or seasonal stock in/out",
      "Storing furniture during a renovation",
      "Combining a storage drop with a delivery in one trip",
      "Late-evening drops within facility access hours",
    ],
    pricingFactors: [
      "Distance from your address to the facility",
      "Volume and number of trips",
      "Floor of the storage unit and lift availability",
      "Time of day vs facility access hours",
      "Whether stacking inside the unit is needed",
    ],
    whenToChoose:
      "Choose storage runs when items need to go in or out of self-storage. If you also need a full property move, combine with house removals so it's a single coordinated job.",
    faqs: [
      {
        q: "Which storage facilities do you cover?",
        a: "All of the major chains in London — Big Yellow, Safestore, Shurgard, Access Storage — plus most independents.",
      },
      {
        q: "Can you stack the unit so it holds more?",
        a: "Yes. We stack heavier items at the back and base, lighter and more-used items at the front.",
      },
      {
        q: "Do I need to be at the facility?",
        a: "Usually yes for the first drop-off so we have your PIN and unit access. After that we can handle solo trips with prior authorisation.",
      },
      {
        q: "Can you do a same-day in-and-out?",
        a: "Yes — pickups from your home and drop straight to storage on the same trip is a common request.",
      },
      {
        q: "Do you provide storage insurance?",
        a: "No — that's arranged through the facility itself. We do carry goods-in-transit cover while the items are with us.",
      },
    ],
    relatedServices: ["house-removals-london", "small-moves-london", "man-and-van-london"],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICES_SEO) as ServiceSlug[];
