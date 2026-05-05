#!/usr/bin/env bun
/**
 * Lightweight sitemap.xml validator. Checks XML declaration, urlset wrapper,
 * required child tags on each <url>, duplicates, and host/trailing-slash hygiene.
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const file = resolve(import.meta.dir, "../public/sitemap.xml");
const xml = readFileSync(file, "utf8");

const errors: string[] = [];

if (!xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
  errors.push("Missing XML declaration");
}
if (!xml.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')) {
  errors.push("Missing urlset wrapper with sitemap namespace");
}
if (!xml.trim().endsWith("</urlset>")) {
  errors.push("Missing </urlset> closing tag");
}

const urlBlocks = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
if (urlBlocks.length === 0) errors.push("No <url> entries found");

const locs: string[] = [];
for (const block of urlBlocks) {
  for (const tag of ["loc", "lastmod", "changefreq", "priority"]) {
    if (!new RegExp(`<${tag}>[^<]+</${tag}>`).test(block)) {
      errors.push(`<url> missing <${tag}>`);
    }
  }
  const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
  if (loc) {
    locs.push(loc);
    if (loc.includes("?")) errors.push(`URL has query string: ${loc}`);
    if (!loc.startsWith("https://www.holdwellremovals.co.uk")) {
      errors.push(`URL has wrong host: ${loc}`);
    }
    if (loc !== "https://www.holdwellremovals.co.uk/" && loc.endsWith("/")) {
      errors.push(`URL has trailing slash: ${loc}`);
    }
  }
}

const dupes = locs.filter((l, i) => locs.indexOf(l) !== i);
if (dupes.length) errors.push(`Duplicate URLs: ${[...new Set(dupes)].join(", ")}`);

if (errors.length) {
  console.error("Sitemap validation FAILED:");
  for (const e of errors) console.error(" -", e);
  process.exit(1);
}
console.log(`Sitemap OK — ${locs.length} URLs.`);
