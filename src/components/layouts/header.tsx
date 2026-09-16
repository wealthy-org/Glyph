"use client";

import { ConnectWallet } from "@/features/wallet/connect-wallet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function LandingHeader() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed top-4 z-50 w-full px-[5%] py-4 sm:px-6">
            <div className="mx-auto max-w-7xl">

                {/* Main Header */}
                <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-6">

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
                            <h1 className="text-xl font-bold">
                                Glyph
                            </h1>

                            <p className="text-xs opacity-70 max-lg:hidden">
                                AI Agent Persona Terminal
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block">
                        <ul className="flex gap-6 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className={`text-muted-foreground transition-colors hover:text-white ${
                                        pathname === "/" ? "text-white" : ""
                                    }`}
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/leaderboard"
                                    className={`text-muted-foreground transition-colors hover:text-white ${
                                        pathname === "/leaderboard"
                                            ? "text-white"
                                            : ""
                                    }`}
                                >
                                    Leaderboard
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/chat"
                                    className={`text-muted-foreground transition-colors hover:text-white ${
                                        pathname === "/chat"
                                            ? "text-white"
                                            : ""
                                    }`}
                                >
                                    Chat with Glyph
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/feed"
                                    className={`text-muted-foreground transition-colors hover:text-white ${
                                        pathname === "/feed" ? "text-white" : ""
                                    }`}
                                >
                                    Feed
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center gap-3 sm:gap-6">

                        {/* Desktop Wallet */}
                        <div className="hidden md:block">
                            <ConnectWallet />
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            type="button"
                            onClick={() => setIsOpen((prev) => !prev)}
                            aria-label={
                                isOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            aria-expanded={isOpen}
                            className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 backdrop-blur-md transition-all hover:bg-white/[0.07] hover:text-white active:scale-95 md:hidden"
                        >
                            {isOpen ? (
                                <X className="size-5" />
                            ) : (
                                <Menu className="size-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mt-2 rounded-3xl border border-white/10 bg-white/[0.03] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md md:hidden">

                        <nav>
                            <ul className="flex flex-col gap-1">

                                <li>
                                    <Link
                                        href="/"
                                        onClick={closeMenu}
                                        className={`block rounded-2xl px-4 py-3 text-sm transition-colors ${
                                            pathname === "/"
                                                ? "bg-white/[0.08] text-white"
                                                : "text-muted-foreground hover:bg-white/[0.05] hover:text-white"
                                        }`}
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/leaderboard"
                                        onClick={closeMenu}
                                        className={`block rounded-2xl px-4 py-3 text-sm transition-colors ${
                                            pathname === "/leaderboard"
                                                ? "bg-white/[0.08] text-white"
                                                : "text-muted-foreground hover:bg-white/[0.05] hover:text-white"
                                        }`}
                                    >
                                        Leaderboard
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/chat"
                                        onClick={closeMenu}
                                        className={`block rounded-2xl px-4 py-3 text-sm transition-colors ${
                                            pathname === "/chat"
                                                ? "bg-white/[0.08] text-white"
                                                : "text-muted-foreground hover:bg-white/[0.05] hover:text-white"
                                        }`}
                                    >
                                        Chat with Glyph
                                    </Link>
                                </li>

                            </ul>
                        </nav>

                        {/* Mobile Wallet */}
                        <div className="mt-2 border-t border-white/10 pt-3">
                            <ConnectWallet />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}