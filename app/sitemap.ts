import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://barocompany.com";

  const routes = [
    "",
    "/portfolio",
    "/investment",
    "/policyfunds",
    "/ented",
    "/bizsupport",
    "/notice",
    "/policy",
    "/policy/terms",
    "/policy/privacy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
