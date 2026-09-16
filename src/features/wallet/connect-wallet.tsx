"use client";

import { Button } from "@/components/ui/button";
import {
    CircleCheckIcon,
    Wallet2Icon,
} from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";
import { toast } from "sonner";
import { useWallet } from "./use-wallet";

export function ConnectWallet() {
    const isMounted = useSyncExternalStore(
        () => () => { },
        () => true,
        () => false,
    );

    const {
        address,
        isConnected,
        connectWallet,
        disconnectWallet,
        connectError,
    } = useWallet();

    useEffect(() => {
        if (!connectError) return;

        toast.error("Failed to connect wallet", {
            description:
                "Make sure Phantom or another wallet extension is installed and enabled.",
        });
    }, [connectError]);

    if (!isMounted) {
        return (
            <Button
                variant="outline"
                className="rounded-full"
                disabled>
                Connect
                <span className="max-sm:hidden"> Wallet</span>
                <Wallet2Icon />
            </Button>
        );
    }

    if (isConnected && address) {
        return (
            <Button
                variant="outline"
                className="rounded-full"
                onClick={() => {
                    disconnectWallet();
                    toast("Wallet disconnected");
                }}>
                <CircleCheckIcon
                    className="text-emerald-400"
                    aria-label="Wallet connected"
                />
                {address.slice(0, 6)}...{address.slice(-4)}
            </Button>
        );
    } else {
        return (
            <Button
                variant="outline"
                className="rounded-full"
                onClick={() => {
                    connectWallet(() => {
                        toast.success("Wallet connected");
                    });
                }}>
                Connect
                <span className="max-sm:hidden"> Wallet</span>
                <Wallet2Icon />
            </Button>
        );
    }
}