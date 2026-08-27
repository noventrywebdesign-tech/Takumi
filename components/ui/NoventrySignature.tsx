import Image from "next/image";

/**
 * Fixed, dezente Noventry-Signatur unten rechts — zeigt im Ruhezustand nur die Marke,
 * erweitert sich bei Hover/Focus zu "Website by Noventry". Reiner CSS-Effekt (max-width +
 * opacity transitions über group-hover/group-focus-visible), keine zusätzliche JS-Logik
 * oder Library nötig — bleibt leichtgewichtig und funktioniert identisch mit Tastatur-Fokus.
 * Auf Touch-Geräten führt ein Tap direkt zur Noventry-Seite (kein Zwei-Schritt-Tap-Zustand,
 * bleibt so ein echter, sofort aktivierbarer Link für Screenreader/Tastatur).
 */
export default function NoventrySignature() {
  return (
    <a
      href="https://www.noventrywebdesign.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Website by Noventry – öffnet die Noventry-Webseite in einem neuen Tab"
      className="group fixed right-3.5 bottom-3.5 z-[60] flex h-12 items-center overflow-hidden rounded-full border border-paper-50/15 bg-ink-950/75 shadow-lg shadow-ink-950/50 backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_0_20px_-4px_var(--color-yellow-500)] focus-visible:shadow-[0_0_20px_-4px_var(--color-yellow-500)] sm:right-5 sm:bottom-5 sm:h-14"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14">
        <Image
          src="/noventry-mark.png"
          alt=""
          aria-hidden="true"
          width={24}
          height={20}
          className="h-5 w-5 object-contain sm:h-6 sm:w-6"
        />
      </span>
      <span className="max-w-0 overflow-hidden transition-[max-width] duration-300 ease-out motion-reduce:transition-none group-hover:max-w-[11rem] group-focus-visible:max-w-[11rem]">
        <span className="flex flex-col gap-0.5 py-1 pr-5 whitespace-nowrap opacity-0 transition-opacity duration-300 delay-75 motion-reduce:transition-none group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="text-[0.66rem] font-bold tracking-[0.09em] text-paper-50 uppercase">Website by Noventry</span>
          <span className="text-[0.56rem] tracking-[0.16em] text-paper-50/45 uppercase">Webdesign</span>
        </span>
      </span>
    </a>
  );
}
