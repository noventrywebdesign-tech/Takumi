"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Reveal from "@/components/ui/Reveal";

export default function Itadakimasu() {
  return (
    <section className="relative bg-ink-900 py-24 text-paper-50 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        <span className="eyebrow justify-center text-yellow-500">
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            className="font-jp inline-block text-base"
          >
            頂きます
          </motion.span>
        </span>
        <h2 className="mt-6 font-display text-[9.5vw] font-black uppercase leading-[0.85] tracking-tight text-paper-50 sm:text-7xl lg:text-8xl">
          <TextReveal text="Itadakimasu." />
        </h2>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-2xl">
          <p className="text-xl leading-relaxed text-paper-50/75 sm:text-2xl">
            Der Duft der Brühe, bevor die Schüssel den Tisch erreicht. Das leise Klappern aus der offenen
            Küche. Dampf, der aufsteigt und das Gesicht wärmt, noch bevor die Stäbchen die Nudeln
            berühren.
          </p>
          <p className="mt-6 text-xl leading-relaxed text-paper-50/75 sm:text-2xl">
            Ramen bei Takumi ist kein langes Menü. Es ist ein einziger, konzentrierter Moment — heiß,
            ehrlich, sofort.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
