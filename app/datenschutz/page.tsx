import type { Metadata } from "next";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
};

export default function Datenschutz() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-32 pt-40 lg:px-0 lg:pt-48">
      <span className="eyebrow text-yellow-600">Rechtliches</span>
      <h1 className="mt-4 font-display text-4xl font-bold uppercase text-ink-900 sm:text-5xl">Datenschutzerklärung</h1>

      <div className="mt-14 flex flex-col gap-10 text-[1.02rem] leading-relaxed text-ink-700">
        <section>
          <h2 className="eyebrow mb-4 text-ink-400">1. Datenschutz auf einen Blick</h2>
          <p className="text-ink-500">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
            sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="eyebrow mb-4 text-ink-400">2. Verantwortliche Stelle</h2>
          <p className="text-ink-500">Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <address className="mt-3 not-italic">
            <em className="text-ink-400">[{company.legal.entityPlaceholder} — Betreiberfirma]</em>
            <br />
            {company.address.street}
            <br />
            {company.address.zipCity}
            <br />
            Telefon: {company.phone}
          </address>
        </section>

        <section>
          <h2 className="eyebrow mb-4 text-ink-400">3. Ihre Rechte</h2>
          <p className="text-ink-500">
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck
            Ihrer gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung, Sperrung,
            Löschung oder Einschränkung der Verarbeitung dieser Daten. Ebenso steht Ihnen ein Recht auf
            Datenübertragbarkeit sowie ein Widerspruchsrecht gegen die Verarbeitung zu. Hierzu und zu
            weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum
            angegebenen Adresse an uns wenden. Ihnen steht zudem ein Beschwerderecht bei der zuständigen
            Aufsichtsbehörde zu.
          </p>
        </section>

        <section>
          <h2 className="eyebrow mb-4 text-ink-400">4. SSL-/TLS-Verschlüsselung</h2>
          <p className="text-ink-500">
            Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte
            Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“
            wechselt.
          </p>
        </section>

        <section>
          <h2 className="eyebrow mb-4 text-ink-400">5. Datenerfassung auf dieser Website</h2>
          <h3 className="mt-2 font-display text-xl font-bold text-ink-900">Server-Log-Dateien</h3>
          <p className="mt-2 text-ink-500">
            Der Hosting-Anbieter dieser Website erhebt und speichert automatisch Informationen in
            sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt (Browsertyp,
            Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage,
            IP-Adresse). Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
          </p>

          <h3 className="mt-6 font-display text-xl font-bold text-ink-900">Google Maps</h3>
          <p className="mt-2 text-ink-500">
            Zur Darstellung unseres Standorts binden wir Karten des Dienstes Google Maps ein, betrieben
            von Google Ireland Limited. Beim Aufruf der entsprechenden Seite wird eine Verbindung zu
            Servern von Google hergestellt, wobei Google auch ohne Interaktion Daten wie Ihre IP-Adresse
            erheben kann. Weitere Informationen entnehmen Sie der Datenschutzerklärung von Google.
          </p>

          <h3 className="mt-6 font-display text-xl font-bold text-ink-900">Externe Lieferplattformen &amp; Instagram</h3>
          <p className="mt-2 text-ink-500">
            Diese Website verlinkt auf externe Dienste (Lieferando, Uber Eats, Wolt, Instagram). Beim
            Klick auf einen entsprechenden Link verlassen Sie unsere Website; für die Datenverarbeitung
            auf diesen externen Seiten gelten deren eigene Datenschutzerklärungen.
          </p>
        </section>

        <section>
          <h2 className="eyebrow mb-4 text-ink-400">6. Hosting &amp; Schriftarten</h2>
          <p className="text-ink-500">
            Die auf dieser Website verwendeten Schriftarten (Google Fonts) werden lokal beim Bau der
            Website eingebunden und beim Seitenaufruf ausschließlich von unserem eigenen Server
            ausgeliefert. Es findet dabei keine Verbindung zu Servern von Google statt.
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
