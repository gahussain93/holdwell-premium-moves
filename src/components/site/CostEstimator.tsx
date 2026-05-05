import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { z } from "zod";

type Size = "1" | "2" | "3";
type Distance = "local" | "outside";
type YesNo = "yes" | "no";
type Parking = "close" | "far";

// Strict price model — these are the only ranges we publish.
const BASE: Record<Size, [number, number]> = {
  "1": [200, 300],
  "2": [320, 450],
  "3": [500, 900],
};

const MIN_PRICE = 200;
const MAX_PRICE = 900;

const schema = z.object({
  size: z.enum(["1", "2", "3"], { message: "Please select a property size." }),
  distance: z.enum(["local", "outside"], { message: "Please choose a distance." }),
  stairs: z.enum(["yes", "no"], { message: "Please tell us about stairs." }),
  parking: z.enum(["close", "far"], { message: "Please choose a parking distance." }),
  packing: z.enum(["yes", "no"], { message: "Please choose a packing option." }),
});

type FormState = {
  size: Size | "";
  distance: Distance | "";
  stairs: YesNo | "";
  parking: Parking | "";
  packing: YesNo | "";
};

type Errors = Partial<Record<keyof FormState, string>>;

function estimate(
  size: Size,
  stairs: YesNo,
  parking: Parking,
  packing: YesNo,
): [number, number] {
  let [low, high] = BASE[size];
  // Modifiers nudge within the band; we always clamp to the published model.
  if (stairs === "yes") high += 40;
  if (parking === "far") high += 30;
  if (packing === "yes") high += 60;
  const stack =
    (stairs === "yes" ? 1 : 0) +
    (parking === "far" ? 1 : 0) +
    (packing === "yes" ? 1 : 0);
  if (stack >= 2) low += 30;

  const [bandLow, bandHigh] = BASE[size];
  const clamp = (n: number) => Math.min(MAX_PRICE, Math.max(MIN_PRICE, n));
  low = Math.max(bandLow, clamp(low));
  high = Math.min(bandHigh, clamp(high));
  if (high < low) high = low;
  const r = (n: number) => Math.round(n / 10) * 10;
  return [r(low), r(high)];
}

