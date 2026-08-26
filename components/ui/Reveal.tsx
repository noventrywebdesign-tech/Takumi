"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode, RefObject } from "react";
import { useViewportSafe } from "@/lib/use-viewport-safe";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "li";
};

export default function Reveal({ children, className, delay = 0, y = 26, once = true, as = "div" }: RevealProps) {
  const MotionTag = as === "li" ? motion.li : motion.div;
  const { ref, entered, markEntered } = useViewportSafe<HTMLElement>();
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MotionTag
      ref={ref as RefObject<HTMLDivElement & HTMLLIElement>}
      className={className}
      initial="hidden"
      animate={entered ? "visible" : "hidden"}
      onViewportEnter={markEntered}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      variants={variants}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
