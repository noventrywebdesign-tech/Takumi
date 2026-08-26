"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { gallery, company } from "@/lib/site-data";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { useViewportSafe } from "@/lib/use-viewport-safe";

function GalleryTile({ img, className, delay }: { img: (typeof gallery)[number]; className: string; delay: number }) {
  const { ref, entered, markEntered } = useViewportSafe<HTMLDivElement>();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={entered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
      onViewportEnter={markEntered}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(min-width: 1024px) 23vw, (min-width: 640px) 25vw, 50vw"
        loading="lazy"
        className="object-cover photo-cinematic transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
      />
      <div className="absolute inset-0 bg-ink-950/0 transition-colors duration-500 group-hover:bg-ink-950/25" />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <span className="stamp-ring px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.25em] text-paper-50">
          View
        </span>
      </span>
    </motion.div>
  );
}

// Each span is matched to its image's native aspect ratio (see lib/site-data.ts `gallery` order) —
// portrait sources get tall cells, landscape sources get wide cells, so object-cover never has to
// crop away most of the frame to fit a mismatched box.
const spans = [
  "col-span-1 row-span-2", // signage-detail — tall portrait source
  "col-span-1 row-span-2", // karaage-kirin-beer — tall portrait source
  "col-span-2 row-span-1", // takoyaki-closeup — wide landscape
  "col-span-1 row-span-1", // gyoza-teriyaki-plate — landscape
  "col-span-2 row-span-2", // sakura-interior — landscape, big feature tile
  "col-span-1 row-span-1", // karaage-closeup-2 — landscape
  "col-span-1 row-span-1", // ramen-miso-hero — near-square
  "col-span-1 row-span-1", // ramen-vegetarian — landscape
  "col-span-1 row-span-1", // ramen-bowls-table — portrait-ish
];

export default function InstagramGallery() {
  return (
    <section id="instagram" className="relative bg-paper-100 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-12">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="eyebrow text-yellow-600">
              <span className="font-jp text-base">写真</span> Aus Dortmund, mit Ramen
            </span>
            <h2 className="mt-6 font-display text-[7vw] font-black uppercase leading-[0.85] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
              {company.instagramHandle}
            </h2>
          </div>
          <MagneticButton href={company.instagram} target="_blank" variant="outline">
            Auf Instagram folgen
          </MagneticButton>
        </Reveal>

        <div className="mt-14 grid grid-flow-dense grid-cols-2 auto-rows-[150px] gap-3 sm:grid-cols-4 sm:auto-rows-[200px] lg:auto-rows-[220px]">
          {gallery.map((img, i) => (
            <GalleryTile
              key={img.src}
              img={img}
              delay={(i % 4) * 0.06}
              className={`group relative overflow-hidden rounded-sm ${spans[i % spans.length]}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
