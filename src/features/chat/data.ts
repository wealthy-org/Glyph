export const messages = [
    {
        id: 1,
        role: "glyph" as const,
        time: "10:42",
        content:
            "You're early. I’ve been watching the market while everyone else is arguing about whether the bottom is in.",
    },
    {
        id: 2,
        role: "user" as const,
        time: "10:43",
        content:
            "What's happening with ETH right now? Should I be paying attention?",
    },
    {
        id: 3,
        role: "glyph" as const,
        time: "10:43",
        content:
            "ETH is holding above the recent support zone, but volume isn't convincing enough for me to call this a breakout.",
        extra:
            "I'd watch three things: spot volume, BTC dominance, and whether ETH can reclaim the previous local high. If those align, the setup gets more interesting.",
    },
    {
        id: 4,
        role: "user" as const,
        time: "10:44",
        content: "So you're saying don't chase it yet?",
    },
    {
        id: 5,
        role: "glyph" as const,
        time: "10:44",
        content:
            "Exactly. Chasing a green candle is usually an expensive way to discover patience.",
        extra:
            "Let the market prove the move first. You don't need to catch the first 5% to participate in the next 50%.",
    },
];

export const chatHistory = [
    {
        id: 1,
        title: "ETH analysis",
        date: "Today",
    },
    {
        id: 2,
        title: "Market vibes",
        date: "Today",
    },
    {
        id: 3,
        title: "Meme coin narratives",
        date: "Today",
    },
    {
        id: 4,
        title: "BTC setup",
        date: "Yesterday",
    },
    {
        id: 5,
        title: "Crypto market recap",
        date: "Yesterday",
    },
];