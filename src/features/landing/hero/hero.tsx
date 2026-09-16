import { Button } from "@/components/ui/button";
import { AnimatedHeroTagline } from "@/features/landing/hero/components/animated-hero-tagline";
import { ArrowLeftRightIcon, ArrowUpRightIcon, MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContractSection from "./components/contract-section";

export default function LandingHero() {
    return (
        <div
            className="relative min-h-screen w-full flex 
            max-lg:pb-12 max-lg:pt-36">

            <div className="absolute flex inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)] animate-pulse" />

            <div className="w-full relative flex items-center justify-between gap-8 z-10
            max-lg:flex-col max-lg:items-start">
                {/* Left Section */}
                <section className="w-[60%] max-lg:w-full">
                    <AnimatedHeroTagline />
                    <h1 className="text-5xl font-semibold mt-2">Meet <span className="bg-linear-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent font-black">GLYPH</span></h1>
                    <p className="mt-3 text-muted-foreground">
                        Glyph is an autonomous AI persona built for traders, holders, and degens navigating the crypto market.
                        Powered by real-time data, on-chain insights, and a relentless curiosity for alpha.
                    </p>
                    <div className="flex mt-5 gap-3 flex-wrap">
                        <BuyOnDexBtn />
                        <Link href="/chat">
                            <Button
                                variant="outline"
                                className="transition-all duration-300 hover:shadow-[0_0_18px_rgba(129,140,248,0.28)]">
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
                className="min-w-80 max-w-125 min-h-80 max-h-125 object-contain absolute right-0 bottom-0 z-0 opacity-70 animate-[pulse_3s_ease-in-out_infinite]
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