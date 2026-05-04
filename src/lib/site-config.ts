export const SITE_URL = "https://www.holdwellremovals.co.uk";
export const SITE_NAME = "HoldWell Removal Co.";
export const BUSINESS_NAME = "HoldWell Removal Co.";

/**
 * Build a canonical absolute URL for a given route pathname.
 * Ensures no trailing slash except for the homepage.
 */
export function canonicalUrl(pathname: string): string {
  if (!pathname || pathname === "/") return `${SITE_URL}/`;
  const clean = pathname.replace(/\/+$/, "");
  return `${SITE_URL}${clean.startsWith("/") ? clean : `/${clean}`}`;
}
