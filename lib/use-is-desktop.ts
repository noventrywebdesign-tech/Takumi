"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe "wide viewport" check, used to gate continuous scroll-linked parallax
 * (sections with several simultaneous useTransform bindings) off on mobile —
 * resolves false on the server and first paint so hydration matches, then flips
 * after mount if the real viewport is wide. Not a replacement for prefers-reduced-motion,
 * which is handled separately by useReducedMotionSafe / MotionConfig.
 */
export function useIsDesktop(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`);
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);

  return isDesktop;
}
