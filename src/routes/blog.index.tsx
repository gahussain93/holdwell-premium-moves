import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CtaBand } from "@/components/site/CtaBand";

const POSTS = [
  {
    slug: "cost-of-moving-house-london",
    title: "How much does it cost to move house in London?",
    excerpt: "Realistic price ranges by property size, plus what actually drives the final cost.",
  },
  {
    slug: "man-and-van-vs-removals-london",
    title: "Man and van vs full removals: which do you actually need?",
    excerpt: "A simple way to decide based on inventory, access and timing.",
  },
  {
    slug: "moving-house-checklist-uk",
    title: "Moving house checklist (UK): 4 weeks to move day",
    excerpt: "A no-fluff timeline of what to do, when to do it and what to skip.",
  },
  {
    slug: "parking-permits-moving-london",
    title: "Parking permits and bay suspensions for London moves",
    excerpt: "How to suspend a bay, when you need to, and what it actually costs.",
  },
  {
    slug: "how-long-does-a-house-move-take-london",
    title: "How long does a house move take in London?",
    excerpt: "Honest timing expectations for studios, 1-beds, 2-beds and townhouses.",
  },
  {
    slug: "how-to-pack-for-a-house-move-london",
    title: "How to pack for a house move in London (room-by-room)",
    excerpt: "Materials, order of work, fragile items and labelling — and what to leave to the crew.",
  },
  {
    slug: "best-time-to-move-house-london",
    title: "When is the best time to move house in London?",
    excerpt: "Day, month and season pricing patterns — when to book for the lowest price.",
  },
  {
    slug: "moving-a-1-bed-flat-london",
    title: "Moving a 1-bed flat in London: cost, time and van size",
    excerpt: "Realistic numbers and what catches first-time movers out.",
  },
  {
    slug: "office-relocation-guide-london",
    title: "Office relocation in London — a planning guide",
    excerpt: "Lead times, IT, lift bookings and weekend logistics for low-downtime moves.",
  },
  {
    slug: "storage-options-when-moving-london",
    title: "Storage options when moving house in London",
    excerpt: "When storage is worth it, what it costs, and how to combine it with the move.",
  },
];

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Moving Blog — London Removals Advice | HoldWell" },
      { name: "description", content: "Practical advice on moving house in London — costs, parking, timing, checklists and choosing the right service." },
      { property: "og:title", content: "Moving Blog — HoldWell Removals" },
      { property: "og:description", content: "Practical London moving advice from a working removals team." },
    ],
    links: [{ rel: "canonical", href: "https://www.holdwellremovals.co.uk/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const groups: Array<{ title: string; description: string; slugs: string[] }> = [
    {
      title: "Costs & pricing",
      description: "Realistic London price ranges and the timing decisions that move the final number up or down.",
      slugs: ["cost-of-moving-house-london", "best-time-to-move-house-london"],
    },
    {
      title: "Planning your move",
      description: "Timelines, packing order and duration estimates so nothing slips between booking and unloading.",
      slugs: [
        "moving-house-checklist-uk",
        "how-long-does-a-house-move-take-london",
        "how-to-pack-for-a-house-move-london",
      ],
    },
    {
      title: "London moving logistics",
      description: "Parking, bay suspensions and storage — the local details that make a London move actually run on time.",
      slugs: ["parking-permits-moving-london", "storage-options-when-moving-london"],
    },
    {
      title: "Service comparisons & move scenarios",
      description: "How to choose between a man and van, full removals and office relocations for your specific job.",
      slugs: [
        "man-and-van-vs-removals-london",
        "moving-a-1-bed-flat-london",
        "office-relocation-guide-london",
      ],
    },
  ];
  const bySlug = Object.fromEntries(POSTS.map((p) => [p.slug, p]));

  return (
    <SiteLayout>
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Moving advice for London
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            Practical London moving advice from a working removals team — covering costs, parking,
            packing, timing, storage and how to choose the right service for your job. Grouped by
            topic so you can jump straight to the stage of the move you're planning.
          </p>
          {groups.map((g) => (
            <div key={g.title} className="mt-12">
              <h2 className="text-2xl font-bold text-primary md:text-3xl">{g.title}</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{g.description}</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {g.slugs.map((slug) => {
                  const p = bySlug[slug];
                  if (!p) return null;
                  return (
                    <a
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-colors hover:border-primary/40"
                    >
                      <h3 className="text-lg font-semibold text-primary">{p.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                      <span className="mt-4 inline-block text-sm font-semibold text-primary">Read article →</span>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </SiteLayout>
  );
}
