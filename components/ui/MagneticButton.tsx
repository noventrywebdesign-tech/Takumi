"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "outline-light" | "ghost-light";
  className?: string;
  target?: string;
  onClick?: () => void;
};

const base =
  "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.2em] transition-colors duration-500";

const variants: Record<NonNullable<Props["variant"]>, string> = {
  solid: "bg-yellow-500 text-ink-950",
  outline: "border border-ink-900/25 text-ink-900",
  "outline-light": "border border-paper-50/40 text-paper-50",
  "ghost-light": "text-paper-50",
};

const fillClass: Record<NonNullable<Props["variant"]>, string> = {
  solid: "bg-ink-900",
  outline: "bg-ink-900",
  "outline-light": "bg-yellow-500",
  "ghost-light": "bg-yellow-500/0",
};

const hoverText: Record<NonNullable<Props["variant"]>, string> = {
  solid: "group-hover:text-paper-50",
  outline: "group-hover:text-paper-50 group-hover:border-ink-900",
  "outline-light": "group-hover:text-ink-950 group-hover:border-yellow-500",
  "ghost-light": "group-hover:text-yellow-400",
};

/** Subtle magnetic pull toward the cursor within the button's box — disabled under reduced motion. */
export default function MagneticButton({ href, children, variant = "solid", className = "", target, onClick }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotionSafe();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 14, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 150, damping: 14, mass: 0.3 });

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };
  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      className={`${base} ${variants[variant]} ${hoverText[variant]} ${className}`}
    >
      {variant !== "ghost-light" && (
        <span
          className={`absolute inset-0 -translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 ${fillClass[variant]}`}
          aria-hidden
        />
      )}
      <span className="relative">{children}</span>
      <span className="relative translate-x-0 transition-transform duration-500 group-hover:translate-x-1" aria-hidden>
        →
      </span>
    </motion.a>
  );
}
