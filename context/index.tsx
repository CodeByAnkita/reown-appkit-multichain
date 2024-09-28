// //context/index.tsx
// 'use client'

// import { wagmiAdapter, projectId } from '@/config'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { createAppKit } from '@reown/appkit/react'
// import { mainnet, arbitrum, avalanche, base, optimism, polygon, sepolia, solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
// import React, { type ReactNode } from 'react'
// import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
// import { SolanaAdapter } from '@reown/appkit-adapter-solana';
// import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'

// // Set up queryClient
// const queryClient = new QueryClient()

// if (!projectId) {
//     throw new Error('Project ID is not defined')
// }

// // Set up Solana adapter
// const solanaWeb3JsAdapter = new SolanaAdapter({
//     wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
// });

// // Set up metadata
// const metadata = {
//     name: "appkit-example-scroll",
//     description: "AppKit Example - Scroll",
//     url: "https://scrollapp.com", // origin must match your domain & subdomain
//     icons: ["https://avatars.githubusercontent.com/u/179229932"]
// }

// // Create the modal
// const modal = createAppKit({
//     adapters: [wagmiAdapter, solanaWeb3JsAdapter],
//     projectId,
//     networks: [mainnet, arbitrum, avalanche, base, optimism, polygon, sepolia, solana, solanaTestnet, solanaDevnet],
//     defaultNetwork: mainnet,
//     metadata: metadata,
//     features: {
//         analytics: true, // Optional - defaults to your Cloud configuration
//         email: true, // Optional - defaults to
//         socials: ['google', 'x', 'github', 'facebook', 'farcaster', 'apple', 'facebook'],
//         emailShowWallets: true, // Optional - defaults to
//     },
//     themeMode: 'light'
// })

// function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
//     const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

//     return (
//         <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
//             <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//         </WagmiProvider>
//     )
// }

// export default ContextProvider


"use client";
import { wagmiAdapter, projectId, solanaWeb3JsAdapter } from "../config/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import {
    mainnet,
    arbitrum,
    avalanche,
    base,
    binanceSmartChain,
    optimism,
    polygon,
    solana,
    solanaTestnet, solanaDevnet
} from "@reown/appkit/networks";
import React, { ReactNode } from "react";
import { cookieToInitialState, WagmiProvider } from "wagmi";

// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
    throw new Error("Project ID is not defined");
}

// Set up metadata
const metadata = {
    name: "appkit-example-scroll",
    description: "AppKit Example - Scroll",
    url: "https://scrollapp.com",
    icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// Create the modal
export const modal = createAppKit({
    adapters: [wagmiAdapter, solanaWeb3JsAdapter],
    projectId,
    networks: [
        mainnet,
        arbitrum,
        avalanche,
        base,
        optimism,
        polygon,
        binanceSmartChain,
        solana,
        solanaTestnet, solanaDevnet
    ],
    defaultNetwork: mainnet,
    metadata: metadata,
    features: {
        analytics: true, // Optional - defaults to your Cloud configuration
        email: true, // Optional - defaults to
        socials: ['google', 'x', 'github', 'facebook', 'farcaster', 'apple', 'facebook'],
                emailShowWallets: true, // Optional - defaults to
    },
});

function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
    const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig, cookies);


    return (
        <WagmiProvider
            config={wagmiAdapter.wagmiConfig}
            initialState={initialState}
        >
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    );
}

export default ContextProvider;
