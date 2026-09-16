"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const taglines = [
    "Your AI Agent. Your Edge.",
    "Real-time Intelligence. On-chain.",
    "Trade Smarter. Stay Ahead.",
];

export function AnimatedHeroTagline() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((current) => (current + 1) % taglines.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-5 overflow-hidden text-sm uppercase opacity-70">
            <AnimatePresence mode="wait">
                <motion.p
                    key={taglines[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{
                        duration: 0.4,
                        ease: "easeOut",
                    }}
                    className="absolute inset-0"
                >
                    {taglines[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
}