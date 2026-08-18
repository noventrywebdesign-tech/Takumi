"use client";

import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { delivery } from "@/lib/site-data";

export default function RamenAtHome() {
  return (
    <section className="relative bg-ink-900 py-20 text-paper-50 sm:py-24">
      <div className="mx-auto flex max-w-[92rem] flex-col items-center gap-10 px-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <Reveal>
          <span className="eyebrow justify-center text-yellow-500 lg:justify-start">
            <span className="font-jp text-base">出前</span> Lieferung
          </span>
          <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl">
            Ramen at Home.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-3">
          {delivery.map((d) => (
            <MagneticButton key={d.name} href={d.href} target="_blank" variant="outline-light">
              {d.name}
            </MagneticButton>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
