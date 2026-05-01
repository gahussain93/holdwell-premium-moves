export const PRICING = [
  { label: "Single Item / 1–2 Items", price: "from £70" },
  { label: "Small Move", price: "from £100" },
  { label: "1-Bed Move", price: "from £180" },
  { label: "2-Bed Move", price: "from £280" },
  { label: "3-Bed+ Move", price: "from £475" },
] as const;

export const SERVICES = [
  { title: "House Moves", desc: "Smooth, careful home relocations across London.", href: "/house-removals-london" },
  { title: "Office Moves", desc: "Minimise downtime with planned office relocations.", href: "/office-removals-london" },
  { title: "Business Relocations", desc: "Full-service moves for shops, studios and clinics.", href: "/business-relocations-london" },
  { title: "Single Item Transport", desc: "From sofas to fridges — anywhere in London.", href: "/single-item-transport-london" },
  { title: "Small Moves", desc: "Studios, single rooms and small flats handled with care.", href: "/small-moves-london" },
  { title: "Man and Van", desc: "Reliable man-and-van service for local jobs.", href: "/man-and-van-london" },
  { title: "Packing, Assembly & Dismantling", desc: "Professional packing plus beds, wardrobes and desks.", href: "/packing-assembly-dismantling-london" },
  { title: "Storage Runs", desc: "Drop-offs and pick-ups from any storage facility.", href: "/storage-runs-london" },
  { title: "Waste Clearance", desc: "Tidy up after your move with a clearance run.", href: "/waste-clearance-london" },
] as const;

export const AREAS = [
  "Central London", "North London", "South London", "East London", "West London",
  "City of London", "Camden", "Islington", "Hackney", "Tower Hamlets",
  "Westminster", "Kensington & Chelsea", "Hammersmith & Fulham", "Wandsworth",
  "Lambeth", "Southwark", "Lewisham", "Greenwich", "Newham", "Waltham Forest",
  "Haringey", "Brent", "Ealing", "Hounslow", "Richmond", "Kingston",
  "Merton", "Sutton", "Croydon", "Bromley", "Barnet", "Enfield",
] as const;
