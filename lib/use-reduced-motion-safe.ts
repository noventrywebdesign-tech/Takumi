"use client";

import { useEffect, useState } from "react";

/**
 * Client-detected reduced-motion preference, safe for SSR: always resolves to
 * `false` on the server and on the first client paint (so hydration matches),
 * then updates a moment after mount if the user actually prefers reduced motion.
 * Use this only for values that get baked into the initial render output
 * (e.g. useTransform ranges). Purely declarative motion.* initial/animate
 * props should instead rely on the root <MotionConfig reducedMotion="user">.
 */
export function useReducedMotionSafe() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduce(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduce;
}
