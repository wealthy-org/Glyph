"use client";

import { useState } from "react";
import { ChatMessage } from "./types/chat-message";


function getCurrentTime() {
    return new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
    });
}

let messageId = 0;

function createMessage(
    role: ChatMessage["role"],
    content: string,
): ChatMessage {
    return {
        id: ++messageId,
        role,
        time: getCurrentTime(),
        content,
    };
}

export function useChat() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const updateMessage = (id: number, content: string) => {
        setMessages((prev) =>
            prev.map((message) =>
                message.id === id
                    ? { ...message, content }
                    : message,
            ),
        );
    };

    const streamResponse = async (
        response: Response,
        messageId: number,
    ) => {
        if (!response.body) {
            throw new Error("Response body is empty");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        let accumulated = "";

        try {
            while (true) {
                const { done, value } = await reader.read();

                if (done) break;

                accumulated += decoder.decode(value, {
                    stream: true,
                });

                updateMessage(messageId, accumulated);
            }

            accumulated += decoder.decode();
            updateMessage(messageId, accumulated);
        } finally {
            reader.releaseLock();
        }
    };

    const sendMessage = async () => {
        const content = input.trim();

        if (!content || isLoading) return;

        const userMessage = createMessage("user", content);
        const assistantMessage = createMessage("glyph", "");

        const history = [...messages, userMessage].map(
            ({ role, content }) => ({
                role:
                    role === "glyph"
                        ? ("assistant" as const)
                        : ("user" as const),
                content,
            }),
        );

        setMessages((prev) => [
            ...prev,
            userMessage,
            assistantMessage,
        ]);

        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: content,
                    history,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch response");
            }

            await streamResponse(
                response,
                assistantMessage.id,
            );
        } catch (error) {
            console.error("Chat error:", error);

            updateMessage(
                assistantMessage.id,
                "Maaf, terjadi kesalahan saat mengambil respons.",
            );
        } finally {
            setIsLoading(false);
        }
    };

    return {
        messages,
        input,
        isLoading,
        setInput,
        sendMessage,
    };
}
