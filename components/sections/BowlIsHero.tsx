"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { signatureRamen } from "@/lib/site-data";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function BowlIsHero() {
  const [active, setActive] = useState(0);
  const current = signatureRamen[active];

  return (
    <section id="ramen" className="relative bg-ink-950 py-24 text-paper-50 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-12">
        <Reveal>
          <span className="eyebrow text-yellow-500">
            <span className="font-jp text-base">丼</span> Signature Ramen
          </span>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-3xl font-display text-[13vw] font-black uppercase leading-[0.85] tracking-tight sm:text-6xl lg:text-7xl">
              The bowl is
              <br />
              <span className="text-yellow-500">the hero.</span>
            </h2>
            <p className="max-w-xs text-sm text-paper-50/50">
              Fünf Bowls, für die Takumi steht. Die komplette Karte — inklusive Vorspeisen, Don und
              Ausführungen ohne Schwein — folgt weiter unten.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <div className="sticky top-28 aspect-square w-full overflow-hidden rounded-sm bg-ink-800">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={`${current.name} Ramen bei Takumi Dortmund`}
                  loading="lazy"
                  decoding="async"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 h-full w-full object-cover photo-cinematic"
                />
              </AnimatePresence>
              <div className="grain absolute inset-0" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
              <span className="font-jp absolute bottom-6 right-6 text-4xl text-paper-50/80">{current.jp}</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ul className="flex flex-col divide-y divide-paper-50/10 border-y border-paper-50/10">
              {signatureRamen.map((item, i) => {
                const isActive = i === active;
                return (
                  <li key={item.name}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      className="group flex w-full items-start gap-5 py-6 text-left transition-colors sm:gap-7 sm:py-8"
                    >
                      <motion.span
                        animate={{ scale: isActive ? 1.1 : 1, x: isActive ? 3 : 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className={`tnum font-display text-3xl font-bold transition-colors sm:text-4xl ${
                          isActive ? "text-yellow-500" : "text-paper-50/25"
                        }`}
                      >
                        {item.n}
                      </motion.span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h3
                            className={`font-display text-2xl font-bold uppercase tracking-wide transition-colors sm:text-3xl ${
                              isActive ? "text-paper-50" : "text-paper-50/40"
                            }`}
                          >
                            {item.name}
                          </h3>
                          <span className={`tnum text-lg font-semibold ${isActive ? "text-yellow-500" : "text-paper-50/30"}`}>
                            {item.price}
                          </span>
                        </div>
                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: "auto", marginTop: 10 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                              className="max-w-md overflow-hidden text-sm leading-relaxed text-paper-50/60"
                            >
                              {item.desc}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>

            <MagneticButton href="#menu" variant="outline-light" className="mt-8">
              Gesamte Speisekarte
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
