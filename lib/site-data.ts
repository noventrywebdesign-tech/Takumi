export const company = {
  name: "Takumi",
  fullName: "Takumi Dortmund",
  claim: "Sapporo Ramen",
  founded: 2007,
  foundedCity: "Düsseldorf",
  founder: "Haruhiko Saeki",
  address: {
    street: "Brückstraße 32",
    zipCity: "44135 Dortmund",
    district: "Innenstadt",
  },
  phone: "0231 54508974",
  phoneHref: "+4923154508974",
  instagram: "https://www.instagram.com/takumi.dortmund/",
  instagramHandle: "@takumi.dortmund",
  tripadvisor:
    "https://www.tripadvisor.com/Restaurant_Review-g187372-d27807338-Reviews-Takumi_Dortmund-Dortmund_North_Rhine_Westphalia.html",
  legal: {
    // Betreiberfirma noch nicht zweifelsfrei verifiziert — vor Launch mit Handelsregisterauszug / Gewerbeschein abgleichen.
    // Wird von der Datenschutz-Seite mitverwendet — Wert nicht ändern, ohne app/datenschutz mitzupflegen.
    entityPlaceholder: "wird nachgereicht",

    // Impressum-spezifische Platzhalter (§5 DDG). Bewusst als beschreibende Platzhalter belassen —
    // keine dieser Angaben recherchieren, vermuten oder erfinden. Werden vom Betreiber nachgereicht.
    entityNamePlaceholder: "VOLLSTÄNDIGER RECHTLICHER UNTERNEHMENSNAME",
    representativePlaceholder: "VOR- UND NACHNAME DER VERTRETUNGSBERECHTIGTEN PERSON",
    emailPlaceholder: "E-MAIL-ADRESSE",
    ustIdPlaceholder: "UST-IDNR.",
    registerCourtPlaceholder: "REGISTERGERICHT",
    registerNumberPlaceholder: "REGISTERNUMMER",
  },
  mapsEmbedSrc: "https://www.google.com/maps?q=Br%C3%BCckstra%C3%9Fe+32,+44135+Dortmund&output=embed",
  // Query includes the business name, not just the address — an address-only query resolves to a
  // bare map pin with no business card (and no reviews), not the actual Takumi listing.
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Takumi+Dortmund+Br%C3%BCckstra%C3%9Fe+32+44135+Dortmund",
} as const;

export const hours = [
  { day: "Montag – Freitag", time: "12:00 – 22:00" },
  { day: "Samstag", time: "12:00 – 23:00" },
  { day: "Sonntag", time: "13:00 – 22:00" },
];

export const navigation = [
  { href: "#ramen", label: "Ramen" },
  { href: "#menu", label: "Menü" },
  { href: "#story", label: "Story" },
  { href: "#dortmund", label: "Dortmund" },
  { href: "#fensterplaetze", label: "Fensterplätze" },
  { href: "#instagram", label: "Instagram" },
  { href: "#anfahrt", label: "Anfahrt" },
];

export const delivery = [
  { name: "Lieferando", href: "https://www.lieferando.de/speisekarte/takumi-japanese-ramen" },
  { name: "Uber Eats", href: "https://www.ubereats.com/de/store/takumi-sapporo-ramen-dortmund/xsSx4_wDVEWaE3mUH5zRQw" },
  { name: "Wolt", href: "https://wolt.com/en/deu/dortmund/restaurant/takumi-dortmund" },
];

