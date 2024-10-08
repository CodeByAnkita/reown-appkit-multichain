//app/page.tsx
'use client'
import { useAccount } from 'wagmi';
import { useEffect } from 'react';

export default function Home() {
  // const { isConnected } = useAccount();
  const { address, isConnected } = useAccount();


  useEffect(() => {
    if (isConnected) {
      console.log('Wallet Address:', address);
    }
  }, [isConnected, address]);
  return (
    <main className="min-h-screen px-8 py-8 pb-12 flex-1 flex flex-col items-center">

      <h2 className="my-8 text-2xl font-bold leading-snug text-center">Examples</h2>
      <div className="max-w-4x1">
        <div className="grid bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <h3 className="text-sm font-semibold bg-gray-100 p-2 text-center">Connect your wallet</h3>
          <div className="flex justify-center items-center p-4">
            <w3m-button />
          </div>
        </div>
        <br></br>
        {isConnected && (
          <div className="grid bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <h3 className="text-sm font-semibold bg-gray-100 p-2 text-center">Network selection button</h3>
            <div className="flex justify-center items-center p-4">
              <w3m-network-button />
            </div>
          </div>
        )}
      </div>
    </main>
  );

};







