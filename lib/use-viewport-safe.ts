"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Guards scroll-reveal animations against a real Framer Motion failure mode: every
 * `whileInView` element on this site shares one IntersectionObserver instance per
 * distinct (root, margin, threshold) combo — and since they nearly all use the same
 * margin, that's effectively one shared observer for the whole page. During a large,
 * fast scroll (a hard mobile flick, a big programmatic jump), an element can transit
 * through the observed band between two of that observer's delivery cycles and never
 * receive an "entering" notification — it stays stuck at its hidden state permanently
 * (verified reproducible: components/sections/InstagramGallery.tsx tiles stuck at
 * opacity:0 indefinitely after a fast scroll past them, confirmed independent of
 * network conditions).
 *
 * `markEntered` (wired to onViewportEnter) covers the normal case exactly as before.
 * The rAF loop below is a second, independent detection path that doesn't touch Framer
 * Motion's observer at all — it just re-checks the element's real bounding rect every
 * frame until it's on-screen. Deliberately not scroll/resize-event-driven: Lenis keeps
 * its own internal scroll-position state, and a programmatic jump that bypasses it (e.g.
 * a native scrollIntoView() call, as opposed to a wheel/touch-driven scroll) doesn't
 * reliably behave like a normal scroll here — checking real geometry every frame sidesteps
 * needing to know which event, if any, a given scroll mechanism fires. Self-cancels the
 * moment the element is found on-screen, so cost is one bounding-rect check per pending
 * element per frame — negligible, and it only runs for elements not yet revealed.
 */
export function useViewportSafe<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (entered) return;
    let raf: number;
    const check = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
        setEntered(true);
        return;
      }
      raf = requestAnimationFrame(check);
    };
    raf = requestAnimationFrame(check);
    return () => cancelAnimationFrame(raf);
  }, [entered]);

  return { ref, entered, markEntered: () => setEntered(true) };
}
