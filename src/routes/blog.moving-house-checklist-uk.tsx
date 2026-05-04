import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";

export const Route = createFileRoute("/blog/moving-house-checklist-uk")({
  head: () => ({
    meta: [
      { title: "Moving House Checklist (UK) — 4 Weeks to Move Day | HoldWell" },
      { name: "description", content: "A practical UK moving checklist: 4 weeks to 1 day before move day. No filler — just what you actually need to do." },
      { property: "og:title", content: "Moving house checklist (UK)" },
      { property: "og:description", content: "Week-by-week UK moving checklist." },
    ],
    links: [{ rel: "canonical", href: "https://www.holdwellremovals.co.uk/blog/moving-house-checklist-uk" }],
  }),
  component: () => (
    <BlogPost
      date="May 2026"
      title="Moving house checklist (UK): 4 weeks to move day"
      intro="Most moving checklists are bloated with filler. This is the short version we actually share with London customers — what to do each week, and what you can safely skip."
    >
      <h2>4 weeks before</h2>
      <ul>
        <li>Confirm your moving date and book a removal company. Friday and end-of-month dates fill quickly — see our <a href="/house-removals-london">house removals service</a>.</li>
        <li>Walk through every room and rough-list what's coming, what's being sold and what's going to charity.</li>
        <li>Get quotes for any specialist items (piano, art, large fish tank).</li>
      </ul>

      <h2>3 weeks before</h2>
      <ul>
        <li>Order packing materials — or book <a href="/packing-assembly-dismantling-london">packing</a> if you'd rather not lift a finger.</li>
        <li>Notify your council, water, gas, electricity and broadband providers of the move date.</li>
        <li>Set up Royal Mail redirection (recommended for at least 3 months).</li>
      </ul>

      <h2>2 weeks before</h2>
      <ul>
        <li>Apply for a parking bay suspension if needed (most London boroughs need ~5 working days). See our <a href="/blog/parking-permits-moving-london">parking permits guide</a>.</li>
        <li>Update your address: bank, GP, dentist, employer, DVLA, insurance.</li>
        <li>Start packing rooms you don't use daily — spare room, books, out-of-season clothes.</li>
        <li>Use up the freezer.</li>
      </ul>

      <h2>1 week before</h2>
      <ul>
        <li>Confirm arrival window with your mover and share the final inventory.</li>
        <li>Pack everything except daily essentials.</li>
        <li>Disassemble flat-pack you'll handle yourself (or leave for the crew).</li>
        <li>Take meter readings and photograph fixtures for your deposit return.</li>
      </ul>

      <h2>The day before</h2>
      <ul>
        <li>Pack an "essentials" box: chargers, kettle, mugs, bedding, toilet roll, basic toolkit, medication.</li>
        <li>Defrost the fridge if it's going with you.</li>
        <li>Empty the washing machine, drain hoses.</li>
        <li>Charge phones; print or screenshot directions and the new keys collection plan.</li>
      </ul>

      <h2>Move day</h2>
      <ul>
        <li>Be ready 15 minutes before the arrival window.</li>
        <li>Walk the crew through the property and flag anything fragile or "do not move".</li>
        <li>Final meter readings; lock up; hand keys back per agency instructions.</li>
        <li>At the new place, point each box to a room as it comes in — it saves hours of hunting later.</li>
      </ul>

      <h2>The week after</h2>
      <ul>
        <li>Test smoke alarms, locks, boiler.</li>
        <li>Register with a local GP and update your driving licence.</li>
        <li>Donate or return any leftover packing materials.</li>
      </ul>

      <h2>Packing essentials — what actually matters</h2>
      <p>You only need a few things for the first 24 hours: bedding for everyone, phone chargers, kettle, mugs, tea/coffee, a roll of toilet paper, basic toiletries, any medication, a change of clothes, and a small toolkit (Allen keys, screwdriver, scissors, tape). Pack this in one clearly labelled box and put it in the van last so it comes off first. Everything else can wait.</p>

      <h2>Utilities and address updates — the short list</h2>
      <p>Most people only really need to update: bank, employer, GP, dentist, DVLA, vehicle insurance, home insurance, council tax (both addresses), water, gas, electricity, broadband, and Royal Mail redirection. Subscription services (Amazon, supermarkets, gym) can wait a week. Don't try to do all of it in one evening — spread it across the two weeks before move day.</p>

      <h2>Packing strategy that actually works</h2>
      <p>Pack one room a night for the two weeks before move day rather than blitzing the last weekend. Start with the rooms you use least: spare bedroom, hallway cupboards, loft, garage. Label every box on two sides with the destination room (not the contents) — the crew unloads by room, and "Kitchen" written on the side facing the wall doesn't help anyone. Use proper double-walled boxes for books and kitchen, single-wall for clothes and bedding. Wardrobe boxes save hours of ironing on the other side. If you're tight on time, our <a href="/packing-assembly-dismantling-london">packing service</a> can do a full home in a day.</p>

      <h2>Kids, pets and plants</h2>
      <p>Move-day logistics for the people and animals are usually an afterthought and end up being the most stressful part. If at all possible, send children and pets to a friend or grandparent for the day — they'll have a better time and so will you. Plants travel better in boxes with the tops open; water them lightly the day before, not the morning of the move. Aquariums and reptile tanks need specialist handling and are usually the last thing loaded and first unpacked.</p>

      <h2>London-specific tasks worth flagging</h2>
      <ul>
        <li>Check whether either address is in a CPZ and apply for a bay suspension early — see our <a href="/blog/parking-permits-moving-london">parking guide</a>.</li>
        <li>If you're in a mansion block or new-build with a concierge, book the service lift as soon as you have a date.</li>
        <li>Confirm whether your new building has restrictions on move-in days or hours (some only allow weekdays).</li>
        <li>Update your TfL account address for the congestion charge and ULEZ if you drive into central London.</li>
        <li>Check event days at nearby venues — Stamford Bridge, Craven Cottage, Wembley, Twickenham — and avoid them if you can.</li>
      </ul>

      <h2>Common mistakes to avoid</h2>
      <ul>
        <li>Booking the cheapest mover sight-unseen — get the inventory and access confirmed in writing.</li>
        <li>Leaving cleaning until move day. Either book end-of-tenancy cleaners for the day after, or do a deep clean the weekend before and a quick once-over after the van leaves.</li>
        <li>Putting valuables on the van. Passports, jewellery, hard drives and cash should travel with you in the car or your bag.</li>
        <li>Not labelling the "open first" box clearly — it's the difference between a hot shower that night and rummaging at midnight.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The biggest time-savers are: book your mover early — see <a href="/house-removals-london">house removals</a> — sort parking the moment you have a date, and pack room by room. If you'd rather skip the packing entirely, we cover that as part of <a href="/packing-assembly-dismantling-london">packing and assembly</a>. For pricing bands by property size, see <a href="/pricing">pricing</a>. Ready when you are: <a href="/contact">get a quote</a>.</p>
    </BlogPost>
  ),
});
