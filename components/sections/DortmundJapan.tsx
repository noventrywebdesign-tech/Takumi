"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import { useIsDesktop } from "@/lib/use-is-desktop";

export default function DortmundJapan() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const isDesktop = useIsDesktop();
  const yBig = useTransform(scrollYProgress, [0, 1], isDesktop ? ["-6%", "6%"] : ["0%", "0%"]);
  const ySmall = useTransform(scrollYProgress, [0, 1], isDesktop ? ["4%", "-8%"] : ["0%", "0%"]);

  return (
    <section id="dortmund" ref={ref} className="relative overflow-hidden bg-paper-50 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-12">
        <Reveal>
          <span className="eyebrow text-yellow-600">
            <span className="font-jp text-base">場所</span> Der Ort
          </span>
          <h2 className="mt-6 font-display text-[11vw] font-black uppercase leading-[0.85] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
            <TextReveal text="Dortmund outside." />
            <br />
            <TextReveal text="Japan inside." delay={0.15} className="text-yellow-500" />
          </h2>
        </Reveal>

        <motion.div
          initial={{ clipPath: "inset(0 0 0 100%)" }}
          whileInView={{ clipPath: "inset(0 0 0 0%)" }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="relative mt-16 aspect-[16/9] w-full overflow-hidden rounded-sm sm:aspect-[21/9]"
        >
          <motion.img
            style={{ y: yBig }}
            src="/images/interior/dining-room-wide.jpg"
            alt="Blick von oben auf den Gastraum von Takumi Dortmund mit Gästen, Noren-Vorhängen und Papierlampions"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-[118%] w-full object-cover photo-cinematic"
          />
        </motion.div>

        <div className="relative mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <motion.img
              style={{ y: ySmall }}
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              src="/images/interior/sakura-fenster.jpg"
              alt="Der Kirschblütenbaum am Fenster von Takumi Dortmund, Brückstraße"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-[118%] w-full object-cover photo-cinematic"
            />
          </Reveal>

          <Reveal delay={0.15} className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <motion.img
              style={{ y: yBig }}
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 1.2, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              src="/images/interior/lantern-hallway.jpg"
              alt="Eingangsbereich von Takumi Dortmund mit japanischen Papierlampions und Shoji-Elementen"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-[118%] w-full object-cover photo-cinematic"
            />
          </Reveal>

          <Reveal delay={0.2} className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <motion.img
              style={{ y: ySmall }}
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              src="/images/interior/staircase-branding-wall.jpg"
              alt="Wandgestaltung mit Takumi-Dortmund-Branding an der Treppe im Restaurant"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-[118%] w-full object-cover photo-cinematic"
            />
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-14">
          <p className="max-w-md text-lg leading-relaxed text-ink-700">
            Ein Kirschblütenbaum wächst mitten durch den Raum, Lampions werfen warmes Licht, die offene
            Küche liegt gleich am Eingang.
          </p>
          <p className="max-w-md text-lg leading-relaxed text-ink-700">
            Kein Kulissen-Japan — ein Ort, der nach echtem Sapporo riecht, klingt und schmeckt.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
