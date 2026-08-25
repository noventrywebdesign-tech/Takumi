type Props = { rating: number; outOf?: number; size?: "sm" | "lg"; className?: string };

const STAR =
  "M10 1.6l2.47 5.39 5.85.61-4.4 3.98 1.27 5.82L10 14.4l-5.19 3-1.27-5.82-4.4-3.98 5.85-.61z";

/** Star rating with proportional partial-fill (e.g. 4.7 of 5) — never rounds visibly to a false whole number. */
export default function StarRating({ rating, outOf = 5, size = "sm", className = "" }: Props) {
  const pct = Math.max(0, Math.min(1, rating / outOf)) * 100;
  const dim = size === "lg" ? "h-6 w-6" : "h-3.5 w-3.5";

  return (
    <span className={`relative inline-flex ${className}`} role="img" aria-label={`${rating.toString().replace(".", ",")} von ${outOf} Sternen`}>
      <span className="flex gap-0.5 text-ink-900/15" aria-hidden>
        {Array.from({ length: outOf }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 18" fill="currentColor" className={dim}>
            <path d={STAR} />
          </svg>
        ))}
      </span>
      <span className="absolute inset-0 flex gap-0.5 overflow-hidden text-yellow-500" style={{ width: `${pct}%` }} aria-hidden>
        {Array.from({ length: outOf }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 18" fill="currentColor" className={`${dim} shrink-0`}>
            <path d={STAR} />
          </svg>
        ))}
      </span>
    </span>
  );
}
