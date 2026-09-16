import { ConnectWallet } from "@/features/wallet/connect-wallet";
import Image from "next/image";
import Link from "next/link";

export default function LandingHeader() {
    return (
        <header className="fixed top-4 z-50 w-full py-4 sm:px-6 px-[5%]">
            {/* Container */}
            <div className="mx-auto max-w-7xl flex items-center justify-between rounded-full border px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)] bg-black/20 backdrop-blur-sm sm:px-6">
                {/* Left Side: Logo & Title */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/logos/glyph-logo-only.png"
                        alt="Glyph Logo"
                        width={1000}
                        height={1000}
                        className="size-10 max-lg:size-8"
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
                                href="/leaderboard" target="_blank"
                                className="text-muted-foreground hover:text-white">
                                Leaderboard
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Right Side: Connect Wallet Btn */}
                <div className="flex items-center gap-3 sm:gap-6">
                    <ConnectWallet />
                </div>
            </div>
        </header>
    )
}

