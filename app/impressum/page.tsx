import type { Metadata } from "next";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function Impressum() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-32 pt-40 lg:px-0 lg:pt-48">
      <span className="eyebrow text-yellow-600">Rechtliches</span>
      <h1 className="mt-4 font-display text-4xl font-bold uppercase text-ink-900 sm:text-5xl">Impressum</h1>

      <div className="mt-16 flex flex-col gap-12 text-[1.02rem] leading-relaxed text-ink-700 sm:gap-14">
        <section>
          <h2 className="eyebrow mb-4 text-ink-400">Angaben gemäß § 5 DDG</h2>
          <address className="not-italic">
            <em className="text-ink-400">[{company.legal.entityNamePlaceholder}]</em>
            <br />
            {company.address.street}
            <br />
            {company.address.zipCity}
            <br />
            Deutschland
          </address>
        </section>

        <section>
          <h2 className="eyebrow mb-4 text-ink-400">Vertreten durch</h2>
          <p>
            <em className="text-ink-400">[{company.legal.representativePlaceholder}]</em>
          </p>
        </section>

        <section>
          <h2 className="eyebrow mb-4 text-ink-400">Kontakt</h2>
          <p>
            Telefon:{" "}
            <a href={`tel:${company.phoneHref}`} className="text-yellow-600 hover:text-yellow-700">
              {company.phone}
            </a>
            <br />
            E-Mail: <em className="text-ink-400">[{company.legal.emailPlaceholder}]</em>
          </p>
        </section>

        <section>
          <h2 className="eyebrow mb-4 text-ink-400">Umsatzsteuer-Identifikationsnummer</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
            <br />
            <em className="text-ink-400">[{company.legal.ustIdPlaceholder}]</em>
          </p>
        </section>

        <section>
          <h2 className="eyebrow mb-4 text-ink-400">Registerangaben</h2>
          <p>
            Registergericht: <em className="text-ink-400">[{company.legal.registerCourtPlaceholder}]</em>
            <br />
            Registernummer: <em className="text-ink-400">[{company.legal.registerNumberPlaceholder}]</em>
          </p>
        </section>
      </div>

      {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- plain anchor on purpose: static export is opened outside a guaranteed Next.js router root */}
      <a href="/" className="mt-16 inline-block eyebrow text-yellow-600 hover:text-yellow-700">
        Zurück zur Startseite
      </a>
    </main>
  );
}
