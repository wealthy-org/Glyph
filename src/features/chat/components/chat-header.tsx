import { Sparkles } from "lucide-react";

export function ChatHeader() {
    return (
        <div className="mb-8 border-b border-white/10 pb-6">

            {/* Label */}
            <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                <Sparkles className="size-3.5 text-indigo-400" />
                AI PERSONA TERMINAL
            </div>

            <div className="flex items-end justify-between gap-4">

                {/* Title */}
                <div>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Chat with{" "}
                        <span className="text-indigo-400">
                            Glyph
                        </span>
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/45 sm:text-base">
                        Talk to Glyph about the market, narratives,
                        memes, and whatever is moving through crypto.
                    </p>
                </div>

                {/* Status */}
                <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 text-xs text-white/50 sm:flex">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    GLYPH ONLINE
                </div>

            </div>
        </div>
    );
}