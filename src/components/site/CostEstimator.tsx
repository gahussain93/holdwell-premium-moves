import { useState } from "react";
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
  // round to nearest 10
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

  const fieldClass =
    "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm";

  return (
    <div className="not-prose my-10 rounded-xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-primary">Rough cost estimator</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Use this as a rough guide only. Final price depends on your inventory, access and timing — for a fixed price, send us a few photos.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-foreground">
          Property size
          <select
            className={fieldClass}
            value={size}
            onChange={(e) => setSize(e.target.value as Size)}
          >
            <option value="1">1 bed</option>
            <option value="2">2 bed</option>
            <option value="3">3 bed</option>
            <option value="4">4+ bed</option>
          </select>
        </label>

        <label className="block text-sm font-medium text-foreground">
          Distance
          <select
            className={fieldClass}
            value={distance}
            onChange={(e) => setDistance(e.target.value as Distance)}
          >
            <option value="local">Local (within London)</option>
            <option value="outside">Outside London</option>
          </select>
        </label>

        <label className="block text-sm font-medium text-foreground">
          Stairs without lift?
          <select
            className={fieldClass}
            value={stairs}
            onChange={(e) => setStairs(e.target.value as YesNo)}
          >
            <option value="no">No / lift available</option>
            <option value="yes">Yes, stairs only</option>
          </select>
        </label>

        <label className="block text-sm font-medium text-foreground">
          Parking distance
          <select
            className={fieldClass}
            value={parking}
            onChange={(e) => setParking(e.target.value as Parking)}
          >
            <option value="close">Close to door</option>
            <option value="far">Far from door</option>
          </select>
        </label>

        <label className="block text-sm font-medium text-foreground sm:col-span-2">
          Packing required?
          <select
            className={fieldClass}
            value={packing}
            onChange={(e) => setPacking(e.target.value as YesNo)}
          >
            <option value="no">No, I'll pack myself</option>
            <option value="yes">Yes, please pack for me</option>
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-lg bg-muted p-4">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">Estimated range</p>
        <p className="mt-1 text-2xl font-bold text-foreground">
          £{low}–£{high}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Indicative only — not a quote. For a fixed price, see{" "}
          <Link to="/pricing" className="font-medium text-primary underline">pricing</Link> or{" "}
          <Link to="/contact" className="font-medium text-primary underline">get in touch</Link>.
        </p>
      </div>
    </div>
  );
}
