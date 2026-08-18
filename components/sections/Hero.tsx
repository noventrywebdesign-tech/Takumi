"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { company } from "@/lib/site-data";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIntroDone(true), 1150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink-950">
      {/* Intro reveal panel */}
      <motion.div
        aria-hidden
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.75, delay: 0.55, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "top" }}
        className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center bg-ink-950"
      >
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.05em" }}
          animate={{ opacity: [0, 1, 1, 0], letterSpacing: "0.3em" }}
          transition={{ duration: 0.9, times: [0, 0.35, 0.75, 1], ease: "easeInOut" }}
          className="font-jp text-6xl text-yellow-500 sm:text-7xl"
        >
          匠
        </motion.span>
      </motion.div>

      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          src="/images/food/hero-tempura-macro.jpg"
          alt="Ramen mit knuspriger Gemüse-Tempura, Sojasprossen und Frühlingszwiebeln bei Takumi Dortmund"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full object-cover photo-cinematic"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-transparent to-transparent" />
        <div className="grain vignette absolute inset-0" />
      </div>

      {/* Steam accents */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-[8%] hidden justify-center gap-24 sm:flex">
        <span className="animate-steam h-40 w-16 rounded-full bg-paper-50/10 blur-2xl" />
        <span className="animate-steam h-52 w-20 rounded-full bg-paper-50/10 blur-2xl [animation-delay:1.4s]" />
        <span className="animate-steam h-36 w-14 rounded-full bg-paper-50/10 blur-2xl [animation-delay:2.6s]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[92rem] px-6 pb-14 sm:pb-16 lg:px-12 lg:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={introDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow text-yellow-400"
        >
          <span className="font-jp text-base">麺処匠</span> Sapporo Ramen seit {company.founded}
        </motion.p>

        <h1 className="mt-4 font-display text-[14vw] font-black uppercase leading-[0.8] tracking-tight text-paper-50 sm:text-[13vw] lg:text-[10.5vw]">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={introDone ? { y: "0%" } : {}}
              transition={{ duration: 0.95, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Takumi
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={introDone ? { y: "0%" } : {}}
              transition={{ duration: 0.95, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block text-yellow-500"
            >
              Dortmund
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={introDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex flex-col gap-6 sm:mt-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="max-w-md font-display text-2xl font-bold uppercase leading-tight tracking-wide text-paper-50 sm:text-3xl">
              No Ramen. No Life.
            </p>
            <p className="mt-3 eyebrow text-paper-50/60">{company.address.street} · Dortmund</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <MagneticButton href="#menu" variant="solid">
              Speisekarte entdecken
            </MagneticButton>
            <MagneticButton href={company.mapsLink} target="_blank" variant="outline-light">
              Route öffnen
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={introDone ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="h-10 w-px bg-paper-50/40" />
        <span className="eyebrow text-[0.62rem] text-paper-50/50">Scroll</span>
      </motion.div>
    </section>
  );
}
