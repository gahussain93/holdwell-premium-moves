import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";

export const Route = createFileRoute("/blog/how-to-pack-for-a-house-move-london")({
  head: () => ({
    meta: [
      { title: "How to Pack for a House Move in London (Room-by-Room) | HoldWell" },
      { name: "description", content: "A practical, room-by-room packing guide for London moves — materials, order of work, fragile items, labelling and what to leave to the pros." },
      { property: "og:title", content: "How to pack for a house move in London" },
      { property: "og:description", content: "Room-by-room packing guide for London moves." },
    ],
    links: [{ rel: "canonical", href: "https://www.holdwellremovals.co.uk/blog/how-to-pack-for-a-house-move-london" }],
  }),
  component: () => (
    <BlogPost
      date="May 2026"
      title="How to pack for a house move in London — a room-by-room guide"
      intro="Packing is where most London moves slip — not the loading. A 2-bed that's 80% packed by the morning of move day will run smoothly; one that's 40% packed will cost an extra hour or two on the clock. Here's the order of work, the materials that actually matter, and the parts of the job that almost always pay back if you let the crew handle them."
    >
      <h2>Start three weeks out, not three days</h2>
      <p>For a typical London 1-bed you need around 6–10 hours of focused packing. A 2-bed is closer to 12–16 hours, a 3-bed family home 20+ hours. Spread that over three weekends and the move feels easy; cram it into the night before and something always gets missed. If you're booking <a href="/house-removals-london">house removals in London</a>, ask the crew lead for a packing checklist when you confirm the date — it's the single best way to avoid the move-day scramble.</p>

      <h2>Materials worth buying</h2>
      <ul>
        <li><strong>Double-walled boxes</strong> in two sizes — small for books and kitchen, medium for clothes and bathroom. Avoid supermarket boxes for anything heavy; they fail at the bottom mid-stairs.</li>
        <li><strong>Heavy-duty parcel tape</strong> (40+ microns) and a tape gun. Cheap tape peels off in a warm van.</li>
        <li><strong>Bubble wrap</strong> for glass, ceramics and screens. Newsprint or unprinted packing paper for plates and bowls.</li>
        <li><strong>Wardrobe boxes</strong> (with the hanging rail) for anything that creases — suits, dresses, coats. Two or three is enough for a 2-bed.</li>
        <li><strong>Mattress and sofa covers</strong> — protects against London street dust on the carry between van and door.</li>
        <li><strong>Permanent marker and coloured stickers</strong> for room-coding. One colour per room beats writing "kitchen" on 40 boxes.</li>
      </ul>

      <h2>The order of work</h2>
      <p>Start with the rooms you use least and work toward the kitchen and bedroom. A common London order:</p>
      <ol className="list-decimal pl-6">
        <li><strong>Loft, garage, under-stairs cupboards</strong> — anything you haven't touched in 6 months. This is also where you decide what to throw away rather than move.</li>
        <li><strong>Spare room / office</strong> — books, files, decorations, bedding.</li>
        <li><strong>Living room</strong> — books, art, ornaments, media. Leave the sofa, TV and a single lamp for last.</li>
        <li><strong>Bathroom</strong> — back stock and toiletries you don't use daily; keep an "open first" toiletry bag.</li>
        <li><strong>Kitchen</strong> — the biggest job. Crockery, glasses and small appliances first; cooking essentials last.</li>
        <li><strong>Bedroom</strong> — out-of-season clothes first, current week last.</li>
      </ol>

      <h2>Room-by-room notes</h2>
      <h3>Kitchen</h3>
      <p>Wrap glassware individually with paper inside the bowl and bubble wrap outside. Pack plates <em>vertically</em>, not stacked — they survive vibration far better. Use small boxes for anything heavy: a medium box of pans is too heavy to lift safely up three flights. Tape lids onto pots, leave a kettle and two mugs out for move day.</p>
      <h3>Bedroom</h3>
      <p>Wardrobe boxes save an hour of ironing. For drawers, leave clothes inside if the chest is solid — most movers will carry a small chest pre-loaded. Bag duvets and pillows in vacuum bags or bin liners. Disassemble bed frames the night before, bag the bolts and tape the bag to the headboard.</p>
      <h3>Living room</h3>
      <p>TVs need their original box if you still have it; if not, bubble wrap the screen and stand it upright in the van — never flat. For art and mirrors, sandwich between two layers of cardboard, then bubble wrap.</p>
      <h3>Bathroom</h3>
      <p>Decant anything that could leak. The classic mistake is a 2-litre shampoo on its side in a 30-minute van trip. Tape lids; bag bottles inside a thick bin liner inside the box.</p>

      <h2>Labelling that actually helps on move day</h2>
      <p>Write the room <em>and</em> a one-line summary of the contents on two sides of every box: "KITCHEN — pans" not just "kitchen". Add a coloured sticker per room. Mark the 5–10 boxes you'll need first night with a big "OPEN FIRST" — kettle, mugs, toiletries, phone chargers, bedding, a couple of plates.</p>

      <h2>What to let the crew handle</h2>
      <p>Three jobs almost always pay back if you book them as a service: full kitchen pack (wrapping glass and ceramics quickly), wardrobes and chests of drawers (the disassembly/reassembly), and any oversized art or mirrors. See <a href="/packing-assembly-dismantling-london">packing, assembly and dismantling</a> for what's included and our typical day rates.</p>

      <h2>London-specific packing notes</h2>
      <p>If you're loading from a CPZ in <a href="/removals-fulham">Fulham</a>, <a href="/removals-chiswick">Chiswick</a> or <a href="/removals-ealing">Ealing</a>, get all your boxes by the front door the night before. The carry from a top-floor flat to a parked van eats time fast, so the more compact the trip the better. For mansion blocks with a passenger lift, stack boxes near the lift in the corridor on move day so the crew can run a constant cycle. See our <a href="/blog/parking-permits-moving-london">parking permits guide</a> for booking a bay suspension at the loading end.</p>

      <h2>Common packing mistakes</h2>
      <ul>
        <li>Boxes too heavy — kitchen books and cookware mixed in one. Split them.</li>
        <li>Open-top boxes — they can't be stacked and waste van space.</li>
        <li>Forgetting the "open first" box — leads to a shower with no towel on night one.</li>
        <li>Packing valuables in unlabelled boxes — passports, jewellery and keys should travel with you, not in the van.</li>
      </ul>

      <h2>Cost vs DIY</h2>
      <p>Professional packing typically takes a 2-person team a day for a 2-bed. For most clients it saves the same or more on move-day labour, and reduces breakages noticeably. If you're moving with kids or working full-time up to the day, it's the easiest line item to justify. For a sense of total move cost, see our <a href="/blog/cost-of-moving-house-london">cost of moving house in London</a> guide. To compare service options first, our <a href="/blog/man-and-van-vs-removals-london">man and van vs full removals</a> piece walks through which one fits.</p>

      <h2>Ready to book?</h2>
      <p>Send a few photos and the two postcodes — we'll come back with a fixed quote, packing included or excluded, the same day. <a href="/contact">Get in touch</a> or browse the full <a href="/services">services list</a>.</p>
    </BlogPost>
  ),
});
