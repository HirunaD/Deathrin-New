import React from 'react';
import twoface from '/twoface.png';

function Featuresnew() {
  return (
    <div className="relative flex w-full h-screen">
      
      {/* Left half */}
      <div className="w-1/2 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 -ml-8">
        <div className="">
          <img
            src={twoface}
            alt="twofaces"
            className="relative inset-0 z-0 w-[883px] h-[883px]"
          />
        </div>
      </div>
      
      {/* Right half */}
      <div className="w-1/2 flex flex-col items-start justify-center p-4 sm:p-6 lg:p-8 ml-[150px]">
        <div>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-roguehero font-normal text-customft mb-5 h-[60px]">
            FEATURES
          </h1>
          <p className="text-white text-lg sm:text-xl lg:text-2xl font-rubik text-customtw max-w-lg">
            Deathrine combines robust security with the agility of DeFi solutions, inspired by the bold characters of 
            Deadpool and Wolverine. Enjoy secure and transparent transactions on our advanced blockchain platform. 
            Engage in lending, borrowing, and staking with low fees and fast processing speeds. Benefit from cross-chain 
            compatibility, allowing seamless integration across various blockchain networks. As a community-driven token, 
            Deathrine empowers you to have a say in the platform's future, ensuring a decentralized and inclusive financial 
            system. Embrace the future of finance with the power and resilience of Deathrine.            
          </p>
        </div>
        <div>
            <button className="mt-12 text-base sm:text-lg lg:text-xl bg-gradient-to-r from-leftbuynow to-rightbuynow hover:bg-blue-700 
             text-white font-bold py-2 px-4 rounded-customet w-[210px] h-[48px]">            
                BuY NoW
            </button>
        </div>
      </div>
      
    </div>
  );
}

export default Featuresnew;
