import { company, hours, navigation } from "@/lib/site-data";
import Monogram from "@/components/ui/Monogram";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-paper-100">
      <div className="mx-auto max-w-[92rem] px-6 pb-12 pt-20 lg:px-12 lg:pt-28">
        <div className="flex flex-col justify-between gap-14 border-b border-paper-50/10 pb-16 lg:flex-row lg:items-end">
          <div>
            <Monogram className="h-12 w-12 text-xl text-yellow-500" />
            <h2 className="mt-6 font-display text-[16vw] font-black uppercase leading-[0.82] tracking-tight text-paper-50 sm:text-[10vw] lg:text-[7.5vw]">
              Takumi
            </h2>
            <p className="mt-4 font-display text-lg font-bold uppercase tracking-[0.1em] text-yellow-500 sm:text-xl">
              No Ramen No Life.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3 lg:gap-16">
            <div>
              <span className="eyebrow text-paper-50/40">Adresse</span>
              <address className="mt-4 not-italic leading-relaxed text-paper-100/85">
                {company.address.street}
                <br />
                {company.address.zipCity}
              </address>
              <a
                href={company.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-yellow-500 underline-offset-4 hover:underline"
              >
                Route öffnen
              </a>
            </div>

            <div>
              <span className="eyebrow text-paper-50/40">Kontakt</span>
              <div className="mt-4 flex flex-col gap-2 text-paper-100/85">
                <a href={`tel:${company.phoneHref}`} className="hover:text-yellow-500">
                  {company.phone}
                </a>
                <a href={company.instagram} target="_blank" rel="noreferrer" className="hover:text-yellow-500">
                  {company.instagramHandle}
                </a>
              </div>
            </div>

            <div>
              <span className="eyebrow text-paper-50/40">Öffnungszeiten</span>
              <ul className="mt-4 flex flex-col gap-2 text-paper-100/85">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6 tnum">
                    <span className="text-paper-100/55">{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-8 pt-10 sm:flex-row sm:items-center">
          <p className="text-xs text-paper-100/40">
            © {new Date().getFullYear()} {company.fullName}. Alle Rechte vorbehalten.
          </p>

          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.12em] text-paper-100/55">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-yellow-500">
                {item.label}
              </a>
            ))}
            <a href="/impressum" className="hover:text-yellow-500">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-yellow-500">
              Datenschutz
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
