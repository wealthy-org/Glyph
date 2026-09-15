import { Button } from "@/components/ui/button";
import { AnimatedHeroTagline } from "@/features/components/animated-hero-tagline";
import { ArrowRightIcon, CircleIcon, SendIcon, SparkleIcon } from "lucide-react";

export default function LandingHero() {
    return (
        <div className="h-full w-full mx-auto flex px-[5%]
        max-lg:pb-12">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />

            <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-8 max-lg:flex-col">
                {/* Left Section */}
                <section className="w-[40%] max-lg:w-full">
                    <AnimatedHeroTagline />
                    <h1 className="text-5xl font-semibold mt-2">Meet <span className="text-[#6b6eff]">Glyph</span></h1>
                    <p className="mt-3 opacity-70">Your AI agent for crypto. Get real-time insights, on-chain data, and meaningful conversations — all in one terminal.</p>
                    <ConnectWalletBtn />
                </section>
                {/* Right Section */}
                <section className="flex pt-24 h-full w-[40%] items-center justify-end max-md:w-full max-lg:pt-0 max-lg:w-full">
                    <ChatPanel />
                </section>

                {/* Bottom Section */}
                <section className="absolute bottom-16
            max-lg:static max-lg:w-full">
                    <FeatureHighlights />
                </section>
            </div>
        </div>
    )
}

function ChatPanel() {
    return (
        <div className="flex w-full max-w-[420px] flex-col overflow-hidden rounded-[22px] border border-white/15 bg-[#0b0c11]/90 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl
        max-lg:max-w-full">

            {/* Subtle violet glow */}
            <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]" />

            {/* Header */}
            <div className="relative flex items-center justify-between border-b border-white/[0.08] px-5 py-5">
                <div className="flex items-center gap-3">
                    <SparkleIcon
                        size={21}
                        strokeWidth={2.2}
                        className="text-white"
                    />

                    <h1 className="font-mono text-[17px] font-semibold tracking-tight text-white">
                        Glyph
                    </h1>
                </div>

                <div className="flex items-center gap-2 font-mono text-[14px] text-lime-300">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300 opacity-60" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(190,242,100,0.7)]" />
                    </span>

                    Online
                </div>
            </div>

            {/* Conversation */}
            <div className="space-y-6 px-4 py-6">

                {/* User message */}
                <div className="flex gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center text-violet-400/60">
                        <CircleIcon
                            size={15}
                            strokeWidth={1.8}
                        />
                    </div>

                    <div className="min-w-0">
                        <div className="mb-1.5 font-mono text-sm font-semibold text-zinc-100">
                            You
                        </div>

                        <p className="font-mono text-xs leading-5 text-zinc-300">
                            What's the market sentiment
                            <br />
                            right now?
                        </p>
                    </div>
                </div>

                {/* Glyph response */}
                <div className="flex gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center text-violet-400/60">
                        <SparkleIcon
                            size={15}
                            strokeWidth={1.8}
                        />
                    </div>

                    <div className="min-w-0">
                        <div className="mb-1.5 font-mono text-sm font-semibold text-zinc-100">
                            Glyph
                        </div>

                        <div className="font-mono text-xs leading-5 text-zinc-300">
                            <p>
                                Market sentiment is currently
                                <br />
                                in a neutral zone (54/100).
                            </p>

                            <p className="mt-5">
                                Key factors:
                            </p>

                            <ul className="mt-1 space-y-0">
                                <li>• BTC holding above $115K</li>
                                <li>• Increasing accumulation</li>
                                <li>• Positive ETF inflows</li>
                            </ul>

                            <p className="mt-5">
                                Want a deeper analysis?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Input */}
            <div className="relative border-t border-white/[0.08] p-3">
                <div className="flex h-[52px] items-center gap-3 rounded-xl border border-white/[0.12] bg-black/20 px-3 transition-colors focus-within:border-violet-400/30">

                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="min-w-0 flex-1 bg-transparent font-mono text-[14px] text-zinc-200 outline-none placeholder:text-zinc-600"
                    />

                    <Button
                        type="button"
                        size="icon"
                        className="rounded-full"
                    >
                        <SendIcon
                            size={22}
                            strokeWidth={1.8}
                        />
                    </Button>
                </div>
            </div>
        </div>
    )
}

function FeatureHighlights() {
    return (
        <div className="grid grid-cols-4 gap-8 text-sm text-white 
        max-lg:flex">

            <div>
                <h1 className="font-medium">Real-time</h1>
                <p className="font-light text-white/60">Market Insights</p>
            </div>

            <div>
                <h1 className="font-medium">On-chain</h1>
                <p className="font-light text-white/60">Data Analysis</p>
            </div>

            <div>
                <h1 className="font-medium">Community</h1>
                <p className="font-light text-white/60">Driven</p>
            </div>

            <div>
                <h1 className="font-medium">One Token</h1>
                <p className="font-light text-white/60">One AI Agent</p>
            </div>

        </div>
    )
}

function ConnectWalletBtn() {
    return (
        <Button
            className="
    group relative mt-6 overflow-hidden
    bg-indigo-600
    text-white
    transition-all duration-300
    hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]">
            <span
                className="
      absolute inset-0
      -translate-x-full
      bg-gradient-to-r
      from-indigo-500
      to-indigo-700
      transition-transform duration-500
      group-hover:translate-x-0"/>
            <span className="relative z-10 flex items-center gap-2">
                Connect Wallet
                <ArrowRightIcon
                    className="transition-transform duration-300 group-hover:translate-x-1"
                />
            </span>
        </Button>
    )
}