/** "The Bowl is the Hero" — 5 signature ramen, base prices from the full menu. */
export const signatureRamen = [
  {
    n: "01",
    jp: "塩",
    name: "Shio",
    base: "Salz-Basis",
    price: "13,80 €",
    desc: "Die klare, helle Grundlage der Sapporo-Küche — eine feine, salzgewürzte Brühe, die den Nudeln und dem Chashu Raum lässt.",
    image: "/images/food/vegan-noodle-lift.jpg",
  },
  {
    n: "02",
    jp: "醤油",
    name: "Shoyu",
    base: "Sojasauce-Basis",
    price: "13,80 €",
    desc: "Herzhaft und tief durch fermentierte Sojasauce, mit feinen Röstnoten — der Klassiker, an dem sich jede Ramen-Küche misst.",
    image: "/images/food/twin-bowls-branded.jpg",
  },
  {
    n: "03",
    jp: "味噌",
    name: "Miso",
    base: "Miso-Basis",
    price: "14,80 €",
    desc: "Sapporos berühmteste Erfindung: eine kräftige, nussig-würzige Brühe aus fermentierter Sojabohnenpaste. Wärmt bis in die Knochen.",
    image: "/images/food/vegi-ramen-mug.jpg",
  },
  {
    n: "04",
    jp: "担々麺",
    name: "Tan Tan Men",
    base: "Sesam & Chili",
    price: "17,80 €",
    desc: "Cremig, nussig, mit spürbarer Schärfe — unsere Interpretation des sichuanesisch inspirierten Ramen-Klassikers.",
    image: "/images/food/gyoza-karaage-ramen-flatlay.jpg",
  },
  {
    n: "05",
    jp: "特製",
    name: "Special Ramen",
    base: "Shoyu oder Miso, reich beladen",
    price: "ab 20,80 €",
    desc: "Die große Ausführung: doppelt Chashu, Ei, Garnelen und Karaage in einer Schüssel, die einen ganzen Tisch füllt.",
    image: "/images/food/tafel-spread.jpg",
  },
];

export type MenuItem = {
  num: number;
  name: string;
  price: string;
  tag?: "vegan" | "veggie" | "hausgemacht";
  /** Renders a small inline divider label right before this item — used to split a long tab into sub-groups. */
  sectionBreak?: string;
};
export type MenuCategory = { id: string; label: string; jp: string; items: MenuItem[] };

/**
 * Full menu, transcribed item-for-item (numbers, names, prices) from the current physical
 * Takumi Dortmund menu card — supersedes any earlier menu source in this project. Dietary
 * tags are only applied where the card itself marks them (a "NO MEAT" icon, or "Veggie" /
 * "Vegi" / "Vegan" in the dish's own printed name) — never inferred from ingredients.
 */
