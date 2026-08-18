"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menu } from "@/lib/site-data";
import Reveal from "@/components/ui/Reveal";

export default function Menu() {
  const [activeId, setActiveId] = useState(menu[1].id);
  const category = menu.find((c) => c.id === activeId) ?? menu[0];

  return (
    <section id="menu" className="relative bg-paper-100 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[80rem] px-6 lg:px-12">
        <Reveal className="text-center">
          <span className="eyebrow justify-center text-yellow-600">
            <span className="font-jp text-base">品書き</span> Speisekarte
          </span>
          <h2 className="mt-6 font-display text-[13vw] font-black uppercase leading-[0.85] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
            Die ganze Karte.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="no-scrollbar mt-14 flex justify-start gap-2 overflow-x-auto sm:justify-center sm:flex-wrap">
          {menu.map((c) => {
            const isActive = c.id === activeId;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveId(c.id)}
                className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-[0.06em] transition-colors ${
                  isActive ? "text-paper-50" : "bg-paper-50 text-ink-500 hover:text-ink-900"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="menu-tab-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-ink-900"
                  />
                )}
                <span className="relative">{c.label}</span>
              </button>
            );
          })}
        </Reveal>

        <div className="relative mt-14 min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-3xl"
            >
              <div className="mb-8 flex items-center justify-center gap-3 text-yellow-600">
                <span className="font-jp text-2xl">{category.jp}</span>
              </div>
              <ul className="flex flex-col divide-y divide-ink-900/8">
                {category.items.map((item) => (
                  <li key={item.num} className="flex items-baseline gap-3 py-4 sm:gap-4">
                    <span className="tnum w-8 shrink-0 text-xs font-semibold text-ink-400 sm:w-10">
                      {item.num}
                    </span>
                    <span className="text-[1.05rem] text-ink-800">
                      {item.name}
                      {item.tag && (
                        <span
                          className={`ml-2 align-middle text-[0.62rem] font-bold uppercase tracking-[0.1em] ${
                            item.tag === "vegan" ? "text-yellow-600" : "text-ink-400"
                          }`}
                        >
                          [{item.tag === "vegan" ? "vegan" : "veggie"}]
                        </span>
                      )}
                    </span>
                    <span className="tnum flex-1 border-b border-dotted border-ink-900/15 translate-y-[-0.3em]" aria-hidden />
                    <span className="tnum shrink-0 text-[1.05rem] font-semibold text-ink-900">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.15} className="mt-14 flex flex-col items-center gap-2 text-center text-sm text-ink-500">
          <p>
            <span className="font-bold text-yellow-600">[vegan]</span> vegan ·{" "}
            <span className="font-bold text-ink-400">[veggie]</span> vegetarisch — alle Preise inkl. MwSt.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
