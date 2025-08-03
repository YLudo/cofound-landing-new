import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const redis = Redis.fromEnv();

export async function GET() {
    try {
        const slugs = await redis.zrange('posts:index', 0, -1, { rev: true });

        if (slugs.length === 0) {
            return NextResponse.json([]);
        }

        const pipeline = redis.pipeline();
        slugs.forEach((slug) => {
            pipeline.json.get(`post:${slug}`, '$.title', '$.slug', '$.description', '$.date', '$.image', '$.tags');
        });

        const results = await pipeline.exec();
        
        const typedResults = results as ({ [key: string]: any } | Error | null)[];
        const posts = typedResults
            .map((result, index) => {
                if (typeof result !== 'object' || result === null || result instanceof Error) {
                    console.error(`Données corrompues ou erreur pour le slug: ${slugs[index]}`, result);
                    return null;
                }

                const title = result['$.title']?.[0];
                const slug = result['$.slug']?.[0];
                const description = result['$.description']?.[0];
                const date = result['$.date']?.[0];
                const image = result['$.image']?.[0];
                const tags = result['$.tags']?.[0];

                if (!slug) {
                    return null;
                }

                return {
                    title,
                    slug,
                    description,
                    date,
                    image,
                    tags: tags || [],
                };
            })
            .filter(Boolean);

        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}