export const menu: MenuCategory[] = [
  {
    id: "vorspeisen",
    label: "Vorspeisen",
    jp: "前菜",
    items: [
      { num: 59, name: "Veggie Gyoza (6 Stück)", price: "5,80 €", tag: "veggie" },
      { num: 60, name: "Gyoza (6 Stück)", price: "5,50 €" },
      { num: 61, name: "Karaage (5 Stück)", price: "6,80 €" },
      { num: 62, name: "Karaage (10 Stück)", price: "12,50 €" },
      { num: 63, name: "Takoyaki (4 Stück)", price: "5,50 €" },
      { num: 64, name: "Toriteri (Half)", price: "6,50 €" },
      { num: 640, name: "Toriteri (Full)", price: "12,00 €" },
      { num: 65, name: "Frittierte Jumbo Garnelen (2 Stück)", price: "5,00 €" },
      { num: 66, name: "Kimchi (scharf)", price: "4,20 €" },
      { num: 67, name: "Gekochte Sojabohnen", price: "4,20 €" },
      { num: 68, name: "Gurken (leicht scharf)", price: "4,20 €" },
      { num: 69, name: "Seetang-Salat", price: "4,20 €" },
    ],
  },
  {
    id: "ramen-schwein",
    label: "Ramen mit Schwein",
    jp: "豚肉",
    items: [
      { num: 1, name: "Shio Ramen", price: "11,80 €" },
      { num: 2, name: "Shoyu Ramen", price: "11,80 €" },
      { num: 3, name: "Miso Ramen", price: "12,80 €" },
      { num: 4, name: "Shio Ramen mit Butter, Mais & Seetang", price: "13,80 €" },
      { num: 5, name: "Shoyu Ramen mit Butter, Mais & Seetang", price: "13,80 €" },
      { num: 6, name: "Miso Ramen mit Butter, Mais & Seetang", price: "14,80 €" },
      { num: 7, name: "Traditionelle Tokyo Shoyu Ramen", price: "14,80 €" },
      { num: 8, name: "Oro-Chon Ramen (scharfe Miso Ramen mit gebratenem Schweinefleisch)", price: "13,80 €" },
      { num: 10, name: "Ebi Tako Tan Tan Men (mit Garnelen & Takoyaki)", price: "18,80 €" },
      { num: 11, name: "Karaage Tan Tan Men", price: "17,80 €" },
      { num: 12, name: "Tan Tan Men", price: "15,80 €" },
      { num: 20, name: "Spezielle Ramen Shoyu (Takumi's Special)", price: "15,80 €" },
      { num: 21, name: "Spezielle Ramen Miso (Takumi's Special)", price: "16,80 €" },
    ],
  },
  {
    id: "ramen-ohne-schwein",
    label: "Ramen ohne Schwein",
    jp: "野菜",
    items: [
      { num: 9, name: "Surf & Turf Takumi Style (scharfe Miso Ramen mit Hähnchen, Garnelen & weichem Ei)", price: "17,80 €" },
      { num: 13, name: "Gyoza & Karaage Miso Ramen (2 Hähnchenstückchen & 3 Gyoza)", price: "17,80 €" },
      { num: 14, name: "Karaage Miso Ramen", price: "15,80 €" },
      { num: 15, name: "Teriyaki Miso Ramen", price: "15,80 €" },
      { num: 16, name: "Vegi Miso Ramen (mit Gemüse-Tempura & Tofu)", price: "17,80 €", tag: "veggie" },
      { num: 17, name: "Vegi Miso Ramen (mit Gemüse-Tempura)", price: "16,80 €", tag: "veggie" },
      { num: 18, name: "Vegi Miso Ramen", price: "14,80 €", tag: "veggie" },
      { num: 19, name: "Spezial Vegan Creamy Potage Ramen", price: "17,80 €", tag: "vegan" },
      { num: 22, name: "Spezielle Ramen Spicy Curry (Signature Ramen)", price: "18,80 €" },
    ],
  },
  {
    id: "don",
    label: "Don",
    jp: "丼",
    items: [
      { num: 70, name: "Buta Karubi Don", price: "7,80 €" },
      { num: 71, name: "Karaage Don (mit Mayo)", price: "7,80 €" },
      { num: 72, name: "Gyoza Karaage Don", price: "7,80 €" },
      { num: 73, name: "Teriyaki Don (mit Mayo)", price: "7,50 €" },
      { num: 74, name: "Veggie Kakiage Don", price: "7,50 €", tag: "veggie" },
      { num: 75, name: "Vegan Tofu & Gyoza Don", price: "7,80 €", tag: "vegan" },
      { num: 76, name: "Gyoza & Karaage Teishoku (6 Gyoza, 5 Karaage, Reis & Misosuppe)", price: "14,80 €" },
    ],
  },
  {
    id: "beilagen",
    label: "Beilagen",
    jp: "トッピング",
    items: [
      { num: 30, name: "Gekochtes Schweinefleisch", price: "3,00 €" },
      { num: 31, name: "Seetang (Wakame)", price: "1,50 €" },
      { num: 32, name: "Nori-Blätter", price: "1,50 €" },
      { num: 33, name: "Butter", price: "1,50 €" },
      { num: 34, name: "Mais", price: "1,50 €" },
      { num: 35, name: "Weiches Ei", price: "1,60 €" },
      { num: 36, name: "Gekochtes Gemüse", price: "1,50 €" },
      { num: 37, name: "Bambussprossen (Menma)", price: "2,00 €" },
      { num: 38, name: "Gemüse Tempura (Kakiage)", price: "2,80 €" },
      { num: 39, name: "Frittierte Takumi-Hähnchenstückchen", price: "4,50 €" },
      { num: 40, name: "Naruto-Fischcake", price: "2,50 €" },
      { num: 41, name: "Lauchzwiebeln", price: "2,00 €" },
      { num: 42, name: "Zuckerschoten", price: "1,00 €" },
      { num: 43, name: "Gegrillte Garnelen", price: "5,00 €" },
      { num: 44, name: "Frittierte Jumbo-Garnelen", price: "5,00 €" },
      { num: 45, name: "Frittierte Tofu", price: "2,20 €" },
      { num: 46, name: "Gemüse-Mix", price: "2,80 €" },
    ],
  },
  {
    id: "getraenke-dessert",
    label: "Getränke & Dessert",
    jp: "飲物・甘味",
    items: [
      { num: 77, name: "Grüntee-Eis", price: "3,50 €" },
      { num: 78, name: "Yuzu-Sherbet", price: "3,80 €" },
      { num: 79, name: "Sesam-Eis", price: "3,50 €" },
      { num: 80, name: "Kirin Bier vom Fass (0,3L)", price: "4,20 €", sectionBreak: "Getränke" },
      { num: 81, name: "Kirin Bier vom Fass (0,5L)", price: "6,20 €" },
      { num: 82, name: "Warmer Grüner Tee", price: "2,50 €" },
      { num: 83, name: "Wasser ohne Kohlensäure (0,25L)", price: "2,50 €" },
      { num: 84, name: "Wasser ohne Kohlensäure (0,70L)", price: "5,80 €" },
      { num: 85, name: "Apfelsaft (0,25L)", price: "3,00 €" },
      { num: 86, name: "Kirin Free 0,0% (0,33L)", price: "3,80 €" },
      { num: 87, name: "Cola (0,33L)", price: "3,20 €" },
      { num: 88, name: "Wasser mit Kohlensäure (0,25L)", price: "2,50 €" },
      { num: 89, name: "Wasser mit Kohlensäure (0,70L)", price: "5,80 €" },
      { num: 90, name: "Apfelschorle (0,3L)", price: "3,20 €" },
      { num: 91, name: "One Cup Sake, warm/kalt (0,1L)", price: "5,40 €" },
      { num: 92, name: "One Cup Sake, warm/kalt (0,2L)", price: "8,50 €" },
      { num: 93, name: "Cola Zero (0,33L)", price: "3,20 €" },
      { num: 94, name: "Yuzuka (0,33L)", price: "4,00 €" },
      { num: 95, name: "Ramune – Japanische Limonade (0,2L)", price: "4,20 €" },
      { num: 96, name: "Rotwein (Glas)", price: "5,80 €" },
      { num: 97, name: "Weißwein (Glas)", price: "5,80 €" },
      { num: 98, name: "Hausgemachter Eistee", price: "4,50 €", tag: "hausgemacht" },
      { num: 99, name: "Reis", price: "2,50 €" },
    ],
  },
];

