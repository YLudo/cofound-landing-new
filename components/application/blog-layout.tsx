import { PostPreview } from "@/types";
import BlogCard from "./blog-card";

interface BlogLayoutProps {
    posts: PostPreview[];
}

export default function BlogLayout({ posts }: BlogLayoutProps) {
    return (
        <section className="py-32">
            <div className="container mx-auto px-4 md:px-8 space-y-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="mb-6 text-3xl font-semibold text-pretty md:text-4xl lg:max-w-3xl">Ressources & Actualités</h2>
                        <p className="max-w-2xl text-muted-foreground md:text-lg">
                            Tout ce qu'il vous faut pour apprendre, entreprendre et réussir.
                        </p>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}