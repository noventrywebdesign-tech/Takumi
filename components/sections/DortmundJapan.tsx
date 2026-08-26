"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import { useIsDesktop } from "@/lib/use-is-desktop";
import { useViewportSafe } from "@/lib/use-viewport-safe";

export default function DortmundJapan() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const isDesktop = useIsDesktop();
  const yBig = useTransform(scrollYProgress, [0, 1], isDesktop ? ["-6%", "6%"] : ["0%", "0%"]);
  const ySmall = useTransform(scrollYProgress, [0, 1], isDesktop ? ["4%", "-8%"] : ["0%", "0%"]);
  const wideReveal = useViewportSafe<HTMLDivElement>();
  const grid1 = useViewportSafe<HTMLImageElement>();
  const grid2 = useViewportSafe<HTMLImageElement>();
  const grid3 = useViewportSafe<HTMLImageElement>();

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
          ref={wideReveal.ref}
          initial={{ clipPath: "inset(0 0 0 100%)" }}
          animate={{ clipPath: wideReveal.entered ? "inset(0 0 0 0%)" : "inset(0 0 0 100%)" }}
          onViewportEnter={wideReveal.markEntered}
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
              ref={grid1.ref}
              style={{ y: ySmall }}
              initial={{ scale: 1.08 }}
              animate={{ scale: grid1.entered ? 1 : 1.08 }}
              onViewportEnter={grid1.markEntered}
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
              ref={grid2.ref}
              style={{ y: yBig }}
              initial={{ scale: 1.08 }}
              animate={{ scale: grid2.entered ? 1 : 1.08 }}
              onViewportEnter={grid2.markEntered}
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
              ref={grid3.ref}
              style={{ y: ySmall }}
              initial={{ scale: 1.08 }}
              animate={{ scale: grid3.entered ? 1 : 1.08 }}
              onViewportEnter={grid3.markEntered}
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
