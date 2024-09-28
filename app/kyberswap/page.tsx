"use client";
import React, { useEffect, useState } from "react";
import { Widget } from "@kyberswap/widgets";
import { useEthersSigner } from "@/ehterProvider/ethers";

const Swap = () => {
    const signer = useEthersSigner(); // Retrieve the signer

    const [provider, setProvider] = useState(null);

    useEffect(() => {
        if (signer) {
            setProvider(signer.provider || null); // Extract provider from signer
        }
    }, [signer]);

    const theme = {
        primary: "#1C1C1C",
        secondary: "#0F0F0F",
        dialog: "#313131",
        borderRadius: "20px",
        buttonRadius: "24px",
        stroke: "#505050",
        interactive: "#292929",
        accent: "##28E0B9",
        success: "189470",
        warning: "FF9901",
        error: "FF537B",
        text: "#FFFFFF",
        subtext: "A9A9A9",
        fontFamily: "Work Sans",
    };

    return (
        <div className="flex justify-center mt-10">
            {signer && (
                <Widget
                    client="wave"
                    theme={theme}
                    enableRoute={true}
                    enableDexes="kyberswap-elastic,uniswapv3,uniswap"
                    provider={signer.provider}
                    title={<div>Wave Swap</div>}
                />
            )}
        </div>
    );
};

export default Swap;


// 'use client'
// import Head from 'next/head'
// import Image from 'next/image'
// import { Widget } from '@kyberswap/widgets'
// import { ethers } from 'ethers'
// import { useEffect, useState } from 'react'
// import styled from 'styled-components'

// const Test = styled.div`
//   color: red;
// `

// export default function Home() {
//     const [wallet, setWallet] = useState<any>(null)
//     const [chainId, setChainId] = useState(1)
//     const [theme, setTheme] = useState<any>({
//         text: '#FFFFFF',
//         subText: '#A9A9A9',
//         primary: '#1C1C1C',
//         dialog: '#313131',
//         secondary: '#0F0F0F',
//         interactive: '#292929',
//         stroke: '#505050',
//         accent: '#28E0B9',
//         success: '#189470',
//         warning: '#FF9901',
//         error: '#FF537B',
//         fontFamily: 'Work Sans',
//         borderRadius: '16px',
//         buttonRadius: '999px',
//         boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
//     })

//     const defaultTokenOut: { [chainId: number]: string } = {
//         1: '0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202',
//         137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
//         // Add other chain IDs and token addresses as needed...
//     }

//     const [feeSetting, setFeeSetting] = useState({
//         feeAmount: 0,
//         feeReceiver: '',
//         chargeFeeBy: 'currency_in' as 'currency_in' | 'currency_out',
//         isInBps: true,
//     })

//     useEffect(() => {
//         const initProvider = async () => {
//             if (window.ethereum) {
//                 const provider = new ethers.providers.Web3Provider(window.ethereum)
//                 const network = await provider.getNetwork()
//                 setChainId(network.chainId)
//             }
//         }
//         initProvider()
//     }, [])

//     const connectWallet = async () => {
//         if (!window.ethereum) {
//             alert("Please install MetaMask!");
//             return;
//         }

//         try {
//             const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//             const provider = new ethers.providers.Web3Provider(window.ethereum);
//             setWallet(accounts[0]); // Set the first account as the connected wallet
//         } catch (error) {
//             console.error("Connection error:", error);
//         }
//     };

//     const disconnectWallet = () => {
//         setWallet(null); // Clear the connected wallet
//     };

//     return (
//         <>
//             <Head>
//                 <title>Create Next App</title>
//                 <meta name='description' content='Generated by create next app' />
//                 <meta name='viewport' content='width=device-width, initial-scale=1' />
//                 <link rel='icon' href='/favicon.ico' />
//             </Head>
//             <div className='App'>
//                 <div>
//                     <h1>KyberSwap Widget Demo</h1>
//                     <div className='card'>
//                         <button onClick={wallet ? disconnectWallet : connectWallet} className='button'>
//                             {!wallet ? 'Connect Wallet' : 'Disconnect'}
//                         </button>
//                     </div>

//                     {/* Theme selection, fee setting inputs, etc. */}

//                     <Widget
//                         client='widget-nextjs-demo'
//                         theme={theme}
//                         tokenList={[]}
//                         provider={new ethers.providers.Web3Provider(window.ethereum)} // Use the provider created from window.ethereum
//                         defaultTokenOut={defaultTokenOut[chainId]}
//                         feeSetting={feeSetting.feeAmount && feeSetting.feeReceiver ? feeSetting : undefined}
//                         enableRoute
//                     />
//                 </div>
//             </div>
//         </>
//     )
// }
