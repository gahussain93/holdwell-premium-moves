export const PRICING = [
  { label: "Single Item / 1–2 Items", price: "from £70" },
  { label: "Small Move", price: "from £100" },
  { label: "1-Bed Move", price: "from £180" },
  { label: "2-Bed Move", price: "from £280" },
  { label: "3-Bed+ Move", price: "from £475" },
] as const;

export const SERVICES = [
  { title: "House Moves", desc: "Smooth, careful home relocations across London." },
  { title: "Office Moves", desc: "Minimise downtime with planned office relocations." },
  { title: "Business Relocations", desc: "Full-service moves for shops, studios and clinics." },
  { title: "Single Item Transport", desc: "From sofas to fridges — anywhere in London." },
  { title: "Small Moves", desc: "Studios, single rooms and small flats handled with care." },
  { title: "Packing", desc: "Professional packing using quality materials." },
  { title: "Assembly & Dismantling", desc: "Beds, wardrobes, desks — taken apart and rebuilt." },
  { title: "Storage Runs", desc: "Drop-offs and pick-ups from any storage facility." },
  { title: "Waste Clearance", desc: "Tidy up after your move with a clearance run." },
] as const;

export const AREAS = [
  "Central London", "North London", "South London", "East London", "West London",
  "City of London", "Camden", "Islington", "Hackney", "Tower Hamlets",
  "Westminster", "Kensington & Chelsea", "Hammersmith & Fulham", "Wandsworth",
  "Lambeth", "Southwark", "Lewisham", "Greenwich", "Newham", "Waltham Forest",
  "Haringey", "Brent", "Ealing", "Hounslow", "Richmond", "Kingston",
  "Merton", "Sutton", "Croydon", "Bromley", "Barnet", "Enfield",
] as const;
