import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "/",
    "/about",
    "/services",
    "/services/engine-building",
    "/services/engine-tuning",
    "/services/chassis-dyno",
    "/services/chassis-modifications",
    "/services/performance-auto-service",
    "/services/brakes",
    "/services/suspension-work",
    "/services/oil-changes",
    "/gallery",
    "/testimonials",
    "/faq",
    "/contact",
    "/thank-you",
    "/privacy-policy",
    "/sitemap",
  ];

  return routes.map((pathname) => ({
    url: `${SITE_URL}${pathname === "/" ? "" : pathname}`,
    lastModified: now,
    changeFrequency:
      pathname === "/" ? "weekly" : pathname.startsWith("/services") ? "monthly" : pathname === "/contact" ? "yearly" : "monthly",
    priority: pathname === "/" ? 1 : pathname === "/services" ? 0.9 : pathname.startsWith("/services/") ? 0.85 : 0.7,
  }));
}

