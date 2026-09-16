"use client";

import { wagmiConfig } from "@/features/wallet/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

interface Web3ProviderProps {
    children: React.ReactNode;
}

export function Web3Provider({
    children,
}: Web3ProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <WagmiProvider config={wagmiConfig}>
                {children}
            </WagmiProvider>
        </QueryClientProvider>
    );
}