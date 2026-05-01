export type AreaSlug =
  | "ealing" | "hounslow" | "harrow" | "wembley" | "chiswick"
  | "fulham" | "shepherds-bush" | "brentford" | "richmond" | "uxbridge";

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
  },
};

export const AREA_SLUGS = Object.keys(AREAS_LOCAL) as AreaSlug[];
