"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import { useIsDesktop } from "@/lib/use-is-desktop";

export default function Fensterplaetze() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const isDesktop = useIsDesktop();
  const y = useTransform(scrollYProgress, [0, 1], isDesktop ? ["-5%", "5%"] : ["0%", "0%"]);

  return (
    <section id="fensterplaetze" ref={ref} className="relative overflow-hidden bg-ink-950 py-24 text-paper-50 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[92rem] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <div className="lg:col-span-5 lg:col-start-1 lg:self-center">
          <Reveal>
            <span className="eyebrow text-yellow-500">
              <span className="font-jp text-base">窓際</span> Fensterplätze
            </span>
            <h2 className="mt-6 font-display text-[13vw] font-black uppercase leading-[0.85] tracking-tight text-paper-50 sm:text-5xl lg:text-6xl">
              <TextReveal text="Die liebsten" />
              <br />
              <TextReveal text="Plätze im Haus." delay={0.15} className="text-yellow-500" />
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 max-w-md">
            <p className="text-lg leading-relaxed text-paper-50/70">
              Direkt am Fenster zur Brückstraße, mit Blick auf den Kirschblütenbaum, der mitten durch den
              Raum wächst: die gefragtesten Tische im Haus — meist zuerst vergeben.
            </p>
          </Reveal>
        </div>

        <div className="relative lg:col-span-7 lg:col-start-6">
          <motion.div
            initial={{ clipPath: "inset(0 0 0 100%)" }}
            whileInView={{ clipPath: "inset(0 0 0 0%)" }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-sm"
          >
            <motion.img
              style={{ y }}
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              src="/images/interior/fensterplatz-sakura.jpg"
              alt="Fensterplätze bei Takumi Dortmund mit Blick auf den Kirschblütenbaum und die Brückstraße"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-[112%] w-full object-cover photo-cinematic"
            />
            <div className="grain absolute inset-0" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent" />
          </motion.div>

          <span
            aria-hidden
            className="absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 shadow-lg shadow-ink-950/40 lg:-top-6 lg:-right-6 lg:h-20 lg:w-20"
          >
            <span className="font-jp text-2xl text-ink-950 sm:text-3xl">桜</span>
          </span>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-6 -left-3 aspect-[4/5] w-32 overflow-hidden rounded-sm shadow-2xl shadow-ink-950/60 ring-8 ring-ink-950 lg:-bottom-10 lg:-left-8 lg:w-52"
          >
            <Image
              src="/images/interior/fensterplatz-detail.jpg"
              alt="Tischdetail an einem Fensterplatz bei Takumi Dortmund: Stäbchen, Sojasauce und Orchidee vor der Fensterfront"
              fill
              sizes="(min-width: 1024px) 13rem, 8rem"
              loading="lazy"
              className="object-cover photo-cinematic"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
