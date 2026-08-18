import type { Metadata } from "next";
import { Archivo_Black, Hanken_Grotesk, Yuji_Syuku } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company, reviewStats } from "@/lib/site-data";

const shoulders = Archivo_Black({
  variable: "--font-shoulders",
  subsets: ["latin"],
  weight: "400",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const yuji = Yuji_Syuku({
  variable: "--font-yuji",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.takumi-dortmund.de"),
  title: {
    default: "Takumi Dortmund — Japanisches Ramen aus Sapporo | Brückstraße 32",
    template: "%s — Takumi Dortmund",
  },
  description:
    "Takumi Dortmund: authentisches Ramen aus Sapporo mitten in der Dortmunder Innenstadt. Hokkaido-Nudeln, traditionelle Rezepte, Shio, Shoyu, Miso, Tan Tan Men und Gyoza. Brückstraße 32, 44135 Dortmund.",
  keywords: [
    "Takumi Dortmund",
    "Ramen Dortmund",
    "Japanisches Restaurant Dortmund",
    "Japanische Ramen Dortmund",
    "Sapporo Ramen Dortmund",
    "Brückstraße Restaurant Dortmund",
  ],
  openGraph: {
    title: "Takumi Dortmund — Japanisches Ramen aus Sapporo",
    description: "No Ramen. No Life. Authentisches Sapporo-Ramen mitten in Dortmund — Brückstraße 32.",
    url: "https://www.takumi-dortmund.de",
    siteName: "Takumi Dortmund",
    locale: "de_DE",
    type: "website",
    images: ["/images/food/ramen-miso-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Takumi Dortmund — Japanisches Ramen aus Sapporo",
    description: "No Ramen. No Life. Authentisches Sapporo-Ramen mitten in Dortmund — Brückstraße 32.",
    images: ["/images/food/ramen-miso-hero.jpg"],
  },
  alternates: { canonical: "https://www.takumi-dortmund.de" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: company.fullName,
    servesCuisine: ["Japanese", "Ramen"],
    image: "https://www.takumi-dortmund.de/images/food/ramen-miso-hero.jpg",
    url: "https://www.takumi-dortmund.de",
    menu: "https://www.takumi-dortmund.de/#menu",
    telephone: company.phoneHref,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: "Dortmund",
      postalCode: "44135",
      addressCountry: "DE",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "12:00", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "12:00", closes: "23:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "13:00", closes: "22:00" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewStats.score.replace(",", "."),
      bestRating: "10",
      worstRating: "0",
      ratingCount: String(reviewStats.count),
    },
    sameAs: [company.instagram, company.tripadvisor],
  };

  return (
    <html lang="de">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${shoulders.variable} ${hanken.variable} ${yuji.variable} font-body bg-paper-50 text-ink-900 antialiased`}>
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
