// src/pages/FirstPage.jsx
// import React from 'react';
import backgroundImage from '/1bg.png';
import secondBackgroundImage from '/blue.png'; 
import moonImage from '/moon.png';
import leftImage from '/frontleft.png'
import rightImage from '/frontright.png'
import mount from '/mountain.png'
// import mens from '/twomen.png'
// import mens2 from '/mens2x.png'
import mens4 from '/mens4x.png'

const FirstPage = () => {
  return (
    <>
      {/* First Section */}
      <div className="relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 h-[450px]">

        <img 
          src={backgroundImage} 
          alt='1bg' 
          className='absolute inset-0 w-full object-cover z-0 h-[320px] sm:h-[500px] md:h[700px] xl:h-full' 
        />

        <img 
          src={leftImage} 
          alt='left' 
          className='absolute left-0 top-0 w-[740px] object-cover z-10 h-[100px] sm:h-[300px] md:h[450px] lg:[550px] xl:h-full' 
        />

        <img 
          src={rightImage} 
          alt='right' 
          className='absolute right-0 top-0 w-[740px] object-cover z-10 h-[100px] sm:h-[300px] md:h[450px] lg:[550px] xl:h-full' 
        />
        
        <div className="relative z-10 text-center text-white">
          <div>
            <p className="font-deadpool font-normal h-[30px] -mt-[120px] md:mt-0 md:text-customff text-[23px]">WELCOME TO</p>
            <p className='font-deadpool font-normal md:text-large text-[50px]'>DEATHRIN</p>
          </div>
          <div>
            <p className="mt-2 text-base text-[12px] sm:text-[14px] md:text-[20px] lg:text-xl max-w-6xl mx-auto font-rubik font-normal">
              Deathrine is a revolutionary token designed to redefine decentralized finance. 
              Inspired by the fierce and fearless characters of Deadpool and Wolverine, 
              Deathrine combines strength, agility, and resilience in the world of blockchain.
            </p>
          </div>
          <div>
            <button className="mt-6 text-base sm:text-lg lg:text-xl bg-gradient-to-r from-leftbuynow to-rightbuynow hover:bg-blue-700 
              text-white font-bold py-2 px-4 rounded-customet w-[170px] h-[38px] md:w-[210px] md:h-[48px]">            
              BuY NoW
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative flex flex-col justify-center items-center overflow-hidden w-full h-screen -top-[140px] md:top-0">

        <img 
          src={secondBackgroundImage} 
          alt="2-background" 
          className="absolute inset-0 w-full h-[300px] md:w-full md:h-full object-cover z-0" 
        />

        <img
          src={mount}
          alt='mountain'
          className='absolute inset-0 w-full h-[300px] sm:w-full sm:h-full md:h-full md:w-full object-cover -translate-y-12 lg:-top-[100px]'
        />

        <img
          src={moonImage}
          alt='moon'
          className='relative inset-0 object-cover z-0 lg:left-9 top-[-380px] md:top-[-100px] lg:top-[-180px] sm:w-[500px] md:w-[770px] md:h-[500px] '
        />

        <img
          src={mens4}
          alt='mens'
          className='absolute inset-0 w-full h-[230px] sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full top-[20px] lg:top-0'
        />

      </div>
    </>
  );
};

export default FirstPage;
