import { MetadataRoute } from "next";
import { storiesData } from "./stories/[slug]/page";
import { getBlogPosts } from "@/utils/markdown";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unboxxbusiness.live";

  // Static routes
  const staticRoutes = [
    "",
    "/solutions",
    "/stories",
    "/industries",
    "/contact",
    "/privacy",
    "/terms",
    "/refund",
    "/blog",
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic story routes
  const storyUrls = Object.keys(storiesData).map((slug) => ({
    url: `${baseUrl}/stories/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic blog routes
  const blogPosts = getBlogPosts();
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...storyUrls, ...blogUrls];
}
