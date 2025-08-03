import { PostPreview } from "@/types";
import { Card } from "../ui/card";
import { ArrowRight } from "lucide-react";
import Link from 'next/link'; // 👈 1. Importer le composant Link
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface BlogCardProps {
    post: PostPreview;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Card className="col-span-12 border-0 bg-transparent shadow-none">
            <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                <div className="sm:col-span-5">
                    <div className="mb-4 md:mb-6">
                        <div className="flex flex-wrap gap-3 text-xs tracking-wider text-muted-foreground uppercase md:gap-5 lg:gap-6">
                            {post.tags?.map((tag) => (
                                <Badge key={tag} className="bg-[#FF00E7]">{tag}</Badge>
                            ))}
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                        <Link
                            href={`/ressources/${post.slug}`}
                            className="hover:underline"
                        >
                            {post.title}
                        </Link>
                    </h3>
                    <p className="mt-4 text-muted-foreground md:mt-5">
                        {post.description}
                    </p>
                    <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                        <span className="text-muted-foreground">CoFound</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">
                            {new Date(post.date).toLocaleDateString('fr-FR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </span>
                    </div>
                    <div className="mt-6 flex items-center space-x-2 md:mt-8">
                        <Link
                            href={`/ressources/${post.slug}`}
                            className="font-semibold hover:underline md:text-base"
                        >
                            <Button className="flex items-center">
                                <span>Lire plus</span>
                                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="order-first sm:order-last sm:col-span-5">
                    <Link href={`/ressources/${post.slug}`} className="block overflow-hidden rounded-lg border">
                        <div className="aspect-video">
                            <img
                                src={post.image}
                                alt={`Illustration pour l'article : ${post.title}`}
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </Card>
    );
}