"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { company, hours } from "@/lib/site-data";
import { useViewportSafe } from "@/lib/use-viewport-safe";

export default function Anfahrt() {
  const bannerReveal = useViewportSafe<HTMLDivElement>();
  return (
    <section id="anfahrt" className="relative bg-paper-50 py-24 sm:py-32 lg:py-40">
      <Reveal className="mx-auto mb-14 max-w-[92rem] px-6 lg:px-12">
        <div className="relative aspect-[8/1] w-full overflow-hidden rounded-sm sm:aspect-[10/1]">
          <motion.div
            ref={bannerReveal.ref}
            initial={{ scale: 1.08 }}
            animate={{ scale: bannerReveal.entered ? 1 : 1.08 }}
            onViewportEnter={bannerReveal.markEntered}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src="/images/exterior/storefront-signage.jpg"
              alt="Das Takumi-Ladenschild an der Brückstraße in Dortmund"
              fill
              sizes="(min-width: 1024px) 92rem, 100vw"
              loading="lazy"
              className="object-cover photo-cinematic"
            />
          </motion.div>
        </div>
      </Reveal>

      <div className="mx-auto grid max-w-[92rem] grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-5">
          <span className="eyebrow text-yellow-600">
            <span className="font-jp text-base">案内</span> Anfahrt
          </span>
          <h2 className="mt-6 font-display text-[10vw] font-black uppercase leading-[0.82] tracking-tight text-ink-900 sm:text-6xl lg:text-6xl">
            <TextReveal text="Dortmund" />
            <br />
            <TextReveal text="Brückstraße 32." delay={0.15} className="text-yellow-500" />
          </h2>

          <Reveal delay={0.2} className="mt-10 flex flex-col gap-8">
            <div>
              <span className="eyebrow text-ink-400">Öffnungszeiten</span>
              <ul className="mt-4 flex flex-col gap-2 text-lg">
                {hours.map((h) => (
                  <li key={h.day} className="tnum flex justify-between gap-8 border-b border-ink-900/8 pb-2">
                    <span className="text-ink-500">{h.day}</span>
                    <span className="font-semibold text-ink-900">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <MagneticButton href={company.mapsLink} target="_blank" variant="solid">
                Route mit Google Maps
              </MagneticButton>
              <MagneticButton href={`tel:${company.phoneHref}`} variant="outline">
                {company.phone} anrufen
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative min-h-[420px] overflow-hidden rounded-sm lg:col-span-7">
          <iframe
            title="Takumi Dortmund auf Google Maps"
            src={company.mapsEmbedSrc}
            className="absolute inset-0 h-full w-full grayscale-[15%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
