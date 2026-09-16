"use client";

import { Button } from "@/components/ui/button";
import { CircleCheckIcon, Wallet2Icon } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";
import { toast } from "sonner";
import {
    useAccount,
    useConnect,
    useDisconnect,
} from "wagmi";

export function ConnectWallet() {
    const mounted = useSyncExternalStore(
        () => () => { },
        () => true,
        () => false,
    );

    const { address, isConnected } = useAccount();
    const {
        connect,
        connectors,
        error: connectError,
        reset: resetConnectError,
    } = useConnect();
    const { disconnect } = useDisconnect();

    useEffect(() => {
        if (connectError) {
            toast.error("Failed to connect wallet", {
                description: "Make sure Phantom or another wallet extension is installed and enabled.",
            });
        }
    }, [connectError]);

    if (!mounted) {
        return (
            <Button
                variant="outline"
                className="rounded-full"
                disabled
            >
                Connect <span className="max-sm:hidden">Wallet</span>
                <Wallet2Icon />
            </Button>
        );
    }

    if (isConnected && address) {
        return (
            <Button
                variant="outline"
                className="rounded-full"
                onClick={() => disconnect()}
            >
                <CircleCheckIcon className="text-emerald-400" aria-label="Wallet connected" />
                {address.slice(0, 6)}...{address.slice(-4)}
            </Button>
        );
    }

    return (
        <Button
            variant="outline"
            className="rounded-full"
            onClick={() => {
                resetConnectError();
                connect({
                    connector: connectors[0],
                });
            }}
        >
            Connect <span className="max-sm:hidden">Wallet</span>
            <Wallet2Icon />
        </Button>
    );
}