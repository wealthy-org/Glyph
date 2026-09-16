import { Copy, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { ChatMessage } from "../types/chat-message";

interface ChatMessagesProps {
    messages: ChatMessage[];
}

export function ChatMessages({
    messages,
}: ChatMessagesProps) {
    return (
        <div className="flex flex-1 flex-col gap-8">

            {messages.map((message, index) => {

                const isGlyph = message.role === "glyph";

                return (
                    <div
                        key={index}
                        className={`flex w-full ${isGlyph
                            ? "justify-start"
                            : "justify-end"
                            }`}
                    >

                        {isGlyph ? (
                            <div className="flex max-w-3xl gap-4">

                                {/* Avatar */}
                                <div className="relative mt-1 size-10 shrink-0 overflow-hidden rounded-xl border border-indigo-400/20 bg-[#10111a] shadow-[0_0_25px_rgba(99,102,241,0.12)]">

                                    <Image
                                        src="/logos/glyph-logo-only.png"
                                        alt="Glyph"
                                        fill
                                        className="object-contain p-1.5"
                                    />

                                </div>

                                {/* Message */}
                                <div className="min-w-0">

                                    <div className="mb-2 flex items-center gap-2">

                                        <span className="text-sm font-semibold">
                                            Glyph
                                        </span>

                                        <span className="text-[11px] text-white/25">
                                            {message.time}
                                        </span>

                                    </div>

                                    <div className="text-[15px] leading-7 text-white/75 sm:text-base">
                                        {
                                            message.content === ""
                                                ?
                                                <LoadingDots />
                                                :
                                                <p>{message.content}</p>
                                        }
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-4 flex items-center gap-3">

                                        <button
                                            type="button"
                                            className="text-white/25 transition hover:text-white/60"
                                        >
                                            <Copy className="size-3.5" />
                                        </button>

                                        <button
                                            type="button"
                                            className="text-white/25 transition hover:text-white/60"
                                        >
                                            <MoreHorizontal className="size-4" />
                                        </button>

                                    </div>

                                </div>
                            </div>
                        ) : (

                            /* USER */
                            <div className="max-w-[80%] sm:max-w-xl">

                                <div className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">

                                    <p className="text-sm leading-6 text-white/85 sm:text-[15px]">
                                        {message.content}
                                    </p>

                                </div>

                                <div className="mt-2 text-right text-[11px] text-white/25">
                                    {message.time}
                                </div>

                            </div>
                        )}

                    </div>
                );
            })}

        </div>
    );
}

function LoadingDots() {
    return (
        <div className="flex items-center gap-1 py-1">
            <span className="size-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:-0.3s]" />
            <span className="size-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:-0.15s]" />
            <span className="size-1.5 animate-bounce rounded-full bg-white/50" />
        </div>
    );
}