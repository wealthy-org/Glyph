"use client";

import { History } from "lucide-react";
import { useState } from "react";

import { messages as initialMessages } from "../data";
import { ChatHeader } from "./chat-header";
import { ChatInput } from "./chat-input";
import { ChatMessages } from "./chat-messages";
import { ChatSidebar } from "./chat-sidebar";

export function ChatContainer() {
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const sendMessage = () => {
        const content = input.trim();

        if (!content) return;

        setMessages((prev) => [
            ...prev,
            {
                id: Date.now(),
                role: "user",
                time: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                content,
            },
        ]);

        setInput("");
    };

    return (
        <main className="min-h-screen text-white">

            <section className="mx-auto flex min-h-screen w-full max-w-7xl px-5 pb-32 pt-36 sm:px-8">

                <ChatSidebar
                    open={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />

                <div className="min-w-0 flex-1 md:pl-8 pb-6">

                    {/* Mobile History */}
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        className="fixed right-6 top-28 z-30 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/50 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition hover:bg-white/[0.06] hover:text-white md:hidden">
                        <History className="size-4" />
                        History
                    </button>

                    <ChatHeader />

                    <ChatMessages messages={messages} />

                </div>

                <ChatInput
                    value={input}
                    onChange={setInput}
                    onSubmit={sendMessage}
                />

            </section>
        </main>
    );
}