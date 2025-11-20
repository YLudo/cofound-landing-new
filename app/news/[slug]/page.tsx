import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import NewsHero from "@/components/application/news/news-hero";
import Footer from "@/components/application/footer";
import { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_LANDING_URL || "https://cofounds.app";

const components = {
    Button,
    Alert,
    AlertTitle,
    AlertDescription,
    Card,
};

type Props = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    try {
        const post = getPostBySlug(params.slug);
        if (!post) return {};

        const ogImage = post.image 
            ? post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`
            : `${SITE_URL}/logo.png`;
        
        const canonicalUrl = `${SITE_URL}/news/${post.slug}`;

        return {
            title: post.title,
            description: post.description,
            authors: post.author ? [{ name: post.author }] : undefined,
            keywords: post.tags,
            alternates: {
                canonical: canonicalUrl,
            },
            openGraph: {
                title: post.title,
                description: post.description,
                url: canonicalUrl,
                siteName: 'CoFound',
                locale: 'fr_FR',
                type: 'article',
                publishedTime: post.date,
                authors: post.author ? [post.author] : undefined,
                images: [
                    {
                        url: ogImage,
                        width: 1200,
                        height: 630,
                        alt: post.title,
                    },
                ],
            },
        };
    } catch (error) {
        return {
            title: "Article non trouvé | CoFound",
        };
    }
}

export default function PostPage({ params }: Props) {
    let post;
    try {
        post = getPostBySlug(params.slug);
    } catch (error) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        image: post.image 
            ? post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`
            : undefined,
        datePublished: post.date,
        author: post.author ? {
            '@type': 'Person',
            name: post.author,
        } : undefined,
        publisher: {
            '@type': 'Organization',
            name: 'CoFound',
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/logo.png`
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/news/${post.slug}`
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <NewsHero post={post} />
            <article className="container mx-auto px-4 md:px-8 py-16">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <MDXRemote 
                        source={post.content} 
                        components={components} 
                    />
                </div>
            </article>
            <Footer />
        </>
    );
}