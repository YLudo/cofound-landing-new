import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content");

export type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
    image?: string;
    author?: string;
    tags?: string[];
    published?: boolean;
};

export function getPostSlugs() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        content,
        title: data.title,
        date: data.date,
        description: data.description,
        image: data.image,
        author: data.author,
        tags: data.tags,
        published: data.published,
    } as Post;
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs();

    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .filter((post) => post.published === true)
        .sort((p1, p2) => p1.date > p2.date ? -1 : 1);

    return posts;
}

export function getLatestPosts(count: number = 3): Post[] {
    const allPosts = getAllPosts();
    return allPosts.slice(0, count);
}