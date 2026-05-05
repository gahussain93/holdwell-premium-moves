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

const LINK_CLS = "font-medium text-primary underline-offset-2 hover:underline";

function BlogIndex() {
  const groups: Array<{ title: string; slugs: string[]; description: React.ReactNode }> = [
    {
      title: "Costs & pricing",
      slugs: ["cost-of-moving-house-london", "best-time-to-move-house-london"],
      description: (
        <>
          Start here when you're still budgeting and trying to work out which service actually fits the job. These guides break down what a London move tends to cost by property size, how the day and month you book changes the price, and when a leaner option like our <a href={"/man-and-van-london"} className={LINK_CLS}>man and van service</a> works out cheaper than a full removal. For headline price bands, see our <a href={"/pricing"} className={LINK_CLS}>pricing page</a>.
        </>
      ),
    },
    {
      title: "Planning your move",
      slugs: [
        "moving-house-checklist-uk",
        "how-long-does-a-house-move-take-london",
        "how-to-pack-for-a-house-move-london",
      ],
      description: (
        <>
          Read these in the four weeks before move day — they exist to stop the avoidable mistakes that turn a one-day job into two. You'll get a week-by-week checklist, honest duration estimates by property size, and a room-by-room packing order that makes unloading the new place actually painless. If packing is the part you'd rather hand over, that's covered by our <a href={"/packing-assembly-dismantling-london"} className={LINK_CLS}>packing and dismantling service</a>.
        </>
      ),
    },
    {
      title: "London moving logistics",
      slugs: ["parking-permits-moving-london", "storage-options-when-moving-london"],
      description: (
        <>
          The local details that quietly decide whether a London move runs on time: where the van actually parks, how to suspend a bay on a CPZ street, and what to do when completion dates don't line up. Worth reading if you're moving in a borough with tight access or narrow roads — browse <a href={"/areas"} className={LINK_CLS}>the areas we cover</a> for street-level notes near you.
        </>
      ),
    },
    {
      title: "Service comparisons & move scenarios",
      slugs: [
        "man-and-van-vs-removals-london",
        "moving-a-1-bed-flat-london",
        "office-relocation-guide-london",
      ],
      description: (
        <>
          Use this section when you know roughly what you're moving but aren't sure which service to book. We compare man-and-van against full removals for small flats, walk through what a 1-bed move really involves, and lay out the lead times and weekend logistics behind a low-downtime <a href={"/office-removals-london"} className={LINK_CLS}>office relocation</a>.
        </>
      ),
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
