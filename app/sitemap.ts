import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.takumi-dortmund.de";
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/impressum`, priority: 0.2 },
    { url: `${base}/datenschutz`, priority: 0.2 },
  ];
}
