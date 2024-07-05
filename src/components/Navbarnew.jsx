// import React from 'react';
import navLogo from "/deathrinlogo.png"

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-leftBlue to-rightBlue mx-auto rounded-b-lg max-w-[1296px] h-[80px]">
      <div className="flex justify-between items-center h-full px-4 lg:px-8 ">
        <div>
        <img src={navLogo} alt="Blue Image" className="w-74 h-74" />
        </div>
        <div className="flex-grow flex justify-end items-center space-x-12">
          <a href="/" className="navbar-link text-white hover:text-gray-400 transition duration-300 font-poppins font-normal text-custom">
            Tokenomics
          </a>
          <a href="/" className="navbar-link text-white hover:text-gray-400 transition duration-300 font-poppins font-normal ">
            Features
          </a>
          <a href="/contact" className="navbar-link text-yellow hover:text-gray-400 transition duration-300 font-rubik font-bold 
          border-2 border-yellow rounded-customet w-[163px] h-[50px] flex items-center justify-center text-center"
          >Connect Wallet</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
