import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";

type Size = "1" | "2" | "3" | "4";
type Distance = "local" | "outside";
type YesNo = "yes" | "no";
type Parking = "close" | "far";

const BASE: Record<Size, [number, number]> = {
  "1": [180, 300],
  "2": [280, 500],
  "3": [475, 800],
  "4": [700, 1200],
};

function estimate(
  size: Size,
  distance: Distance,
  stairs: YesNo,
  parking: Parking,
  packing: YesNo,
): [number, number] {
  let [low, high] = BASE[size];
  if (distance === "outside") {
    low += 120;
    high += 250;
  }
  if (stairs === "yes") {
    low += 40;
    high += 100;
  }
  if (parking === "far") {
    low += 30;
    high += 80;
  }
  if (packing === "yes") {
    low += 80;
    high += 200;
  }
  const r = (n: number) => Math.round(n / 10) * 10;
  return [r(low), r(high)];
}

export function CostEstimator() {
  const [size, setSize] = useState<Size>("2");
  const [distance, setDistance] = useState<Distance>("local");
  const [stairs, setStairs] = useState<YesNo>("no");
  const [parking, setParking] = useState<Parking>("close");
  const [packing, setPacking] = useState<YesNo>("no");

  const [low, high] = estimate(size, distance, stairs, parking, packing);

  const uid = useId();
  const sizeId = `${uid}-size`;
  const distanceId = `${uid}-distance`;
  const stairsId = `${uid}-stairs`;
  const parkingId = `${uid}-parking`;
  const packingId = `${uid}-packing`;
  const sizeHelpId = `${uid}-size-help`;
  const distanceHelpId = `${uid}-distance-help`;
  const stairsHelpId = `${uid}-stairs-help`;
  const parkingHelpId = `${uid}-parking-help`;
  const packingHelpId = `${uid}-packing-help`;
  const resultId = `${uid}-result`;
  const intoId = `${uid}-intro`;

  const labelClass = "block text-sm font-medium text-foreground";
  const helpClass = "mt-1 text-xs text-muted-foreground";
  const fieldClass =
    "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm transition-colors hover:border-primary/60 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <section
      aria-labelledby={`${uid}-title`}
      aria-describedby={intoId}
      className="not-prose my-10 rounded-xl border border-border bg-card p-6 shadow-sm"
    >
      <h3 id={`${uid}-title`} className="text-lg font-semibold text-primary">
        Rough cost estimator
      </h3>
      <p id={intoId} className="mt-2 text-sm text-muted-foreground">
        Use this as a rough guide only. Final price depends on your inventory, access and timing — for a fixed price, send us a few photos.
      </p>

      <fieldset className="mt-5 grid gap-4 sm:grid-cols-2 border-0 p-0 m-0">
        <legend className="sr-only">Move details</legend>

        <div>
          <label htmlFor={sizeId} className={labelClass}>
            Property size
          </label>
          <select
            id={sizeId}
            name="size"
            aria-describedby={sizeHelpId}
            className={fieldClass}
            value={size}
            onChange={(e) => setSize(e.target.value as Size)}
          >
            <option value="1">1 bed</option>
            <option value="2">2 bed</option>
            <option value="3">3 bed</option>
            <option value="4">4+ bed</option>
          </select>
          <p id={sizeHelpId} className={helpClass}>
            Number of bedrooms in the property you're moving from.
          </p>
        </div>

        <div>
          <label htmlFor={distanceId} className={labelClass}>
            Distance
          </label>
          <select
            id={distanceId}
            name="distance"
            aria-describedby={distanceHelpId}
            className={fieldClass}
            value={distance}
            onChange={(e) => setDistance(e.target.value as Distance)}
          >
            <option value="local">Local (within London)</option>
            <option value="outside">Outside London</option>
          </select>
          <p id={distanceHelpId} className={helpClass}>
            Local moves stay inside the M25; outside London adds mileage.
          </p>
        </div>

        <div>
          <label htmlFor={stairsId} className={labelClass}>
            Stairs without lift?
          </label>
          <select
            id={stairsId}
            name="stairs"
            aria-describedby={stairsHelpId}
            className={fieldClass}
            value={stairs}
            onChange={(e) => setStairs(e.target.value as YesNo)}
          >
            <option value="no">No / lift available</option>
            <option value="yes">Yes, stairs only</option>
          </select>
          <p id={stairsHelpId} className={helpClass}>
            Carrying up several floors of stairs takes longer.
          </p>
        </div>

        <div>
          <label htmlFor={parkingId} className={labelClass}>
            Parking distance
          </label>
          <select
            id={parkingId}
            name="parking"
            aria-describedby={parkingHelpId}
            className={fieldClass}
            value={parking}
            onChange={(e) => setParking(e.target.value as Parking)}
          >
            <option value="close">Close to door</option>
            <option value="far">Far from door</option>
          </select>
          <p id={parkingHelpId} className={helpClass}>
            Long carries from the van to the door add time.
          </p>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={packingId} className={labelClass}>
            Packing required?
          </label>
          <select
            id={packingId}
            name="packing"
            aria-describedby={packingHelpId}
            className={fieldClass}
            value={packing}
            onChange={(e) => setPacking(e.target.value as YesNo)}
          >
            <option value="no">No, I'll pack myself</option>
            <option value="yes">Yes, please pack for me</option>
          </select>
          <p id={packingHelpId} className={helpClass}>
            Optional packing service includes materials and labour.
          </p>
        </div>
      </fieldset>

      <div
        id={resultId}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="mt-6 rounded-lg bg-muted p-4"
      >
        <p className="text-xs uppercase tracking-wide text-muted-foreground">Estimated range</p>
        <p className="mt-1 text-2xl font-bold text-foreground">
          <span className="sr-only">Estimated price range: </span>
          £{low}–£{high}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Indicative only — not a quote. For a fixed price, see{" "}
          <Link
            to="/pricing"
            className="font-medium text-primary underline rounded-sm focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            pricing
          </Link>{" "}
          or{" "}
          <Link
            to="/contact"
            className="font-medium text-primary underline rounded-sm focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            get in touch
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
