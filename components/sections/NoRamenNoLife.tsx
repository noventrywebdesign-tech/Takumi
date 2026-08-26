"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsDesktop } from "@/lib/use-is-desktop";
import { useViewportSafe } from "@/lib/use-viewport-safe";

const lines = [
  { text: "No", cls: "" },
  { text: "Ramen", cls: "" },
  { text: "No Life", cls: "text-yellow-500" },
];

export default function NoRamenNoLife() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const isDesktop = useIsDesktop();
  const scale = useTransform(scrollYProgress, [0, 1], isDesktop ? [1.15, 1] : [1.05, 1]);
  const jpReveal = useViewportSafe<HTMLSpanElement>();
  const headlineReveal = useViewportSafe<HTMLHeadingElement>();

  return (
    <section ref={ref} className="relative flex h-[90vh] min-h-[560px] items-center justify-center overflow-hidden bg-ink-950">
      <motion.img
        style={{ scale }}
        src="/images/interior/chef-open-kitchen.jpg"
        alt="Koch bereitet Ramen in der offenen Küche von Takumi Dortmund zu, Dampf steigt auf"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover photo-deep"
      />
      <div className="absolute inset-0 bg-ink-950/65" />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.span
          ref={jpReveal.ref}
          initial={{ opacity: 0, y: 10 }}
          animate={jpReveal.entered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          onViewportEnter={jpReveal.markEntered}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-jp mb-4 text-3xl text-yellow-500 sm:text-4xl"
        >
          麺は命
        </motion.span>
        <motion.h2
          ref={headlineReveal.ref}
          onViewportEnter={headlineReveal.markEntered}
          viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
          className="font-display text-[22vw] font-black uppercase leading-[0.78] tracking-tight text-paper-50 sm:text-[13vw] lg:text-[10vw]"
        >
          {lines.map((line, i) => (
            <span key={line.text} className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: headlineReveal.entered ? "0%" : "100%" }}
                transition={{ duration: 0.85, delay: 0.12 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                className={`block ${line.cls}`}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </motion.h2>
      </div>
    </section>
  );
}
