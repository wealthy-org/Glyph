import StatsCard from "@/components/custom/stats-card";
import Leaderboard from "@/features/tip/components/leaderboard";
import {
    CoinsIcon,
    MessageCircleIcon,
    SendIcon,
    StarIcon,
    UserIcon
} from "lucide-react";

const stats = [
    {
        title: "Total Supporters",
        value: "345",
        icon: UserIcon,
    },
    {
        title: "Total Tipped",
        value: "12.48 ETH",
        icon: CoinsIcon,
    },
    {
        title: "Total Tips",
        value: "1,208",
        icon: SendIcon,
    },
    {
        title: "Total Chats",
        value: "8,921",
        icon: MessageCircleIcon,
    },
];

const leaderboardData = [
    {
        rank: 1,
        wallet: "0x7a...92f1",
        totalTipped: "12.48 ETH",
        tips: 1208,
    },
    {
        rank: 2,
        wallet: "0x3c...81a4",
        totalTipped: "8.72 ETH",
        tips: 864,
    },
    {
        rank: 3,
        wallet: "0xf1...42bc",
        totalTipped: "6.35 ETH",
        tips: 621,
    },
    {
        rank: 4,
        wallet: "0x9d...7e21",
        totalTipped: "4.89 ETH",
        tips: 492,
    },
    {
        rank: 5,
        wallet: "0x52...c8f3",
        totalTipped: "3.74 ETH",
        tips: 381,
    },
    {
        rank: 6,
        wallet: "0xb8...19da",
        totalTipped: "2.91 ETH",
        tips: 294,
    },
    {
        rank: 7,
        wallet: "0x41...6b72",
        totalTipped: "2.45 ETH",
        tips: 247,
    },
    {
        rank: 8,
        wallet: "0xe3...54c9",
        totalTipped: "1.98 ETH",
        tips: 201,
    },
    {
        rank: 9,
        wallet: "0x68...a12e",
        totalTipped: "1.64 ETH",
        tips: 167,
    },
    {
        rank: 10,
        wallet: "0xca...83d5",
        totalTipped: "1.21 ETH",
        tips: 124,
    },
];

export default function LeaderBoardPage() {
    return (
        <div className="pt-36 relative pb-8">
            <h2 className="flex items-center gap-2 uppercase text-muted-foreground">
                <StarIcon className="size-5" />
                Community
            </h2>

            <h1 className="mt-5 flex flex-col text-5xl font-bold">
                <span>Leaderboard</span>
                <span className="text-indigo-500">Power the Agent</span>
            </h1>

            <p className="mt-3 text-muted-foreground">
                A leaderboard for the believers, traders, and supporters who
                keep Glyph growing.
            </p>

            <div className="mt-8 grid grid-cols-4 gap-4
            max-lg:grid-cols-2 max-sm:grid-cols-1">
                {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <StatsCard
                            key={stat.title}
                            title={stat.title}
                            value={stat.value}
                            icon={stat.icon}
                        />
                    );
                })}
            </div>

            <Leaderboard data={leaderboardData} />
        </div>
    );
}