"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import StarRating from "@/components/ui/StarRating";
import MagneticButton from "@/components/ui/MagneticButton";
import { company, guestReviews, googleReviewStats, type GuestReview } from "@/lib/site-data";

function GoogleG({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.14-3.13-.4-4.6H24v9.1h11.86c-.51 2.87-2.07 5.3-4.4 6.93v5.7h7.1c4.16-3.83 6.54-9.48 6.54-17.13z" />
      <path fill="#34A853" d="M24 46c5.95 0 10.94-1.97 14.58-5.36l-7.1-5.7c-1.97 1.33-4.5 2.11-7.48 2.11-5.75 0-10.62-3.88-12.36-9.1H4.3v5.87C7.93 41.2 15.36 46 24 46z" />
      <path fill="#FBBC05" d="M11.64 27.95A13.95 13.95 0 0 1 10.9 24c0-1.37.24-2.71.65-3.95v-5.87H4.3A21.98 21.98 0 0 0 2 24c0 3.55.85 6.91 2.3 9.87z" />
      <path fill="#EA4335" d="M24 10.75c3.24 0 6.14 1.11 8.43 3.3l6.3-6.3C34.9 4.18 29.9 2 24 2 15.36 2 7.93 6.8 4.3 14.13l7.34 5.87c1.74-5.22 6.6-9.25 12.36-9.25z" />
    </svg>
  );
}

/** "vor X Monaten" computed client-side from a real stored date, so it never goes stale between deploys. */
function relativeMonths(isoDate: string) {
  const then = new Date(isoDate);
  const now = new Date();
  const months = (now.getFullYear() - then.getFullYear()) * 12 + (now.getMonth() - then.getMonth());
  if (months < 1) return "diesen Monat";
  if (months < 12) return `vor ${months} ${months === 1 ? "Monat" : "Monaten"}`;
  const years = Math.floor(months / 12);
  return `vor ${years} ${years === 1 ? "Jahr" : "Jahren"}`;
}

function ReviewCard({ review }: { review: GuestReview }) {
  const initial = review.name.trim().charAt(0).toUpperCase();
  return (
    <div className="flex h-full w-[80vw] shrink-0 flex-col justify-between gap-5 rounded-sm border border-paper-50/10 bg-ink-900 p-6 sm:w-[320px] lg:w-[340px]">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-500 font-display text-sm font-black text-ink-950">
            {initial}
          </span>
          <div>
            <p className="text-sm font-bold text-paper-50">{review.name}</p>
            <StarRating rating={review.rating} />
          </div>
        </div>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-paper-50/75">&ldquo;{review.text}&rdquo;</p>
      </div>

      {/* Honest per-review source — never shown as Google unless it genuinely is. */}
      <div className="flex items-center gap-2 text-xs text-paper-50/40">
        {review.source === "Google" && <GoogleG className="h-3.5 w-3.5" />}
        <span>{review.source}</span>
        <span aria-hidden>·</span>
        <span>{relativeMonths(review.isoDate)}</span>
      </div>
    </div>
  );
}

// With 7 unique reviews, one lap of the strip is still narrower than very wide desktop
// viewports (1920px+) — repeating the set 2x per half (4x total) keeps the strip comfortably
// wider than any realistic viewport, so the track never runs out of cards mid-cycle and
// exposes the bare section background. The animation duration in globals.css is scaled to
// match this width, so the per-card pace stays the same regardless of review count.
const REPEATS_PER_HALF = 2;

export default function GoogleReviews() {
  const half = Array.from({ length: REPEATS_PER_HALF }, () => guestReviews).flat();
  const loop = [...half, ...half];
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative overflow-hidden bg-paper-50 py-24 sm:py-32 lg:py-32">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-12">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <span className="eyebrow justify-center text-yellow-600">
            <GoogleG className="h-4 w-4" /> Google Rezensionen
          </span>
          <h2 className="font-display text-[9vw] font-black uppercase leading-[0.9] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Was unsere Gäste sagen.
          </h2>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <StarRating rating={googleReviewStats.rating} size="lg" />
            <span className="tnum font-display text-2xl font-black text-ink-900">
              {googleReviewStats.rating.toString().replace(".", ",")}
            </span>
            <span className="text-ink-500">von {googleReviewStats.outOf}</span>
          </div>
          <p className="text-sm text-ink-500">
            Basierend auf {googleReviewStats.countLabel} Google-Rezensionen
          </p>

          <MagneticButton href={company.mapsLink} target="_blank" variant="outline" className="mt-2">
            Alle Bewertungen auf Google ansehen
          </MagneticButton>
          <a
            href={company.tripadvisor}
            target="_blank"
            rel="noreferrer"
            className="text-xs uppercase tracking-[0.12em] text-ink-400 underline-offset-4 hover:text-yellow-600 hover:underline"
          >
            Weitere Bewertungen auf Tripadvisor
          </a>
        </Reveal>
      </div>

      <div className="relative mt-14 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] sm:[mask-image:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)]">
        <div
          className="animate-marquee flex w-max gap-5"
          style={{ animationPlayState: paused ? "paused" : "running" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {loop.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
