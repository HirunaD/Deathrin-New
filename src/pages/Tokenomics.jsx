// src/pages/Tokenomics.jsx
// import React from 'react';
import tokenomicsBg from '/tokenBg.png'

const Tokenomics = () => {
  return (
    <div className="relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
        <div className="relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8" 
        style={{
          backgroundImage: `url(${tokenomicsBg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '500px',
          width: '770px',
          top: '50px',
          left: '100px'
        }}>

        </div>
      <h1 className="text-3xl font-bold text-yellow">Tokenomics</h1>
      <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-6xl mx-auto font-rubik font-normal text-yellow">
        hii
      </p>
    </div>
  );
};

export default Tokenomics;
