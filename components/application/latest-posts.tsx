import { getLatestPosts } from "@/lib/blog";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export async function LatestPosts() {
    const posts = getLatestPosts();

    return (
        <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto text-center">
                <h2 className="text-balance font-bold text-4xl xl:text-5xl">Les dernières nouvelles de CoFound</h2>
                <p className="text-muted-foreground mt-4 text-balance">Découvrez nos updates, nos lancements et les coulisses du développement de la plateforme.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 md:mt-16">
                {posts.map((post) => (
                    <Card key={post.title} className="overflow-hidden pt-0">
                        <div className="aspect-video w-full">
                            <Link 
                                href={`${process.env.NEXT_PUBLIC_LANDING_URL}/news/${post.slug}`}
                                className="fade-in block transition-opacity duration-200 hover:opacity-70"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-full w-full object-cover object-center"
                                />
                            </Link>
                        </div>
                        <CardHeader>
                            <h3 className="text-lg font-semibold hover:underline">
                                <Link
                                    href={`${process.env.NEXT_PUBLIC_LANDING_URL}/news/${post.slug}`}
                                >
                                    {post.title}
                                </Link>
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {new Date(post.date).toLocaleDateString("fr-FR", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })}
                            </p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground line-clamp-3">{post.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Link
                                href={`${process.env.NEXT_PUBLIC_LANDING_URL}/news/${post.slug}`}
                                className="flex items-center text-foreground hover:underline"
                            >
                                En savoir plus
                                <ArrowRight className="ml-2 size-4" />
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}