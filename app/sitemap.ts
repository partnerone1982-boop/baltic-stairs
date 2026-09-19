import type { MetadataRoute } from "next";
import { seoPages, siteUrl } from "./lib/seo";
import { workCatalog } from "./data/workCatalog";
export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages: MetadataRoute.Sitemap = Object.keys(seoPages)
    .filter((path) => path !== "/callback")
    .map((path) => ({
      url: new URL(path, siteUrl).toString(),
    }));

  const projectPages: MetadataRoute.Sitemap = workCatalog.flatMap((group) =>
    group.projects.map((project) => ({
      url: new URL(`/works/${project.id}`, siteUrl).toString(),
    }))
  );

  return [...mainPages, ...projectPages];
}
