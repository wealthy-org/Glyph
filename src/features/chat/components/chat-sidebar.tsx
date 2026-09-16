"use client";

import { MessageSquare, Plus, X } from "lucide-react";
import { chatHistory } from "../data";

interface ChatSidebarProps {
    open: boolean;
    onClose: () => void;
}

export function ChatSidebar({
    open,
    onClose,
}: ChatSidebarProps) {
    return (
        <>
            {/* Mobile overlay */}
            {open && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed
                    bottom-0
                    left-0
                    top-0
                    z-50
                    w-[280px]
                    border-r
                    border-white/10
                    bg-[#0b0c11]/95
                    p-4
                    backdrop-blur-xl
                    transition-transform
                    duration-300
                    md:static
                    md:z-auto
                    md:w-64
                    md:translate-x-0
                    md:bg-transparent
                    md:p-0
                    md:backdrop-blur-none
                    md:pr-8
                    ${open
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }
                `}
            >
                {/* Mobile close */}
                <div className="mb-6 flex items-center justify-between md:hidden">
                    <span className="text-sm font-semibold">
                        Conversations
                    </span>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]"
                    >
                        <X className="size-4" />
                    </button>
                </div>

                {/* New Chat */}
                <button
                    type="button"
                    className="
                        mb-6
                        flex
                        w-full
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-4
                        py-3
                        text-sm
                        text-white/80
                        transition
                        hover:bg-white/[0.06]
                    "
                >
                    <Plus className="size-4" />
                    New Chat
                </button>

                {/* History */}
                <div>
                    <p className="mb-3 px-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/30">
                        Recent Chats
                    </p>

                    <div className="space-y-1">
                        {chatHistory.map((chat) => (
                            <button
                                key={chat.id}
                                type="button"
                                onClick={onClose}
                                className="
                                    flex
                                    w-full
                                    items-center
                                    gap-3
                                    rounded-xl
                                    px-3
                                    py-3
                                    text-left
                                    transition
                                    hover:bg-white/[0.04]
                                "
                            >
                                <MessageSquare className="size-4 shrink-0 text-white/25" />

                                <span className="truncate text-sm text-white/50">
                                    {chat.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
}