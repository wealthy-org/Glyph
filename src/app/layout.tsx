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
      className={`${spaceGrotesk.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col dark">
        <Web3Provider>
          {children}
          <Toaster />
        </Web3Provider>
      </body>
    </html>
  );
}