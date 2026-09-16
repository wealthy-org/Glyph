"use client";

import { useAccount, useConnect, useConnections, useDisconnect } from "wagmi";

export function useWallet() {
    const { address, isConnected } = useAccount();

    const {
        connect,
        connectors,
        error,
        reset: resetConnectError,
    } = useConnect();

    const connections = useConnections();
    const { disconnectAsync } = useDisconnect();
    const connector = connectors[0];

    const connectWallet = (onSuccess?: () => void) => {
        resetConnectError();

        connect(
            {
                connector,
            },
            {
                onSuccess: async (data) => {
                    await saveWallet(data.accounts[0]);
                    onSuccess?.();
                }
            },
        );
    };

    const disconnectWallet = async () => {
        await Promise.all(
            connections.map((connection) =>
                disconnectAsync({ connector: connection.connector }),
            ),
        );
    };

    const saveWallet = async (walletAddress: string) => {
        const response = await fetch("/api/wallet/connect", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                walletAddress,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to save wallet");
        }

        return response.json();
    };

    return {
        address,
        isConnected,
        connectWallet,
        disconnectWallet,
        connectError: error,
    };
}