export function CostEstimator() {
  const [form, setForm] = useState<FormState>({
    size: "",
    distance: "",
    stairs: "",
    parking: "",
    packing: "",
  });
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const parsed = schema.safeParse(form);
  const errors: Errors = {};
  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof FormState;
      if (!errors[key]) errors[key] = issue.message;
    }
  }

  // Cross-field consistency warning (non-blocking).
  let warning: string | null = null;
  if (
    parsed.success &&
    form.size === "3" &&
    form.parking === "far" &&
    form.packing === "no"
  ) {
    warning =
      "Heads up: a 3-bed+ move with far parking and no packing help often runs to the upper end — consider adding packing for a smoother day.";
  }

  const isOutside = parsed.success && form.distance === "outside";
  const result = parsed.success && !isOutside
    ? estimate(form.size as Size, form.stairs as YesNo, form.parking as Parking, form.packing as YesNo)
    : null;

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const blur = (key: keyof FormState) =>
    setTouched((prev) => ({ ...prev, [key]: true }));

  const uid = useId();
  const ids = {
    size: `${uid}-size`,
    distance: `${uid}-distance`,
    stairs: `${uid}-stairs`,
    parking: `${uid}-parking`,
    packing: `${uid}-packing`,
  } as const;
  const helpId = (k: keyof FormState) => `${uid}-${k}-help`;
  const errId = (k: keyof FormState) => `${uid}-${k}-err`;
  const introId = `${uid}-intro`;

  const labelClass = "block text-sm font-medium text-foreground";
  const helpClass = "mt-1 text-xs text-muted-foreground";
  const errorClass = "mt-1 text-xs font-medium text-destructive";
  const fieldClass = (k: keyof FormState) =>
    [
      "mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground shadow-sm transition-colors hover:border-primary/60 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      touched[k] && errors[k] ? "border-destructive" : "border-input",
    ].join(" ");

  const showError = (k: keyof FormState) => Boolean(touched[k] && errors[k]);
  const describedBy = (k: keyof FormState) =>
    [helpId(k), showError(k) ? errId(k) : null].filter(Boolean).join(" ");

  return (
    <section
      aria-labelledby={`${uid}-title`}
      aria-describedby={introId}
      className="not-prose my-10 rounded-xl border border-border bg-card p-6 shadow-sm"
    >
      <h3 id={`${uid}-title`} className="text-lg font-semibold text-primary">
        Rough cost estimator
      </h3>
      <p id={introId} className="mt-2 text-sm text-muted-foreground">
        Use this as a rough guide only. Final price depends on your inventory, access and timing — for a fixed price, send us a few photos.
      </p>

      <fieldset className="mt-5 grid gap-4 sm:grid-cols-2 border-0 p-0 m-0">
        <legend className="sr-only">Move details</legend>

        <div>
          <label htmlFor={ids.size} className={labelClass}>
            Property size <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <select
            id={ids.size}
            name="size"
            required
            aria-required="true"
            aria-invalid={showError("size") || undefined}
            aria-describedby={describedBy("size")}
            className={fieldClass("size")}
            value={form.size}
            onChange={(e) => update("size", e.target.value as Size)}
            onBlur={() => blur("size")}
          >
            <option value="" disabled>Select…</option>
            <option value="1">1 bed</option>
            <option value="2">2 bed</option>
            <option value="3">3 bed+</option>
          </select>
          <p id={helpId("size")} className={helpClass}>
            Number of bedrooms in the property you're moving from.
          </p>
          {showError("size") && (
            <p id={errId("size")} className={errorClass}>
              {errors.size}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={ids.distance} className={labelClass}>
            Distance <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <select
            id={ids.distance}
            name="distance"
            required
            aria-required="true"
            aria-invalid={showError("distance") || undefined}
            aria-describedby={describedBy("distance")}
            className={fieldClass("distance")}
            value={form.distance}
            onChange={(e) => update("distance", e.target.value as Distance)}
            onBlur={() => blur("distance")}
          >
            <option value="" disabled>Select…</option>
            <option value="local">Local (within London)</option>
            <option value="outside">Outside London</option>
          </select>
          <p id={helpId("distance")} className={helpClass}>
            Local moves stay inside the M25; outside London adds mileage.
          </p>
          {showError("distance") && (
            <p id={errId("distance")} className={errorClass}>
              {errors.distance}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={ids.stairs} className={labelClass}>
            Stairs without lift? <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <select
            id={ids.stairs}
            name="stairs"
            required
            aria-required="true"
            aria-invalid={showError("stairs") || undefined}
            aria-describedby={describedBy("stairs")}
            className={fieldClass("stairs")}
            value={form.stairs}
            onChange={(e) => update("stairs", e.target.value as YesNo)}
            onBlur={() => blur("stairs")}
          >
            <option value="" disabled>Select…</option>
            <option value="no">No / lift available</option>
            <option value="yes">Yes, stairs only</option>
          </select>
          <p id={helpId("stairs")} className={helpClass}>
            Carrying up several floors of stairs takes longer.
          </p>
          {showError("stairs") && (
            <p id={errId("stairs")} className={errorClass}>
              {errors.stairs}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={ids.parking} className={labelClass}>
            Parking distance <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <select
            id={ids.parking}
            name="parking"
            required
            aria-required="true"
            aria-invalid={showError("parking") || undefined}
            aria-describedby={describedBy("parking")}
            className={fieldClass("parking")}
            value={form.parking}
            onChange={(e) => update("parking", e.target.value as Parking)}
            onBlur={() => blur("parking")}
          >
            <option value="" disabled>Select…</option>
            <option value="close">Close to door</option>
            <option value="far">Far from door</option>
          </select>
          <p id={helpId("parking")} className={helpClass}>
            Long carries from the van to the door add time.
          </p>
          {showError("parking") && (
            <p id={errId("parking")} className={errorClass}>
              {errors.parking}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={ids.packing} className={labelClass}>
            Packing required? <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <select
            id={ids.packing}
            name="packing"
            required
            aria-required="true"
            aria-invalid={showError("packing") || undefined}
            aria-describedby={describedBy("packing")}
            className={fieldClass("packing")}
            value={form.packing}
            onChange={(e) => update("packing", e.target.value as YesNo)}
            onBlur={() => blur("packing")}
          >
            <option value="" disabled>Select…</option>
            <option value="no">No, I'll pack myself</option>
            <option value="yes">Yes, please pack for me</option>
          </select>
          <p id={helpId("packing")} className={helpClass}>
            Optional packing service includes materials and labour.
          </p>
          {showError("packing") && (
            <p id={errId("packing")} className={errorClass}>
              {errors.packing}
            </p>
          )}
        </div>
      </fieldset>

      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="mt-6 rounded-lg bg-muted p-4"
      >
        <p className="text-xs uppercase tracking-wide text-muted-foreground">Estimated range</p>
        {result ? (
          <>
            <p className="mt-1 text-2xl font-bold text-foreground">
              <span className="sr-only">Estimated price range: </span>
              £{result[0]}–£{result[1]}
            </p>
            {warning && (
              <p className="mt-2 text-xs font-medium text-foreground/80">{warning}</p>
            )}
          </>
        ) : (
          <p className="mt-1 text-sm text-muted-foreground">
            Complete all fields above to see an estimated range.
          </p>
        )}
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
