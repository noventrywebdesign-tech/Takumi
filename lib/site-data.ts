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
    entityPlaceholder: "wird nachgereicht",
    responsibleForContent: "Geschäftsführung Takumi Dortmund",
    ustIdPlaceholder: "wird nachgereicht",
    registerPlaceholder: "wird nachgereicht",
  },
  mapsEmbedSrc: "https://www.google.com/maps?q=Br%C3%BCckstra%C3%9Fe+32,+44135+Dortmund&output=embed",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Br%C3%BCckstra%C3%9Fe+32+44135+Dortmund",
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

export type MenuItem = { num: number; name: string; price: string; tag?: "vegan" | "veggie"; note?: string };
export type MenuCategory = { id: string; label: string; jp: string; items: MenuItem[] };

/** Full menu, verified item-for-item (numbers, names, prices) against https://takumi-dortmund.menueat.net/menu */
export const menu: MenuCategory[] = [
  {
    id: "vorspeisen",
    label: "Vorspeisen",
    jp: "前菜",
    items: [
      { num: 59, name: "Veggie Gyoza", price: "6,80 €", tag: "veggie" },
      { num: 60, name: "Gyoza", price: "6,50 €" },
      { num: 61, name: "Karaage (7 Stück)", price: "7,80 €" },
      { num: 62, name: "Karaage (10 Stück)", price: "13,50 €" },
      { num: 63, name: "Takoyaki", price: "6,50 €" },
      { num: 64, name: "Toriteri", price: "7,50 €" },
      { num: 640, name: "Toriteri Full", price: "13,00 €" },
      { num: 65, name: "Frittierte Jumbo Garnelen", price: "6,00 €" },
      { num: 66, name: "Kimchi", price: "5,20 €", tag: "vegan" },
    ],
  },
  {
    id: "ramen-schwein",
    label: "Ramen mit Schwein",
    jp: "豚肉",
    items: [
      { num: 1, name: "Shio Ramen", price: "13,80 €" },
      { num: 2, name: "Shoyu Ramen", price: "13,80 €" },
      { num: 3, name: "Miso Ramen", price: "14,80 €" },
      { num: 4, name: "Shio Ramen mit Butter", price: "15,80 €" },
      { num: 5, name: "Shoyu Ramen mit Butter", price: "15,80 €" },
      { num: 6, name: "Miso Ramen mit Butter", price: "16,80 €" },
      { num: 7, name: "Traditionelle Tokyo Shoyu Ramen", price: "16,80 €" },
      { num: 8, name: "Oro-Chon Ramen", price: "15,80 €" },
      { num: 10, name: "Ebi Tako Tan Tan Men", price: "20,80 €" },
      { num: 11, name: "Karaage Tan Men", price: "19,80 €" },
      { num: 12, name: "Tan Tan Men", price: "17,80 €" },
      { num: 20, name: "Special Ramen Shoyu", price: "20,80 €" },
      { num: 21, name: "Special Ramen Miso", price: "21,80 €" },
    ],
  },
  {
    id: "ramen-ohne-schwein",
    label: "Ramen ohne Schwein",
    jp: "野菜",
    items: [
      { num: 9, name: "Surf and Turf Takumi Style Spicy Miso Ramen", price: "19,80 €" },
      { num: 13, name: "Gyoza und Karaage Miso Ramen", price: "19,80 €" },
      { num: 14, name: "Karaage Miso Ramen", price: "17,80 €" },
      { num: 15, name: "Teriyaki Miso Ramen", price: "17,80 €" },
      { num: 22, name: "Special Ramen Spicy Curry", price: "21,80 €" },
    ],
  },
  {
    id: "don",
    label: "Don",
    jp: "丼",
    items: [
      { num: 70, name: "Buta Karubi Don", price: "8,80 €" },
      { num: 71, name: "Karaage Don", price: "8,80 €" },
      { num: 72, name: "Gyoza Karaage Don", price: "8,80 €" },
      { num: 73, name: "Teriyaki Don", price: "8,50 €" },
      { num: 74, name: "Veggie Kakiage Don", price: "8,50 €", tag: "veggie" },
      { num: 75, name: "Vegan Tofu und Gyoza Don", price: "8,80 €", tag: "vegan" },
    ],
  },
  {
    id: "getraenke-dessert",
    label: "Getränke & Dessert",
    jp: "甘味",
    items: [
      { num: 94, name: "Yuzuka", price: "4,00 €" },
      { num: 78, name: "Yuzu Sherbet", price: "4,30 €" },
    ],
  },
];

/** Real, attributed reviews — coolibri.de restaurant listing. */
export const reviews = [
  {
    name: "Aleksandar",
    date: "12.10.2025",
    rating: 10,
    text: "Dieser Ramen-Laden ist ein echter Geheimtipp! Schon beim ersten Bissen merkt man, dass hier alles frisch und mit Leidenschaft zubereitet wird.",
  },
  {
    name: "Panda",
    date: "30.09.2025",
    rating: 9,
    text: "Die Qualität des Essens war großartig, sowohl die Shio- als auch die Miso-Basen schmeckten ziemlich gleich wie in Japan.",
  },
  {
    name: "Kristina",
    date: "12.10.2025",
    rating: 10,
    text: "Ich war total begeistert von meinem Besuch in diesem Ramen-Laden! Schon beim Betreten merkt man, dass hier mit viel Liebe zum Detail gekocht wird.",
  },
  {
    name: "Rose",
    date: "11.10.2025",
    rating: 9,
    text: "Ich war heute am Samstag in Dortmund und mir wurde das Takumi Restaurant empfohlen — die Ramen waren verdammt gut.",
  },
  {
    name: "Kathi",
    date: "29.09.2025",
    rating: 9,
    text: "Ein sehr schönes, authentisches Restaurant. Das Personal ist sehr aufmerksam und freundlich.",
  },
];

export const reviewStats = { score: "8,5", of: "10", count: 348, source: "coolibri.de" };

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
