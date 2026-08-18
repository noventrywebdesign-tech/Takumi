"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navigation, company } from "@/lib/site-data";
import Monogram from "@/components/ui/Monogram";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // "dark" means the header chrome (logo/links/burger) renders in dark ink-on-paper —
  // true once scrolled past the hero, always false while the fullscreen takeover is open
  // (that overlay is dark itself, so the bar on top of it stays light for contrast).
  const dark = scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        !open && dark ? "border-ink-900/10 bg-paper-50/95 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[92rem] items-center justify-between px-6 transition-[height] duration-500 ease-out lg:px-12 ${
          dark ? "h-16" : "h-20"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- plain anchor on purpose: static export is opened outside a guaranteed Next.js router root */}
        <a href="/" className="relative z-10 flex items-center gap-3" onClick={() => setOpen(false)}>
          <Monogram
            className={`h-9 w-9 text-[0.95rem] transition-colors duration-500 ${
              dark ? "text-ink-900" : "text-paper-50"
            }`}
          />
          <span
            className={`hidden font-display text-xl font-bold uppercase leading-none tracking-wide transition-colors duration-500 sm:block ${
              dark ? "text-ink-900" : "text-paper-50"
            }`}
          >
            {company.name}
            <span
              className={`block font-body text-[0.6rem] font-semibold uppercase tracking-[0.3em] transition-colors duration-500 ${
                dark ? "text-yellow-600" : "text-yellow-400"
              }`}
            >
              Dortmund
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[0.76rem] font-bold uppercase tracking-[0.14em] transition-colors ${
                dark ? "text-ink-700 hover:text-yellow-600" : "text-paper-50/85 hover:text-yellow-400"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-6 py-2.5 text-[0.76rem] font-bold uppercase tracking-[0.18em] text-ink-950 transition-colors hover:bg-yellow-400"
          >
            Menu
          </a>
        </div>

        <button
          type="button"
          className={`relative z-10 flex h-10 w-10 items-center justify-center lg:hidden ${
            open ? "text-paper-50" : dark ? "text-ink-900" : "text-paper-50"
          }`}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-px w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[14px] h-px w-5 bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Fullscreen takeover menu — dark, editorial, not a generic white dropdown box */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile Navigation"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-0 flex h-[100svh] flex-col justify-between overflow-hidden bg-ink-950 px-6 pb-10 pt-28 lg:hidden"
          >
            <span aria-hidden className="font-jp pointer-events-none absolute -right-4 top-24 text-[9rem] text-paper-50/[0.04]">
              匠
            </span>

            <ul className="flex flex-col">
              {navigation.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-paper-50/10"
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-4 font-display text-4xl font-bold uppercase tracking-tight text-paper-50 transition-colors active:text-yellow-500"
                  >
                    <span className="tnum text-sm font-body font-semibold text-yellow-500">0{i + 1}</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-5"
            >
              <a
                href="#menu"
                onClick={() => setOpen(false)}
                className="inline-flex w-fit items-center rounded-full bg-yellow-500 px-7 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-ink-950"
              >
                Speisekarte ansehen
              </a>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.1em] text-paper-50/45">
                <a href={`tel:${company.phoneHref}`} className="hover:text-yellow-500">
                  {company.phone}
                </a>
                <a href={company.instagram} target="_blank" rel="noreferrer" className="hover:text-yellow-500">
                  {company.instagramHandle}
                </a>
                <span>{company.address.street} · Dortmund</span>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
