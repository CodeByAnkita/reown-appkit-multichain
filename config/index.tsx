
// //config/index.tsx
// import { cookieStorage, createStorage, http } from '@wagmi/core'
// import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
// import { mainnet, arbitrum, sepolia, solana, polygon, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'

// // Get projectId from https://cloud.reown.com
// export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

// if (!projectId) {
//     throw new Error('Project ID is not defined')
// }

// export const networks = [mainnet, arbitrum, sepolia, polygon, solana, solanaTestnet, solanaDevnet]

// //Set up the Wagmi Adapter (Config)
// export const wagmiAdapter = new WagmiAdapter({
//     storage: createStorage({
//         storage: cookieStorage
//     }),
//     ssr: true,
//     projectId,
//     networks
// })


// export const config = wagmiAdapter.wagmiConfig



import { cookieStorage, createStorage, http } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { SolanaAdapter } from "@reown/appkit-adapter-solana";
import {
    SolflareWalletAdapter,
    PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets";

const {
    mainnet,
    arbitrum,
    avalanche,
    base,
    binanceSmartChain,
    optimism,
    polygon,
    solana,
    solanaTestnet,
    solanaDevnet
} = require("@reown/appkit/networks");

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
    throw new Error("Project ID is not defined");
}

const networks = [
    mainnet,
    arbitrum,
    polygon,
    avalanche,
    base,
    binanceSmartChain,
    optimism,
    solana,
    solanaTestnet,
    solanaDevnet
];

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
        storage: cookieStorage,
    }),
    ssr: true,
    projectId,
    networks,
});
export const solanaWeb3JsAdapter = new SolanaAdapter({
    wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});
