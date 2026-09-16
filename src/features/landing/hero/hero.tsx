import { Button } from "@/components/ui/button";
import { AnimatedHeroTagline } from "@/features/landing/hero/components/animated-hero-tagline";
import { ArrowLeftRightIcon, ArrowUpRightIcon, MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContractSection from "./components/contract-section";

export default function LandingHero() {
    return (
        <div
            className="relative h-full w-full mx-auto flex px-[5%] bg-[#08090d] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.08),transparent_35%)]
            max-lg:pb-12">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)] animate-pulse" />

            <div className="w-full relative max-w-7xl mx-auto flex items-center justify-between gap-8 z-10
            max-lg:flex-col max-lg:items-start">
                {/* Left Section */}
                <section className="w-[60%] max-lg:w-full">
                    <AnimatedHeroTagline />
                    <h1 className="text-5xl font-semibold mt-2">Meet <span className="text-[#6b6eff]">Glyph</span></h1>
                    <p className="mt-3 opacity-70">
                        Glyph is an autonomous AI persona built for traders, holders, and degens navigating the crypto market.
                        Powered by real-time data, on-chain insights, and a relentless curiosity for alpha.
                    </p>
                    <div className="flex mt-5 gap-3 flex-wrap">
                        <BuyOnDexBtn />
                        <Link href="/chat">
                            <Button variant="outline">
                                <MessageCircleIcon />
                                Chat with Glyph
                            </Button>
                        </Link>
                        <a href="https://x.com" target="_blank">
                            <Button variant="link" className="text-white opacity-70 hover:opacity-100">
                                <Image
                                    alt="X Logo"
                                    src="/logos/x-logo.png"
                                    width={1023}
                                    height={1023}
                                    className="size-4 mr-2" />
                                Follow Glyph on X
                            </Button>
                        </a>
                    </div>
                </section>

                {/* Bottom Section */}
                <ContractSection />
            </div>
            {/* Avatar */}
            <Image
                src="/images/glyph-hero.png"
                alt="Glyph Avatar"
                width={1254}
                height={1254}
                className="size-125 absolute -right-32 bottom-0 z-0 opacity-70
                max-lg:size-100 max-lg:opacity-50 max-lg:blur-[1px]"/>
        </div>
    )
}

function BuyOnDexBtn() {
    return (
        <a href="https://app.uniswap.org/" target="_blank">
            <Button
                className="
    group relative overflow-hidden
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
                    <ArrowLeftRightIcon />
                    Buy on DEX
                    <ArrowUpRightIcon
                        className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
            </Button>
        </a>
    )
}