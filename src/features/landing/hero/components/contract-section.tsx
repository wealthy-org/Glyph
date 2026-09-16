"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CopyIcon, Link2Icon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const CONTRACT_ADDRESS =
    "0x1234567890abcdef1234567890abcdef12345678";

export default function ContractSection() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(CONTRACT_ADDRESS);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <section className="absolute flex justify-between gap-8 border bottom-12 w-fit p-6 rounded-2xl text-sm bg-white/1 backdrop-blur-xs z-10
        max-lg:static max-lg:flex-col max-lg:max-w-full max-lg:gap-6">
            <div className="flex flex-col justify-between">
                <h1 className="uppercase opacity-70 flex items-center gap-2">
                    Contract Address
                </h1>
                <div className="flex gap-3 mt-3">
                    <div className="w-full">
                        <div className="flex gap-3 w-full max-lg:flex-wrap">
                            <div className="flex border w-fit max-w-full">
                                <div className="bg-white/5 p-2">
                                    <Link2Icon className="size-5" />
                                </div>
                                <div className="px-4 py-2 w-fit opacity-90 block truncate">
                                    0x1234567890abcdef1234567890abcdef12345678
                                </div>
                            </div>
                            <Button size="sm" variant="outline" onClick={handleCopy} className="w-24 h-auto max-lg:h-10">
                                <CopyIcon /> {copied ? "Copied!" : "Copy"}
                            </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            Always verify the contract address before trading.
                        </p>
                    </div>
                </div>
            </div>

            <Separator orientation="vertical" className="max-lg:hidden" />
            <Separator orientation="horizontal" className="hidden max-lg:block" />

            <div className="w-full">
                <h1 className="uppercase opacity-70 flex items-center gap-2">
                    Available On
                </h1>
                <div className="flex gap-4 mt-3
                max-lg:flex-wrap max-lg:gap-2">
                    <a href="https://app.uniswap.org/">
                        <div className="flex items-center gap-3 mt-3 bg-white/5 rounded-lg py-3 px-5 hover:bg-white/6">
                            <Image
                                src="/logos/uniswap-logo.png"
                                alt="Uniswap Logo"
                                width={1848}
                                height={2000}
                                className="size-8"
                            />
                            <div className="">
                                <h1 className="text-base font-medium">DEX</h1>
                                <p className="text-muted-foreground">Trade Now</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://axiom.trade/" target="_blank">
                        <div className="flex items-center gap-3 mt-3 border rounded-lg py-3 px-5 hover:bg-white/1">
                            <Image
                                src="/logos/axiom-logo.png"
                                alt="Axiom Logo"
                                width={72}
                                height={72}
                                className="size-8"
                            />
                            <div className="">
                                <h1 className="text-base font-medium">Axiom</h1>
                                <p className="text-muted-foreground">View Charts</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}