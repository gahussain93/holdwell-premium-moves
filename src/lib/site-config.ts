export const SITE_URL = "https://www.holdwellremovals.co.uk";
export const SITE_NAME = "HoldWell Removal Co.";
export const BUSINESS_NAME = "HoldWell Removal Co.";

export const PHONE_DISPLAY = "07737 731115";
export const PHONE_E164 = "+447737731115";
export const EMAIL = "hello@holdwellremovals.co.uk";
export const WHATSAPP_URL = "https://wa.me/447737731115";
export const LOGO_URL = `${SITE_URL}/logo.webp`;

export const SERVICE_AREAS = [
  "London",
  "West London",
  "Ealing",
  "Hounslow",
  "Harrow",
  "Wembley",
  "Chiswick",
  "Fulham",
  "Shepherd\u2019s Bush",
  "Brentford",
  "Richmond",
  "Uxbridge",
];

export const SERVICE_TYPES = [
  "House removals",
  "Office removals",
  "Business relocations",
  "Small moves",
  "Single item transport",
  "Man and van",
  "Packing, assembly and dismantling",
  "Storage runs",
];

/**
 * Build a canonical absolute URL for a given route pathname.
 * Ensures no trailing slash except for the homepage.
 */
export function canonicalUrl(pathname: string): string {
  if (!pathname || pathname === "/") return `${SITE_URL}/`;
  const clean = pathname.replace(/\/+$/, "");
  return `${SITE_URL}${clean.startsWith("/") ? clean : `/${clean}`}`;
}
