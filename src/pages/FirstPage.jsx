// src/pages/FirstPage.jsx
// import React from 'react';
import backgroundImage from '/1bg.png';
import secondBackgroundImage from '/blue.png'; 
import moonImage from '/moon.png';
import leftImage from '/frontleft.png'
import rightImage from '/frontright.png'
import mount from '/mountain.png'
import mens from '/twomen.png'
import mens2 from '/mens2x.png'
import mens4 from '/mens4x.png'

const FirstPage = () => {
  return (
    <>
      {/* First Section */}
      <div 
        className="relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 h-[450px]" 
        // style={{
        //   backgroundImage: `url(${backgroundImage})`,
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundPosition: 'center',
        //   height: '450px'
        // }}
      >
        <img 
          src={backgroundImage} 
          alt='1bg' 
          className='absolute inset-0 w-full h-full object-cover z-0' 
        />

        <img 
          src={leftImage} 
          alt='left' 
          className='absolute left-0 top-0 w-[740px] h-[550px] object-cover z-10' 
        />

        <img 
          src={rightImage} 
          alt='right' 
          className='absolute right-0 top-0 w-[740px] h-[550px] object-cover z-10' 
        />
        
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
              text-white font-bold py-2 px-4 rounded-customet w-[210px] h-[48px]">            
              BuY NoW
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div 
        className="relative flex flex-col justify-center items-center py-8 overflow-hidden w-full h-full" 
        
        // style={{
        //   backgroundImage: `url(${secondBackgroundImage})`,
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundPosition: 'center',
        //   // height: '850px',
        //   // width: '1500px'
        //   // top: '150px'
        // }}        
      >
        <img 
          src={secondBackgroundImage} 
          alt="2-background" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />

        <img
          src={mount}
          alt='mountain'
          className='absolute inset-0 w-full h-full object-cover z-0'
        />

        {/* <img 
          src={moonImage} 
          alt="moon" 
          className="absolute inset-y-2 object-cover z-0 h-500 w-770"
        /> */}

        <div 
        className="relative flex flex-col justify-center items-center px-4 py-8 w-full h-full" 
        // style={{
        //   backgroundImage: `url(${mount})`,
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundPosition: 'center',
        //   // height: '500px',
        //   // width: '770px',
        //   // height: '722px',
        //   // width: '1447px',
        //   top: '0px',
        //   // left: '100px'
        // }}
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
          top: '-50px',
          left: '70px'
        }}
        >
          <img
          src={mens}
          alt='mens'
          className='absolute inset-0 w-full h-full object-cover z-0 w-1436 h-720'
        />

        <div  
        // className="relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 w-full h-full border" 
        // className="relative flex flex-col justify-center items-center px-4 py-8 w-full"
        // style={{
        //   backgroundImage: `url(${mens4})`,
        //   backgroundSize: 'contain',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundPosition: 'center',
        //   // height: '720px',
        //   width: '100%',
        //   top: '140px',
        //   // left: '70px'
        // }}
        >
        </div>

        </div>

        </div>
      </div>
    </>
  );
};

export default FirstPage;
