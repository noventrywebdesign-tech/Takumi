"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import type { ElementType } from "react";

type TextRevealProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  once?: boolean;
};

/**
 * Word-by-word mask reveal — for short headline-length strings only (rule of
 * thumb: under ~10 words). Framer Motion chokes on many simultaneous per-word
 * whileInView observers, so body-length text should use <Reveal> instead.
 * Spaces render as sibling text nodes outside the masked spans, not inside —
 * a trailing space inside an inline-block mask collapses as CSS end-of-line
 * whitespace and words visually run together.
 */
export default function TextReveal({ text, as = "span", className, delay = 0, once = true }: TextRevealProps) {
  const words = text.split(" ");
  const Tag = motion.create(as as "span");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden align-top pb-[0.12em]">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.85, delay: delay + i * 0.055, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </Tag>
  );
}
