import Image from "next/image";
import { Copy, MoreHorizontal } from "lucide-react";

interface Message {
    id: number;
    role: "user" | "glyph";
    time: string;
    content: string;
    extra?: string;
}

interface ChatMessagesProps {
    messages: Message[];
}

export function ChatMessages({
    messages,
}: ChatMessagesProps) {
    return (
        <div className="flex flex-1 flex-col gap-8">

            {messages.map((message) => {

                const isGlyph = message.role === "glyph";

                return (
                    <div
                        key={message.id}
                        className={`flex w-full ${
                            isGlyph
                                ? "justify-start"
                                : "justify-end"
                        }`}
                    >

                        {/* GLYPH */}
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

                                        <p>
                                            {message.content}
                                        </p>

                                        {message.extra && (
                                            <p className="mt-4 text-white/55">
                                                {message.extra}
                                            </p>
                                        )}

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