"use client";

import { MotionConfig } from "framer-motion";
import { useLenisSmoothScroll } from "@/lib/use-lenis";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useLenisSmoothScroll();
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
