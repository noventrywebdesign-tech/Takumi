"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { reviews, reviewStats, company } from "@/lib/site-data";
import Reveal from "@/components/ui/Reveal";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";

/** Counts up to the real, verified score once scrolled into view — never used for unverified numbers. */
function CountUpScore({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const reduce = useReducedMotionSafe();
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => v.toFixed(1).replace(".", ","));

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      count.set(target);
      return;
    }
    const controls = animate(count, target, { duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [inView, reduce, count, target]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Reviews() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((v) => (v + 1) % reviews.length), 6500);
    return () => clearInterval(t);
  }, []);

  const r = reviews[active];

  return (
    <section className="relative bg-paper-50 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        <Reveal>
          <span className="eyebrow justify-center text-yellow-600">
            <span className="font-jp text-base">評判</span> Was Gäste sagen
          </span>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="tnum font-display text-4xl font-black text-ink-900">
              <CountUpScore target={Number(reviewStats.score.replace(",", "."))} />
            </span>
            <span className="text-sm text-ink-500">
              / {reviewStats.of}
              <br />
              {reviewStats.count} Bewertungen
            </span>
          </div>
          <p className="mt-2 text-xs uppercase tracking-[0.1em] text-ink-400">Quelle: {reviewStats.source}</p>
        </Reveal>

        <div className="relative mt-14 min-h-[220px] sm:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-2xl font-medium leading-snug text-ink-900 sm:text-3xl">
                „{r.text}“
              </p>
              <p className="mt-6 eyebrow justify-center text-ink-500">
                {r.name} · {r.date} · {r.rating}/10
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-2.5">
          {reviews.map((review, i) => (
            <button
              key={review.name}
              type="button"
              aria-label={`Bewertung von ${review.name} anzeigen`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${i === active ? "w-7 bg-yellow-500" : "w-2 bg-ink-900/15"}`}
            />
          ))}
        </div>

        <a
          href={company.tripadvisor}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block text-xs uppercase tracking-[0.12em] text-ink-400 underline-offset-4 hover:text-yellow-600 hover:underline"
        >
          Weitere Bewertungen auf Tripadvisor
        </a>
      </div>
    </section>
  );
}
