import tokenomicsBg from '/tokenBg.png';
import tokenomicsbg2 from '/tokenomicsbg2.png';
import box from '/tokenbox.png';
import leftBox from '/leftTokenbox.png';
import rightBox from '/rightTokenbox.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swipernew from './Swipernew';

const Tokenomics = () => {
  return (
    <div className="relative flex flex-col items-center h-[950px]">
      
      {/* Tokenomics Background Section */}
      <div className="relative w-full">
        <img 
          src={tokenomicsBg} 
          alt="Tokenomics Background" 
          className="w-full h-[316px] object-cover " 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl text-center font-deadpool font-normal text-customff">
            TOKENOMICS
          </h1>
        </div>
      </div>
      
      {/* Tokenbox Image */}
      <div className="relative w-full flex justify-center mt-[50px]  z-10">

        <Swipernew/>
        
      </div>

      <div>
        <button className="mt-12 text-base sm:text-lg lg:text-xl bg-gradient-to-r from-leftbuynow to-rightbuynow hover:bg-blue-700 
        text-white font-bold py-2 px-4 rounded-customet w-[210px] h-[48px]">            
          BuY NoW
        </button>
      </div>
      
      {/* Second Background Image */}
      <img 
        src={tokenomicsbg2} 
        alt="Tokenomics2" 
        className="w-full h-[1700px] object-cover z-0" 
      />
      
    </div>
  );
};

export default Tokenomics;
