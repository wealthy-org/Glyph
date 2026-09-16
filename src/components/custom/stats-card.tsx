import { LucideIcon } from "lucide-react";
import {
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";

interface StatsCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
}

export default function StatsCard({
    title,
    value,
    icon: Icon,
}: StatsCardProps) {
    return (
        <Card className="bg-white/[0.01]">
            <CardHeader>
                <CardDescription>
                    {title}
                </CardDescription>

                <CardTitle className="text-2xl">
                    {value}
                </CardTitle>

                <CardAction className="flex size-9 items-center justify-center rounded-lg bg-indigo-500/10">
                    <Icon className="size-4 text-indigo-400" />
                </CardAction>
            </CardHeader>
        </Card>
    );
}