import {
    ArrowRightIcon,
    SearchIcon,
    Wallet2Icon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { PaginationWithLinks } from "@/components/custom/pagination-with-link";

interface LeaderboardUser {
    rank: number;
    wallet: string;
    totalTipped: string;
    tips: number;
}

interface LeaderboardProps {
    data: LeaderboardUser[];
}

export default function Leaderboard({
    data,
}: LeaderboardProps) {
    return (
        <div className="mt-8 flex gap-6 max-lg:flex-col">
            {/* Leaderboard */}
            <div className="w-full space-y-5 border bg-white/[0.01] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-3">
                        <Button size="sm">
                            All Time
                        </Button>

                        <Button size="sm" variant="outline">
                            This Month
                        </Button>

                        <Button size="sm" variant="outline">
                            This Week
                        </Button>
                    </div>

                    <InputGroup className="max-w-xs">
                        <InputGroupInput placeholder="Search wallet..." />

                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>#</TableHead>
                            <TableHead>Wallet</TableHead>
                            <TableHead>Total Tipped</TableHead>
                            <TableHead>Tips</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {data.map((user) => (
                            <TableRow key={user.wallet}>
                                <TableCell>
                                    {user.rank}
                                </TableCell>

                                <TableCell className="font-mono text-sm">
                                    {user.wallet}
                                </TableCell>

                                <TableCell className="font-medium">
                                    {user.totalTipped}
                                </TableCell>

                                <TableCell>
                                    {user.tips.toLocaleString()}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <PaginationWithLinks
                    totalCount={100}
                    pageSize={10}
                />
            </div>

            {/* Sidebar */}
            <div className="w-[30%] space-y-5 max-lg:w-full">
                <div className="border bg-white/[0.01] p-4">
                    <h2 className="italic font-semibold">
                        "Every tip keeps me alive." - Glyph
                    </h2>

                    <p className="mt-3 text-sm text-muted-foreground">
                        Your support helps the agent think, create,
                        and stay online. Thank you for being part of
                        this journey.
                    </p>
                </div>

                <div className="border bg-white/[0.01] p-4">
                    <h2 className="font-semibold">
                        Want to be on the list?
                    </h2>

                    <p className="mt-3 text-sm text-muted-foreground">
                        Connect your wallet, chat with the agent,
                        and show your support.
                    </p>

                    <Button className="mt-5">
                        <Wallet2Icon />
                        Connect Wallet
                        <ArrowRightIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
}