import { Redis } from '@upstash/redis';
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || typeof email !== "string") {
            return NextResponse.json(
                { message: "Email is required" },
                { status: 400 },
            );
        }

        await redis.sadd('newsletter_emails', email);

        return NextResponse.json(
            { message: "Email added successfully"},
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Interal Server Error" },
            { status: 500 },
        );
    }
}