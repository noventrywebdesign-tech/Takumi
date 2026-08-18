"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import { company } from "@/lib/site-data";
import { useIsDesktop } from "@/lib/use-is-desktop";

export default function RamenAusSapporo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const isDesktop = useIsDesktop();
  const y = useTransform(scrollYProgress, [0, 1], isDesktop ? ["-6%", "6%"] : ["0%", "0%"]);

  return (
    <section id="story" ref={ref} className="relative overflow-hidden bg-paper-50 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[92rem] grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <div className="lg:col-span-7 lg:col-start-1">
          <span className="eyebrow text-yellow-600">
            <span className="font-jp text-base">物語</span> Unsere Geschichte
          </span>

          <h2 className="mt-6 font-display text-[13vw] font-black uppercase leading-[0.85] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
            <TextReveal text="Ramen aus" />
            <br />
            <TextReveal text="Sapporo." delay={0.15} className="text-yellow-500" />
          </h2>

          <Reveal delay={0.1} className="mt-10 max-w-xl">
            <p className="text-lg leading-relaxed text-ink-700">
              {company.founded} eröffnete Haruhiko Saeki in {company.foundedCity} das erste Takumi — mit
              dem Ziel, authentische japanische Ramen-Kultur nach Europa zu bringen. Keine Abkürzungen,
              keine Kompromisse: handgemachte Nudeln, kräftige Brühen und sorgfältig ausgewählte Zutaten,
              zubereitet nach traditionellen Rezepten.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Takumi Dortmund trägt diese Philosophie mitten in die Innenstadt. Unsere Nudeln stammen aus
              Hokkaido, Japans nördlichster Region — dort produziert und unter strengen Bedingungen
              fermentiert. Was hier serviert wird, ist kein Kompromiss für den europäischen Gaumen. Es ist
              japanisches Handwerk.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
            {[
              { jp: "北海道", label: "Hokkaido-Nudeln" },
              { jp: "発酵", label: "Fermentierte Brühen" },
              { jp: "伝統", label: "Traditionelle Rezepte" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={0.2 + i * 0.12} y={14} className="flex items-center gap-3">
                <span className="font-jp text-2xl text-yellow-600">{item.jp}</span>
                <span className="max-w-[8rem] text-xs font-bold uppercase leading-tight tracking-[0.08em] text-ink-500">
                  {item.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-4 lg:col-start-9">
          <Reveal delay={0.15} className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
            <motion.img
              style={{ y }}
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              src="/images/food/shoyu-bokchoy-branded.jpg"
              alt="Shoyu Ramen mit Chashu, Bambussprossen und Pak Choi im Takumi-Bowl mit 麺処匠-Prägung"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-[112%] w-full object-cover photo-cinematic"
            />
          </Reveal>
          <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 items-center justify-center rounded-full bg-yellow-500 sm:flex">
            <span className="font-jp text-3xl text-ink-950">匠</span>
          </div>
        </div>
      </div>
    </section>
  );
}
