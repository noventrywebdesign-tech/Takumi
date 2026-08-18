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

      <div className="mt-14 flex flex-col gap-10 text-[1.02rem] leading-relaxed text-ink-700">
        <section>
          <h2 className="eyebrow mb-4 text-ink-400">Angaben gemäß § 5 TMG</h2>
          <address className="not-italic">
            <em className="text-ink-400">[{company.legal.entityPlaceholder} — Betreiberfirma]</em>
            <br />
            {company.address.street}
            <br />
            {company.address.zipCity}
            <br />
            Deutschland
          </address>
        </section>

        <section>
          <h2 className="eyebrow mb-4 text-ink-400">Kontakt</h2>
          <p>
            Telefon:{" "}
            <a href={`tel:${company.phoneHref}`} className="text-yellow-600 hover:text-yellow-700">
              {company.phone}
            </a>
          </p>
        </section>

        <section>
          <h2 className="eyebrow mb-4 text-ink-400">Umsatzsteuer-Identifikationsnummer</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{" "}
            <em className="text-ink-400">[{company.legal.ustIdPlaceholder}]</em>
          </p>
        </section>

        <section>
          <h2 className="eyebrow mb-4 text-ink-400">Handelsregister</h2>
          <p>
            Registereintrag: <em className="text-ink-400">[{company.legal.registerPlaceholder}]</em>
          </p>
        </section>

        <section>
          <h2 className="eyebrow mb-4 text-ink-400">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            {company.legal.responsibleForContent}
            <br />
            {company.address.street}
            <br />
            {company.address.zipCity}
          </p>
        </section>

        <section>
          <h2 className="eyebrow mb-4 text-ink-400">Haftung für Inhalte</h2>
          <p className="text-ink-500">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
            den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
            oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
            entfernen.
          </p>
        </section>

        <section>
          <h2 className="eyebrow mb-4 text-ink-400">Haftung für Links</h2>
          <p className="text-ink-500">
            Unser Angebot enthält Links zu externen Webseiten Dritter (u. a. Lieferplattformen, Google
            Maps, Instagram), auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
            der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="eyebrow mb-4 text-ink-400">Urheberrecht</h2>
          <p className="text-ink-500">
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
            deutschen Urheberrecht. Abbildungen des Restaurants und der Speisen sind urheberrechtlich
            geschützt.
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
