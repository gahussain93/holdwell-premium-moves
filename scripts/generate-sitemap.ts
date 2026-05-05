#!/usr/bin/env bun
/**
 * Generates public/sitemap.xml from route data sources.
 * Run with: bun run scripts/generate-sitemap.ts
 */
import { writeFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { SERVICES_DATA } from "../src/lib/services-data";
import { AREA_SLUGS } from "../src/lib/areas-data";

const BASE = "https://www.holdwellremovals.co.uk";
const ROUTES_DIR = resolve(import.meta.dir, "../src/routes");

function mtime(file: string): string {
  try {
    return statSync(file).mtime.toISOString().slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

function routeFile(name: string) {
  return join(ROUTES_DIR, name);
}

type Entry = { loc: string; lastmod: string; changefreq: string; priority: string };

const entries: Entry[] = [];

// Homepage
entries.push({
  loc: `${BASE}/`,
  lastmod: mtime(routeFile("index.tsx")),
  changefreq: "daily",
  priority: "1.0",
});

// Top-level utility / hub pages
const hubs: Array<{ path: string; file: string; changefreq: string; priority: string }> = [
  { path: "/services", file: "services.tsx", changefreq: "weekly", priority: "0.8" },
  { path: "/areas", file: "areas.tsx", changefreq: "weekly", priority: "0.8" },
  { path: "/pricing", file: "pricing.tsx", changefreq: "yearly", priority: "0.5" },
  { path: "/about", file: "about.tsx", changefreq: "yearly", priority: "0.5" },
  { path: "/contact", file: "contact.tsx", changefreq: "yearly", priority: "0.5" },
  { path: "/blog", file: "blog.index.tsx", changefreq: "weekly", priority: "0.6" },
];
for (const h of hubs) {
  entries.push({
    loc: `${BASE}${h.path}`,
    lastmod: mtime(routeFile(h.file)),
    changefreq: h.changefreq,
    priority: h.priority,
  });
}

// Service pages from services-data.ts
for (const s of SERVICES_DATA) {
  const file = routeFile(`${s.slug}.tsx`);
  entries.push({
    loc: `${BASE}/${s.slug}`,
    lastmod: mtime(file),
    changefreq: "weekly",
    priority: "0.8",
  });
}

// Area pages from areas-data.ts
for (const slug of AREA_SLUGS) {
  const file = routeFile(`removals-${slug}.tsx`);
  entries.push({
    loc: `${BASE}/removals-${slug}`,
    lastmod: mtime(file),
    changefreq: "weekly",
    priority: "0.8",
  });
}

// Blog posts: discover from blog.*.tsx route files
const blogFiles = readdirSync(ROUTES_DIR).filter(
  (f) => f.startsWith("blog.") && f.endsWith(".tsx") && f !== "blog.index.tsx",
);
for (const f of blogFiles) {
  const slug = f.replace(/^blog\./, "").replace(/\.tsx$/, "");
  entries.push({
    loc: `${BASE}/blog/${slug}`,
    lastmod: mtime(join(ROUTES_DIR, f)),
    changefreq: "monthly",
    priority: "0.7",
  });
}

// Dedupe by loc, preserving first occurrence
const seen = new Set<string>();
const unique = entries.filter((e) => {
  if (seen.has(e.loc)) return false;
  seen.add(e.loc);
  return true;
});

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  unique
    .map(
      (e) =>
        `  <url>\n` +
        `    <loc>${e.loc}</loc>\n` +
        `    <lastmod>${e.lastmod}</lastmod>\n` +
        `    <changefreq>${e.changefreq}</changefreq>\n` +
        `    <priority>${e.priority}</priority>\n` +
        `  </url>`,
    )
    .join("\n") +
  `\n</urlset>\n`;

const out = resolve(import.meta.dir, "../public/sitemap.xml");
writeFileSync(out, xml);
console.log(`Wrote ${unique.length} URLs to ${out}`);