/**
 * Real guest reviews for Takumi Dortmund (Brückstraße 32, 44135 Dortmund). The aggregate
 * trust badge (score/count) is Google-only. Individual cards are honestly mixed-source —
 * each carries its own real platform, never relabeled as Google when it isn't.
 *
 * Google aggregate rating cross-verified via two independent Google-Places aggregators on
 * 19.08.2026: wanderlog.com/place/details/9893520/takumi-dortmund and
 * rankeat.fr/restaurants/takumi-dortmund-dortmund — both show 4.7/5 tied to this exact
 * address (rankeat explicitly cites "Google Maps" as its source); review counts differ
 * slightly by snapshot date (1.353 vs 1.391), so the count below is deliberately
 * conservative rather than a single stale exact figure.
 *
 * Individual Google quotes are verbatim (incl. original English and typos) from the same
 * Wanderlog listing — nothing paraphrased or invented. One real Google review (Eoghan D.,
 * 2★, 11.12.2025) is not featured; this is a curated trust band, not a full review dump.
 *
 * The three German-language reviews are real Tripadvisor reviews (not Google — Google's own
 * review text could not be scraped directly; JS-rendered + consent-walled), verbatim from
 * tripadvisor.de/Restaurant_Review-g187372-d27807338-Reviews-Takumi_Dortmund-Dortmund_North_Rhine_Westphalia.html
 * on 25.08.2026, minor whitespace-around-punctuation artifacts from text extraction cleaned
 * up (no words changed). Two more real Tripadvisor reviews exist (MACS L., Henning H., both
 * 3★, raising authenticity questions about kitchen staff) and are deliberately not featured
 * here for the same curation reason as the excluded Google 2★ review.
 */
