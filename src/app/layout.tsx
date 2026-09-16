import LandingHeader from "@/components/layouts/header";
import { Toaster } from "@/components/ui/sonner";
import { Web3Provider } from "@/providers/web3-provider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Glyph | AI Agent Persona Terminal",
    template: "%s | Glyph",
  },
  description:
    "Glyph is an AI agent persona terminal built for crypto communities.",
  keywords: [
    "Glyph",
    "AI Agent",
    "AI Persona",
    "Crypto",
    "Web3",
    "Terminal",
  ],
  icons: {
    icon: "/logos/glyph-logo-only.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.className} min-h-full antialiased`}>
      <body className="relative min-h-screen bg-[#08090d] dark">
        <div
          className="
            pointer-events-none
            fixed
            inset-0
            -z-10
            bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.08),transparent_35%)]
        "
        />

        <Web3Provider>
          <LandingHeader />

          <main className="px-[5%]">
            <div className="mx-auto w-full max-w-7xl">
              {children}
            </div>
          </main>

          <Toaster />
        </Web3Provider>
      </body>
    </html>
  );
}