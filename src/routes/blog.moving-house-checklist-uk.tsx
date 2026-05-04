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

      <h2>Conclusion</h2>
      <p>The biggest time-savers are: book your mover early, sort parking the moment you have a date, and pack room by room. If you'd rather skip the packing entirely, we cover that as part of <a href="/packing-assembly-dismantling-london">packing and assembly</a>.</p>
    </BlogPost>
  ),
});
