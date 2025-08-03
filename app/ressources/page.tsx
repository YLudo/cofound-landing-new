import BlogLayout from "@/components/application/blog-layout";
import Footer from "@/components/application/footer";
import Navbar from "@/components/application/navbar";
import { PostPreview } from "@/types";

async function getPosts(): Promise<PostPreview[]> {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
        const response = await fetch(`${apiUrl}/api/posts`);

        if (!response.ok) {
            console.log(response)
            throw new Error("Impossible de récupérer les articles.");
        }

        return response.json();
    } catch (error) {
        return [];
    }
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <>
            <Navbar />
            <BlogLayout posts={posts} />
            <Footer />
        </>
    );
}