import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { walletAddress } = body;

        if (!walletAddress) {
            return NextResponse.json(
                {
                    error: "Wallet address is required",
                },
                {
                    status: 400,
                },
            );
        }

        const user = await prisma.user.upsert({
            where: {
                walletAddress,
            },
            update: {
                lastLoginAt: new Date(),
            },
            create: {
                walletAddress,
                lastLoginAt: new Date(),
            },
        });

        return NextResponse.json({
            success: true,
            user,
        });
    } catch (error) {
        console.error("Connect wallet error:", error);

        return NextResponse.json(
            {
                error: "Failed to connect wallet",
            },
            {
                status: 500,
            },
        );
    }
}