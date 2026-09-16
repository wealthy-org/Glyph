import { prisma } from "@/lib/prisma";

export async function connectWallet(walletAddress: string) {
    if (!walletAddress) {
        throw new Error("Wallet address is required");
    }

    return prisma.user.upsert({
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
}