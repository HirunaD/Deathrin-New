// src/pages/FirstPage.jsx
import React from 'react';
import backgroundImage from '/1bg.png';
import secondBackgroundImage from '/blue.png'; 
import moonImage from '/moon.png';
import leftImage from '/frontleft.png'

const FirstPage = () => {
  return (
    <>
      {/* First Section */}
      <div 
        className="relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 h-screen" 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: ''
        }}
      >
        {/* <div>
        className="relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 h-screen" 
        style={{
          backgroundImage: `url(${leftImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: ''
        }}
        </div> */}
        <div className="relative z-10 text-center text-white">
          <div>
            <p className="font-deadpool font-normal text-customff">WELCOME TO</p>
            <p className='font-deadpool font-normal text-large'>DEATHRIN</p>
          </div>
          <div>
            <p className="mt-2 text-base sm:text-lg lg:text-xl max-w-6xl mx-auto font-rubik font-normal text-customtw">
              Deathrine is a revolutionary token designed to redefine decentralized finance. 
              Inspired by the fierce and fearless characters of Deadpool and Wolverine, 
              Deathrine combines strength, agility, and resilience in the world of blockchain.
            </p>
          </div>
          <div>
            <button className="mt-6 text-base sm:text-lg lg:text-xl bg-gradient-to-r from-leftbuynow to-rightbuynow hover:bg-blue-700 
              text-white font-bold py-2 px-4 rounded-customet"
              style={{ width: '210px', height: '48px' }}
            >
              BuY NoW
            </button>
          </div>
        </div>
        {/* <div className="absolute bottom-0 w-full flex justify-center text-white text-xl font-bold mb-2">
          Hii
        </div> */}
      </div>

      {/* Second Section */}
      <div 
        className="relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8" 
        style={{
          backgroundImage: `url(${secondBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '650px',
          // width: '1500px'
        }}
      >
        <div 
        className="relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8" 
        style={{
          backgroundImage: `url(${moonImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '500px',
          width: '770px',
          top: '50px',
          left: '100px'
        }}
      >
      </div>
      </div>
    </>
  );
};

export default FirstPage;