export const googleReviewStats = {
  rating: 4.7,
  outOf: 5,
  countLabel: "1.300+",
};

export type GuestReview = { name: string; isoDate: string; rating: number; text: string; source: "Google" | "Tripadvisor" };

export const guestReviews: GuestReview[] = [
  {
    name: "Ilaudj",
    isoDate: "2025-05-04",
    rating: 4,
    source: "Tripadvisor",
    text: "Ich hatte eine wirklich schöne Erfahrung hier während eines späten Abendessens. Der Ramen war lecker, fleischzart, viel Gemüse im Ramen und die Nudeln waren nicht sehr weich, was ich genossen habe. Ich bin gerade vor einem Monat aus Japan zurückgekommen und ich kann sagen, dass dieser Ramen auch für Japan anständig war.",
  },
  {
    name: "Esi",
    isoDate: "2025-10-13",
    rating: 5,
    source: "Google",
    text: "I didn't expect to be eating the ramen I've seen in Naruto while listening to the Evangelion anime opening, but that's exactly why it deserves 5 stars. The food was amazing too.",
  },
  {
    name: "Lavaza V.",
    isoDate: "2026-05-14",
    rating: 4,
    source: "Tripadvisor",
    text: "Sehr leckere vegane Ramen und perfekt gekühltes Bier. Netter Service. Aber wir mussten etwas länger warten bis wir bestellen konnten.",
  },
  {
    name: "Laura S.",
    isoDate: "2025-05-31",
    rating: 5,
    source: "Google",
    text: "Great place to have a good ramen The decoration is amazing, lovely and quiet (for the street where it is located) The service was really friendly and the food was super tasty Definitely recommend it",
  },
  {
    name: "Alfi",
    isoDate: "2026-03-17",
    rating: 4,
    source: "Tripadvisor",
    text: "Ziemlich eng aber süß eingerichtet. Essen kam schnell. Die Ramen war lecker. Es hat lediglich ein bisschen Würze gefehlt. Preis war in Ordnung.",
  },
  {
    name: "Hùng L.",
    isoDate: "2025-06-12",
    rating: 4,
    source: "Google",
    text: "I quite enjoy Japanese ramen, and I tried a few dishes here. […] Luckily, the waitstaff were still friendly and welcoming.",
  },
  {
    name: "Nurya A.",
    isoDate: "2025-09-17",
    rating: 3,
    source: "Google",
    text: "Good atmosphere good service The rameon was good but we ordered a vegetarische one because other ones included pork soup.. it was delicious but for me it what a little bit undersalted 😅",
  },
];

export const gallery = [
  { src: "/images/interior/signage-detail.jpg", alt: "Das gelbe Takumi-Logo im Schaufenster an der Brückstraße" },
  { src: "/images/food/karaage-kirin-beer.jpg", alt: "Karaage mit einem Kirin Ichiban bei Takumi Dortmund" },
  { src: "/images/food/takoyaki-closeup.jpg", alt: "Takoyaki mit Bonitoflocken und Mayo" },
  { src: "/images/food/gyoza-teriyaki-plate.jpg", alt: "Gyoza und Teriyaki-Hähnchen bei Takumi Dortmund" },
  { src: "/images/interior/sakura-interior.jpg", alt: "Der Sakura-Baum im Innenraum von Takumi Dortmund" },
  { src: "/images/food/karaage-closeup-2.jpg", alt: "Knuspriges Karaage bei Takumi Dortmund" },
  { src: "/images/interior/takumi-sign-wall.jpg", alt: "麺処匠 SAPPORO RAMEN -TAKUMI- DORTMUND Wandschild im Restaurant" },
  { src: "/images/food/ramen-vegetarian.jpg", alt: "Vegetarisches Tofu-Ramen" },
  { src: "/images/food/ramen-bowls-table.jpg", alt: "Zwei Schüsseln Ramen am Tisch" },
];
