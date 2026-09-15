import { Button } from "@/components/ui/button";
import { MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingHeader() {
    return (
        <header className="fixed top-4 z-50 w-full py-4 sm:px-6 px-[5%]">
            {/* Container */}
            <div className="mx-auto max-w-7xl flex items-center justify-between rounded-full border border-white/10 bg-[#0b0b10]/75 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-6">
                {/* Left Side: Logo & Title */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/logos/logo-only.png"
                        alt="Glyph Logo"
                        width={1000}
                        height={1000}
                        className="size-10"
                    />
                    <div>
                        <h1 className="font-bold text-xl">Glyph</h1>
                        <p className="text-xs opacity-70 max-lg:hidden">AI Agent Persona Terminal</p>
                    </div>
                </div>

                {/* Center Side: Menus */}
                <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block">
                    <ul className="flex gap-6 text-sm">
                        <li>
                            <Link
                                href="#features"
                                className="opacity-90 transition hover:opacity-100"
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#how-it-works"
                                className="opacity-90 transition hover:opacity-100"
                            >
                                How It Works
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#about"
                                className="opacity-90 transition hover:opacity-100"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Right Side: Connect Wallet Btn */}
                <div className="flex items-center gap-3 sm:gap-6">
                    <Button variant="outline" className="rounded-full">
                        Chat <span className="max-lg:hidden">with Glyph</span>
                        <MessageCircleIcon />
                    </Button>
                </div>
            </div>
        </header>
    )
}

