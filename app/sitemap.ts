import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cofounds.app";

    const posts = getAllPosts();

    const postsUrls = posts.map((post) => ({
        url: `${baseUrl}/news/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        ...postsUrls,
    ];
}