// //app/cowswap/page.tsx
// 'use client'
// import { useEffect } from 'react';
// import { createCowSwapWidget, CowSwapWidgetParams } from '@cowprotocol/widget-lib';
// import { Web3Modal } from '@web3modal/react'; // Assuming you're using Web3Modal for wallet connection

// const CowSwapPage = () => {
//     useEffect(() => {
//         const widgetContainer = document.getElementById('cowswap-widget');

//         if (!widgetContainer) return;

//         const params: CowSwapWidgetParams = {
//             appCode: 'YOUR_APP_CODE', // Replace with your app code
//             width: '600px',
//             height: '640px',
//             sell: { asset: 'DAI' },   // Default sell token
//             buy: { asset: 'USDC', amount: '0.1' }, // Default buy token and amount
//             // provider: window.ethereum, // Connect to the user's wallet (e.g., Metamask)
//             chainId: 1,  // Default to Ethereum Mainnet, change as per your needs
//             theme: 'light', // Use 'dark' for a dark theme if needed
//         };

//         createCowSwapWidget(widgetContainer, { params });
//     }, []);

//     return (
//         <div className="cow-swap-page">
//             {/* Web3Modal button for connecting wallet */}
//             <Web3Modal />

//             {/* Container for the CoW Swap widget */}
//             <div id="cowswap-widget" className="cowswap-widget-container" />
//         </div>
//     );
// };

// export default CowSwapPage;


'use client'
import { useEffect } from 'react';
import { createCowSwapWidget, CowSwapWidgetParams } from '@cowprotocol/widget-lib';
import { Web3Modal } from '@web3modal/react';

const CowSwapPage = () => {
    useEffect(() => {
        const widgetContainer = document.getElementById('cowswap-widget');

        if (!widgetContainer) return;

        const params: CowSwapWidgetParams = {
            appCode: 'YOUR_APP_CODE', // Replace with your app code
            width: '600px',
            height: '640px',
            sell: { asset: 'DAI' },   // Default sell token
            buy: { asset: 'USDC', amount: '0.1' }, // Default buy token and amount
            chainId: 1,  // Default to Ethereum Mainnet, change as per your needs
            theme: 'light', // Use 'dark' for a dark theme if needed
        };

        createCowSwapWidget(widgetContainer, { params });
    }, []);

    return (
        <div className="cow-swap-page">
            {/* Web3Modal button for connecting wallet */}
            <Web3Modal projectId= "a96edd3b4f16fffb290e8f26f8728b80" />

            {/* Container for the CoW Swap widget */}
            <div id="cowswap-widget" className="cowswap-widget-container" />
        </div>
    );
};

export default CowSwapPage;
 
