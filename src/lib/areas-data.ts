import type { ServiceSlug } from "./services-data";

export type AreaSlug =
  | "ealing" | "hounslow" | "harrow" | "wembley" | "chiswick"
  | "fulham" | "shepherds-bush" | "brentford" | "richmond" | "uxbridge";

export interface AreaFAQ {
  q: string;
  a: string;
}

export interface AreaInfo {
  slug: AreaSlug;
  name: string;
  intro: string;
  houseMoves: string;
  officeMoves: string;
  singleItem: string;
  smallMoves: string;
  accessNotes: string;
  nearby: AreaSlug[];
  // SEO depth fields
  whatToExpect: string; // CPZ, property types, congestion/events
  challenges: string[]; // real local moving challenges
  typicalTimes: string; // realistic timing notes (no promises)
  faqs: AreaFAQ[];
  relatedServices: ServiceSlug[];
}

export const AREAS_LOCAL: Record<AreaSlug, AreaInfo> = {
  ealing: {
    slug: "ealing",
    name: "Ealing",
    intro:
      "Ealing is a leafy West London hub with a mix of Edwardian family homes, converted flats around Ealing Broadway and modern developments near West Ealing. We move households and businesses across W5, W13 and surrounding postcodes every week.",
    houseMoves:
      "From terraced houses on tree-lined streets like Madeley Road to upper-floor conversions near the Common, our team plans each Ealing house move around the property layout, parking bay restrictions and any narrow staircases.",
    officeMoves:
      "We relocate offices and studios around Ealing Broadway, Haven Green and the Uxbridge Road business strip — working evenings or weekends to keep your team trading.",
    singleItem:
      "Sofas, fridges, wardrobes and Facebook Marketplace pickups across Ealing — same-day single item transport is often available.",
    smallMoves:
      "Ideal for student rooms near the University of West London, studio flats and one-bed conversions.",
    accessNotes:
      "Many Ealing roads have CPZ parking bays and red routes along the Uxbridge Road. Period conversions often mean tight stairwells — we bring blankets, straps and trolleys to handle them safely.",
    nearby: ["hounslow", "chiswick", "shepherds-bush", "brentford"],
    whatToExpect:
      "Most of Ealing falls inside Ealing Council's CPZ schemes, with Mon–Fri restrictions in W5 and W13. Property mix is dominated by Edwardian terraces, post-war semis and converted maisonettes. Ealing Broadway and the Uxbridge Road can clog around school-run hours and Crossrail station traffic.",
    challenges: [
      "Three- and four-storey conversions with no lift",
      "CPZ bays requiring temporary suspension or visitor permits",
      "Red routes on the Uxbridge Road with no loading allowed",
      "Tight Edwardian doorways for wide sofas and wardrobes",
      "School-run congestion around Ealing Common and Pitshanger",
    ],
    typicalTimes:
      "A 1-bed flat in Ealing usually takes 2–3 hours; a 3-bed+ family home with stairs commonly runs 5–7 hours. Single item transport across W5 is often completed within 90 minutes.",
    faqs: [
      {
        q: "Can you suspend a parking bay outside my Ealing flat?",
        a: "Yes — Ealing Council requires around 5 working days' notice for a bay suspension. We can advise on the application or do it on your behalf.",
      },
      {
        q: "Is there a problem with the red route on Uxbridge Road?",
        a: "You can't load on the red route itself. We use the nearest side street and a trolley — or arrange a brief stop window early in the morning.",
      },
      {
        q: "How early can you start a move in Ealing?",
        a: "Most weekdays we start from 7:30am to beat the school run. Saturdays from 8am.",
      },
      {
        q: "Do you cover both W5 and W13?",
        a: "Yes — and W7, W3 and surrounding postcodes too. Same-day single item jobs are common across all of them.",
      },
      {
        q: "Will the van fit on my road?",
        a: "Most Ealing streets accept a Luton; a few mews and very narrow terraces need a Transit. Send us your postcode and we'll check before booking.",
      },
    ],
    relatedServices: ["house-removals-london", "man-and-van-london", "single-item-transport-london"],
  },

  hounslow: {
    slug: "hounslow",
    name: "Hounslow",
    intro:
      "Hounslow covers a busy stretch of West London close to Heathrow, with everything from 1930s semis in Hounslow West to high-rise flats around the town centre. We handle relocations across TW3, TW4 and TW5 daily.",
    houseMoves:
      "Whether you're moving from a family home on Bath Road or a maisonette near Lampton Park, we plan around school-run traffic and the A4 to keep your day running smoothly.",
    officeMoves:
      "Office moves around Hounslow High Street and the Great West Road corridor — including airport-adjacent businesses needing tight scheduling around flight crews.",
    singleItem:
      "Single items collected and delivered between Hounslow, Heathrow hotels and the wider TW area.",
    smallMoves:
      "Compact loads from rental flats above the High Street shops and shared houses near Hounslow Heath.",
    accessNotes:
      "Expect busy roads, bus lanes on the High Street and limited loading time on the A4. Many flats have no lift, so we plan staircase carries in advance.",
    nearby: ["ealing", "brentford", "chiswick", "richmond"],
    whatToExpect:
      "Hounslow's property mix runs from 1930s suburban semis to mid-rise blocks around the town centre. Hounslow Council operates CPZs in TW3 and parts of TW4. The A4 and A30 add traffic complexity, and Heathrow flight schedules influence noise windows but not road access directly.",
    challenges: [
      "Bus lanes and red routes along Hounslow High Street",
      "A4 loading restrictions during peak hours",
      "Walk-up flats above shops with no rear access",
      "Tight CPZ bays in residential streets",
      "Airport-shift residents needing very early or late slots",
    ],
    typicalTimes:
      "A 1-bed flat in Hounslow usually takes 2–3 hours; a 3-bed+ semi 5–7 hours. Heathrow-adjacent jobs are best booked outside the early-morning peak.",
    faqs: [
      {
        q: "Can you move me very early in the morning?",
        a: "Yes — early starts (06:30–07:00) are common around Hounslow given Heathrow shift patterns and A4 traffic.",
      },
      {
        q: "Do you serve the Heathrow hotels area?",
        a: "Yes, we cover TW6 and the surrounding hotel/airport zone for both relocations and single item transport.",
      },
      {
        q: "Is there parking outside flats above shops on the High Street?",
        a: "Loading on the High Street itself is restricted. We typically use side streets or short loading windows where allowed.",
      },
      {
        q: "How busy is the A4 for moves?",
        a: "Peak hours (07:30–10:00, 16:00–19:00) are slow. We schedule loading and transport outside these windows where we can.",
      },
      {
        q: "Do you cover all of TW3, TW4 and TW5?",
        a: "Yes, plus TW6 and TW7. We also run regularly into TW8 (Brentford) and TW9 (Richmond).",
      },
    ],
    relatedServices: ["house-removals-london", "single-item-transport-london", "man-and-van-london"],
  },

  harrow: {
    slug: "harrow",
    name: "Harrow",
    intro:
      "Harrow blends suburban family homes in HA1 and HA2 with apartment blocks around Harrow-on-the-Hill and Wealdstone. We move residents and small businesses across the borough every week.",
    houseMoves:
      "From three-bed semis in North Harrow to townhouses near Harrow School, we adapt our crew size to your property — driveways, on-street parking or shared accessways.",
    officeMoves:
      "Office relocations around Harrow town centre, Greenhill Way and Station Road — handled efficiently to minimise downtime.",
    singleItem:
      "Single item collections from IKEA Wembley, John Lewis and local stores delivered straight to your Harrow address.",
    smallMoves:
      "Studio flats, single-room moves and part-load jobs across HA1, HA2 and HA3.",
    accessNotes:
      "Hilly streets around Harrow-on-the-Hill, narrow Victorian terraces in Wealdstone and busy parking around the station all need planning — we scout access before we load.",
    nearby: ["wembley", "uxbridge", "ealing"],
    whatToExpect:
      "Harrow's property mix is dominated by 1930s semis and post-war blocks, with period townhouses near the Hill. Harrow Council CPZs cover the town centre and station areas. Hilly terrain around Harrow-on-the-Hill and tight Wealdstone terraces both call for planning.",
    challenges: [
      "Steep approaches around Harrow-on-the-Hill",
      "Tight Victorian terraces in Wealdstone",
      "Busy station-zone parking with short stays only",
      "Large semis with long carries from on-street parking",
      "Narrow Victorian doorways for modern wide sofas",
    ],
    typicalTimes:
      "A 2-bed semi in Harrow usually takes 3–4 hours; a 3-bed+ family home with garage 5–7 hours. Single item runs to/from IKEA Wembley typically complete in 2 hours.",
    faqs: [
      {
        q: "Can you handle the hill near Harrow School?",
        a: "Yes — we use a Luton with a tail-lift and bring extra crew for the carry where the slope makes trolleys impractical.",
      },
      {
        q: "Is parking restricted around Harrow-on-the-Hill station?",
        a: "Yes, with short-stay bays and CPZ. We typically arrange a driveway slot or use a side street with a trolley carry.",
      },
      {
        q: "Do you collect from IKEA Wembley to Harrow?",
        a: "Yes, this is one of our most common single item routes.",
      },
      {
        q: "Can you move a 4-bed in a single day?",
        a: "Most 4-bed Harrow moves run as a single day with a 3-person crew and a Luton, providing access is straightforward.",
      },
      {
        q: "Do you cover HA3 and HA5?",
        a: "Yes, we cover HA1–HA9 across the wider borough.",
      },
    ],
    relatedServices: ["house-removals-london", "single-item-transport-london", "storage-runs-london"],
  },

  wembley: {
    slug: "wembley",
    name: "Wembley",
    intro:
      "Wembley has changed dramatically with new high-rise developments around the stadium, alongside traditional terraces in Sudbury and Alperton. We work across HA0 and HA9 throughout the week.",
    houseMoves:
      "House moves from terraced family homes in Sudbury to new-build apartments at Wembley Park — we coordinate with concierge teams and book service lifts where needed.",
    officeMoves:
      "Office relocations around Olympic Way, Wembley Park and the Wembley business district — out-of-hours moves available to avoid event days.",
    singleItem:
      "Single item transport across HA0 and HA9 — perfect for marketplace pickups and store deliveries.",
    smallMoves:
      "Small flat moves, room moves and student relocations near London Designer Outlet.",
    accessNotes:
      "Event-day road closures around the stadium, strict service-lift booking windows in tower blocks, and busy loading bays — we pre-book everything to keep your move on time.",
    nearby: ["harrow", "ealing", "shepherds-bush"],
    whatToExpect:
      "Wembley Park's high-rise developments require concierge bookings and service-lift slots. Sudbury and Alperton are mostly terraces with on-street parking. Stadium and arena event days bring road closures, controlled parking and major congestion — always check the fixture list.",
    challenges: [
      "Stadium and arena event-day road closures (Olympic Way, Wembley Park Drive)",
      "Service-lift bookings in tower blocks (often 2 hours max)",
      "Loading bays with strict time windows",
      "Concierge sign-in delays at peak times",
      "Limited drop-off space outside Wembley Park apartments",
    ],
    typicalTimes:
      "A 1-bed apartment at Wembley Park usually takes 2–3 hours including service-lift time. A 3-bed+ Sudbury terrace runs 5–7 hours. Always avoid event days at the stadium and SSE Arena.",
    faqs: [
      {
        q: "Will my move be affected by a stadium event?",
        a: "Yes — road closures and parking restrictions apply on event days. Send us your date and we'll check the fixture list before confirming.",
      },
      {
        q: "Do I need to book the service lift in advance?",
        a: "Yes. Most Wembley Park buildings require 48–72 hours' notice and a 2-hour booking window. We'll coordinate with your concierge.",
      },
      {
        q: "Can you move into a Wembley Park apartment on a weekend?",
        a: "Some buildings restrict moves to weekday business hours. Check with your concierge first; we work around what's permitted.",
      },
      {
        q: "Is there a loading bay at the new Wembley developments?",
        a: "Most have a designated bay shared between deliveries and moves. Slots fill quickly on Fridays and Saturdays.",
      },
      {
        q: "Do you cover HA0 (Alperton) as well?",
        a: "Yes — HA0 and HA9 are both regular for us.",
      },
    ],
    relatedServices: ["house-removals-london", "small-moves-london", "single-item-transport-london"],
  },

  chiswick: {
    slug: "chiswick",
    name: "Chiswick",
    intro:
      "Chiswick is one of West London's most desirable areas, with elegant Victorian terraces along Bedford Park, riverside flats and modern developments around Chiswick Park. We cover W4 and the surrounding streets daily.",
    houseMoves:
      "Period family homes off Chiswick High Road often have narrow halls and original staircases — our team uses extra padding and proper technique to protect both your items and the property.",
    officeMoves:
      "Office moves around Chiswick Park, Chiswick Business Park and the High Road — handled discreetly with minimum disruption.",
    singleItem:
      "Single items moved between Chiswick homes, storage units and showrooms.",
    smallMoves:
      "Compact moves for one-bed flats, basement conversions and riverside apartments.",
    accessNotes:
      "Chiswick has tight parking restrictions, narrow Victorian doorways and red routes along the A4 — we suspend bays in advance when needed.",
    nearby: ["fulham", "hounslow", "brentford", "ealing"],
    whatToExpect:
      "W4 is mostly Victorian and Edwardian terraces with strict Hounslow Council CPZs (Mon–Sat in many areas). The A4/Great West Road runs along the south, with red routes preventing loading. Bedford Park is a conservation area with extra restrictions.",
    challenges: [
      "Narrow Victorian halls and staircases (especially Bedford Park)",
      "CPZ Mon–Sat with bay suspensions needing 5+ working days' notice",
      "Red routes on the A4 — no loading at any time",
      "Conservation area rules around skip and equipment placement",
      "Basement conversions with awkward stair turns",
    ],
    typicalTimes:
      "A 1-bed Chiswick flat usually takes 2–3 hours; a 3-bed+ terrace 5–7 hours due to stairs and tight access. Plan suspensions at least a week ahead.",
    faqs: [
      {
        q: "How do I get a parking bay suspended in Chiswick?",
        a: "Hounslow Council operates the suspension scheme — typically 5 working days' notice. We can advise or apply on your behalf.",
      },
      {
        q: "Will my Victorian wardrobe fit through the front door?",
        a: "Often it needs to come apart. Our packing/assembly add-on covers dismantling and rebuild at the new address.",
      },
      {
        q: "Can you move along the A4 / Great West Road?",
        a: "We can drive it but can't load on it. We use a side street and trolley to the door.",
      },
      {
        q: "Do you handle moves in Bedford Park's conservation streets?",
        a: "Yes — we work carefully to comply with conservation rules and protect period features.",
      },
      {
        q: "Are weekend moves possible in Chiswick?",
        a: "Yes, including Saturdays. Sundays are fine too, though some CPZs still apply.",
      },
    ],
    relatedServices: ["house-removals-london", "packing-assembly-dismantling-london", "small-moves-london"],
  },

  fulham: {
    slug: "fulham",
    name: "Fulham",
    intro:
      "Fulham is packed with terraced townhouses, mansion blocks and modern riverside flats across SW6. We move residents and businesses around Parsons Green, Fulham Broadway and Sands End every week.",
    houseMoves:
      "Fulham townhouses often have four floors, basements and roof terraces — we plan staircase carries and use lifting straps to move heavy items safely.",
    officeMoves:
      "Office relocations around Fulham Broadway, Imperial Wharf and the New King's Road — quick, professional and out-of-hours where needed.",
    singleItem:
      "Single item collections from Lots Road auctions, King's Road showrooms and local stores.",
    smallMoves:
      "Studio flats and one-bed mansion block moves near Fulham Broadway and Parsons Green.",
    accessNotes:
      "Strict CPZ parking, controlled bays and narrow basement stairs are common — we book parking suspensions where needed and bring extra crew for upper-floor mansion blocks.",
    nearby: ["chiswick", "shepherds-bush", "richmond"],
    whatToExpect:
      "SW6 is dominated by 4-storey Victorian townhouses, Edwardian mansion blocks and newer riverside developments at Imperial Wharf and Chelsea Creek. Hammersmith & Fulham Council CPZs run Mon–Sat, often 09:00–17:00. Match days at Stamford Bridge and Craven Cottage cause road closures.",
    challenges: [
      "Four-storey townhouses with basement and roof access",
      "Mansion-block stairs without a lift",
      "Match-day road closures around Stamford Bridge and Craven Cottage",
      "CPZ Mon–Sat — suspensions almost always required",
      "Heavy items (American fridges, sofas) in narrow Victorian halls",
    ],
    typicalTimes:
      "A 1-bed mansion-block flat usually takes 2–3 hours. A Fulham townhouse move commonly runs 5–7 hours with a 3-person crew. Always check Chelsea/Fulham fixture lists.",
    faqs: [
      {
        q: "Will my move be affected by a Chelsea or Fulham match?",
        a: "Yes — road closures and parking restrictions apply for several hours either side of kick-off. Send us the date and we'll check.",
      },
      {
        q: "Do I need a parking suspension in Fulham?",
        a: "Almost always. Hammersmith & Fulham requires around 5 working days' notice. We can handle the application.",
      },
      {
        q: "Can you handle a 4-storey Fulham townhouse?",
        a: "Yes — we send a 3-person crew with straps and trolleys, and plan the load order to minimise stair runs.",
      },
      {
        q: "Do you cover Imperial Wharf and Chelsea Creek developments?",
        a: "Yes, including service-lift coordination with concierge teams.",
      },
      {
        q: "How early can you arrive on a weekday?",
        a: "Most weekdays we start from 7:30am to beat traffic on the New King's Road and Wandsworth Bridge Road.",
      },
    ],
    relatedServices: ["house-removals-london", "packing-assembly-dismantling-london", "office-removals-london"],
  },

  "shepherds-bush": {
    slug: "shepherds-bush",
    name: "Shepherd's Bush",
    intro:
      "Shepherd's Bush mixes Victorian terraces, ex-local authority blocks and modern apartments around Westfield. We cover W12 and surrounding streets throughout the week.",
    houseMoves:
      "From terraced family homes off Goldhawk Road to flats above Uxbridge Road shops, we plan each move around the property and parking situation.",
    officeMoves:
      "Office moves around Westfield, the BBC's former Television Centre area and White City — handled efficiently with minimum trading interruption.",
    singleItem:
      "Single items collected from Westfield retailers, IKEA and local marketplace sellers.",
    smallMoves:
      "Studio and one-bed flats around Shepherd's Bush Green and Wood Lane.",
    accessNotes:
      "Heavy traffic around the Green and Westfield, bus lane restrictions on Uxbridge Road, and many properties above shops with stair-only access — we plan timings carefully.",
    nearby: ["fulham", "chiswick", "ealing", "wembley"],
    whatToExpect:
      "W12 is a mix of Victorian terraces, mid-century low-rise blocks and modern Television Centre / White City apartments. Hammersmith & Fulham CPZ covers most of the area. Westfield, the Green and the BBC area drive sustained congestion.",
    challenges: [
      "Bus lanes on Uxbridge Road and Goldhawk Road",
      "Heavy traffic around the Green and Westfield car parks",
      "Walk-up flats above Uxbridge Road shops with no rear access",
      "Mid-century block service-lift bookings",
      "Loading bay competition near Television Centre",
    ],
    typicalTimes:
      "A 1-bed flat in W12 usually takes 2–3 hours. A 3-bed+ terrace off Goldhawk Road runs 5–7 hours. Single item collections from Westfield/IKEA Wembley typically complete in 2 hours.",
    faqs: [
      {
        q: "Can you load on Uxbridge Road?",
        a: "No — bus lanes and red sections prevent loading on the main stretch. We use side streets like Bloemfontein Road or Lime Grove.",
      },
      {
        q: "Do you collect from Westfield retailers?",
        a: "Yes — sofas, white goods and large purchases delivered to W12, W6, W14 and beyond.",
      },
      {
        q: "Is there parking outside Television Centre apartments?",
        a: "There's a designated loading bay — slots need to be booked through concierge.",
      },
      {
        q: "Are walk-up flats above shops a problem?",
        a: "No — common in W12. We send a two-person crew and use a stair trolley for boxes.",
      },
      {
        q: "Do you cover White City?",
        a: "Yes, including the new developments around Wood Lane.",
      },
    ],
    relatedServices: ["small-moves-london", "single-item-transport-london", "house-removals-london"],
  },

  brentford: {
    slug: "brentford",
    name: "Brentford",
    intro:
      "Brentford has rapidly grown with new riverside developments alongside traditional terraces near the High Street. We cover TW8 for homes and businesses every week.",
    houseMoves:
      "From family terraces near Boston Manor to apartments at Brentford Lock and the new high-rises — we handle service-lift bookings and concierge coordination.",
    officeMoves:
      "Office relocations around the Great West Road, GSK House area and Brentford town centre — flexible scheduling around your operation.",
    singleItem:
      "Single item transport across TW8 and into central London.",
    smallMoves:
      "Small loads from canal-side studios and one-bed riverside apartments.",
    accessNotes:
      "Narrow High Street, riverside developments with strict service-lift slots and busy A4 access — we pre-book lifts and loading bays in advance.",
    nearby: ["chiswick", "hounslow", "richmond", "ealing"],
    whatToExpect:
      "TW8 is now a mix of canal-side terraces, riverside high-rises (Brentford Project, Lockside) and Edwardian streets near Boston Manor. Hounslow CPZ applies to much of the area. Brentford FC match days affect High Street and Lionel Road.",
    challenges: [
      "Service-lift bookings at riverside high-rises",
      "Narrow High Street and tight Lock approach",
      "Brentford FC match-day road closures",
      "A4 / M4 traffic for cross-London transit",
      "Concierge sign-in at new developments",
    ],
    typicalTimes:
      "A 1-bed riverside apartment usually takes 2–3 hours including lift time. A 3-bed+ Boston Manor terrace runs 5–7 hours. Avoid Brentford FC match days where possible.",
    faqs: [
      {
        q: "Will my move clash with a Brentford FC match?",
        a: "Possibly — closures and parking restrictions apply around the Gtech Community Stadium. Send us the date and we'll check.",
      },
      {
        q: "Do you handle Brentford Project / Lockside concierge buildings?",
        a: "Yes, including service-lift booking and loading-bay slots.",
      },
      {
        q: "Can you fit a Luton on the High Street?",
        a: "Yes, with care during off-peak hours. For very tight stretches we may use a Transit and trolley.",
      },
      {
        q: "Do you cover canal-side properties?",
        a: "Yes — we plan the carry from the nearest vehicle access point.",
      },
      {
        q: "Are early starts available in Brentford?",
        a: "Yes, from 7:00am on weekdays to beat A4/M4 traffic.",
      },
    ],
    relatedServices: ["house-removals-london", "small-moves-london", "office-removals-london"],
  },

  richmond: {
    slug: "richmond",
    name: "Richmond",
    intro:
      "Richmond is one of London's most picturesque areas, with Georgian townhouses, riverside flats and family homes across TW9 and TW10. We move residents and businesses across the borough every week.",
    houseMoves:
      "Period townhouses near Richmond Green often have narrow staircases and listed-building constraints — our crews are experienced in protecting period features.",
    officeMoves:
      "Office moves around Richmond town centre, The Quadrant and Kew Road — discreet, professional and on schedule.",
    singleItem:
      "Single items moved from Richmond antique shops, showrooms and storage units.",
    smallMoves:
      "Compact moves for studios and one-bed flats near the river and Richmond station.",
    accessNotes:
      "Conservation-area parking restrictions, busy weekend traffic near the river and protected period interiors all need careful handling — we plan ahead and use full floor protection.",
    nearby: ["brentford", "hounslow", "chiswick", "fulham"],
    whatToExpect:
      "TW9 and TW10 are dominated by Georgian and Victorian townhouses, with conservation area protection across much of central Richmond and Richmond Hill. Richmond Council CPZ runs Mon–Sat. Riverside and Richmond Park bring weekend congestion.",
    challenges: [
      "Listed-building and conservation-area constraints",
      "Narrow Georgian staircases and original wood floors",
      "Hill access on Richmond Hill with steep gradients",
      "Weekend riverside traffic and event-day Park closures",
      "CPZ Mon–Sat with strict suspension lead times",
    ],
    typicalTimes:
      "A 1-bed Richmond flat usually takes 2–3 hours. A larger townhouse on the Hill commonly runs 5–7 hours due to stairs and protection requirements.",
    faqs: [
      {
        q: "Are you experienced with listed buildings?",
        a: "Yes — we use full floor protection, door-frame padding and careful crew briefing for listed and period properties.",
      },
      {
        q: "Can you move along Richmond Hill?",
        a: "Yes — we pick a Luton with hill-start handling and plan the carry where the gradient is steep.",
      },
      {
        q: "Will Richmond Park events affect my move?",
        a: "Sometimes — Park gates can close for events. We avoid Park-route planning on those days.",
      },
      {
        q: "Do I need a parking suspension in Richmond?",
        a: "In central Richmond and the Hill, almost always. Around 5 working days' notice via Richmond Council.",
      },
      {
        q: "Do you cover Kew and East Sheen too?",
        a: "Yes — TW9 and TW10 plus surrounding postcodes.",
      },
    ],
    relatedServices: ["house-removals-london", "packing-assembly-dismantling-london", "storage-runs-london"],
  },

  uxbridge: {
    slug: "uxbridge",
    name: "Uxbridge",
    intro:
      "Uxbridge is a busy West London town with suburban family homes, student flats around Brunel University and offices around the High Street. We cover UB8 and the wider Hillingdon area weekly.",
    houseMoves:
      "From semis in Hillingdon to student houses near Brunel, we adapt to driveway, on-street and shared parking situations across UB8.",
    officeMoves:
      "Office moves around Uxbridge town centre, The Atrium and Stockley Park — perfect for businesses needing weekend or evening relocation.",
    singleItem:
      "Single items moved across Uxbridge, Hillingdon and into central London.",
    smallMoves:
      "Student moves, room moves and small flat relocations near Brunel and the town centre.",
    accessNotes:
      "Stockley Park has strict access procedures, the High Street has loading restrictions, and student properties often need timed moves around term dates — we plan around all of it.",
    nearby: ["harrow", "ealing", "hounslow"],
    whatToExpect:
      "UB8 is largely 1930s semis, post-war estates and student HMOs near Brunel. Hillingdon Council CPZs are limited but town-centre loading restrictions apply. Stockley Park requires booked access via security gates.",
    challenges: [
      "Stockley Park security check-in for office moves",
      "Brunel term-time pressure on student HMOs",
      "High Street loading windows in Uxbridge town centre",
      "Long carries in cul-de-sac estates",
      "Driveway sharing on semi-detached terraces",
    ],
    typicalTimes:
      "A 1-bed flat in Uxbridge usually takes 2–3 hours. A 3-bed+ family home with garage 5–7 hours. Student moves at end of term need slot booking with the landlord.",
    faqs: [
      {
        q: "Do you handle Brunel student moves?",
        a: "Yes — start of September and end of June are our busiest weeks for Brunel-area moves. Book early.",
      },
      {
        q: "Can you access Stockley Park?",
        a: "Yes — we coordinate with security and the receiving company before arrival.",
      },
      {
        q: "Are weekend moves available in Uxbridge?",
        a: "Yes, Saturdays especially. Sundays on request.",
      },
      {
        q: "Do you cover Hillingdon and Hayes too?",
        a: "Yes — UB8, UB9, UB10, UB3 and UB4 are all regular areas for us.",
      },
      {
        q: "How early can you start an Uxbridge move?",
        a: "From 7:00am on weekdays — useful for office moves and avoiding the M40 commuter pinch.",
      },
    ],
    relatedServices: ["house-removals-london", "small-moves-london", "office-removals-london"],
  },
};

export const AREA_SLUGS = Object.keys(AREAS_LOCAL) as AreaSlug[];
