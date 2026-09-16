import { GLYPH_SYSTEM_PROMPT } from "@/features/chat/constants/glyph-prompt";
import { OpenRouter } from "@openrouter/sdk";
import { NextResponse } from "next/server";

const openrouter = new OpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(request: Request) {
    try {
        const { message } = await request.json();

        const stream = await openrouter.chat.send({
            chatRequest: {
                model: "openrouter/free",
                stream: true,
                messages: [
                    {
                        role: "system",
                        content: GLYPH_SYSTEM_PROMPT,
                    },
                    {
                        role: "user",
                        content: message,
                    },
                ],
            },
        });

        const encoder = new TextEncoder();

        const readableStream = new ReadableStream({
            async start(controller) {
                try {
                    for await (const chunk of stream as any) {
                        const text =
                            chunk?.choices?.[0]?.delta?.content ?? "";
                        if (text) {
                            controller.enqueue(encoder.encode(text));
                        }
                    }
                    controller.close();
                } catch (err) {
                    controller.error(err);
                }
            },
        });

        return new Response(readableStream, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Cache-Control": "no-cache",
            },
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to generate response" },
            { status: 500 }
        );
    }
}