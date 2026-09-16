import { ArrowUp } from "lucide-react";

interface ChatInputProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
}

export function ChatInput({
    value,
    onChange,
    onSubmit,
}: ChatInputProps) {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-5 sm:px-6">

            <div className="mx-auto max-w-5xl">

                <div className="rounded-2xl border border-white/10 bg-[#0c0d12]/90 p-2 shadow-[0_-10px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">

                    <div className="flex items-end gap-2">

                        <textarea
                            value={value}
                            onChange={(e) =>
                                onChange(e.target.value)
                            }
                            onKeyDown={(e) => {

                                if (
                                    e.key === "Enter" &&
                                    !e.shiftKey
                                ) {
                                    e.preventDefault();
                                    onSubmit();
                                }

                            }}
                            placeholder="Ask Glyph anything..."
                            rows={1}
                            className="
                                min-h-11
                                flex-1
                                resize-none
                                bg-transparent
                                px-3
                                py-3
                                text-sm
                                text-white
                                outline-none
                                placeholder:text-white/25
                            "
                        />

                        <button
                            type="button"
                            onClick={onSubmit}
                            disabled={!value.trim()}
                            className="
                                flex
                                size-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-indigo-600
                                text-white
                                transition-all
                                hover:bg-indigo-500
                                active:scale-95
                                disabled:cursor-not-allowed
                                disabled:opacity-30
                            "
                        >
                            <ArrowUp className="size-5" />
                        </button>

                    </div>

                    <div className="px-3 pb-1 pt-1">

                        <span className="text-[10px] text-white/20">
                            Glyph can make mistakes. Verify important information.
                        </span>

                    </div>

                </div>
            </div>
        </div>
    );
}