import type { MetadataRoute } from "next";
import { products } from "./products-data";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!origin) return [];
  const paths = [
    "/",
    "/products",
    "/about",
    "/industries",
    "/contact",
    ...products.map((p) => "/products/" + p.slug),
  ];
  return paths.map((path, index) => ({
    url: origin + path,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : index < 5 ? 0.8 : 0.7,
  }));
}
