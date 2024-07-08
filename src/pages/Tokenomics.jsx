import tokenomicsBg from '/tokenBg.png';
import tokenomicsbg2 from '/tokenomicsbg2.png';
import box from '/tokenbox.png';
import leftBox from '/leftTokenbox.png';
import rightBox from '/rightTokenbox.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swipernew from './Swipernew';
import featurebg from '/featuresbg.png'

const Tokenomics = () => {
  return (
    <div className="relative flex flex-col items-center h-[950px]">
      
      {/* Tokenomics Background Section */}
      <div className="relative w-full mt-[-770px] sm:mt-[-580px] md:mt-[10px]">
        <img 
          src={tokenomicsBg} 
          alt="Tokenomics Background" 
          className="w-full h-[80px] sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-[316px] object-cover relative bottom-10 -mt-[10px] md:-mt-1 lg:-mt-5" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-[30px] sm:text-[40px] lg:text-[51px] text-center font-deadpool font-normal -mt-[80px]">
            TOKENOMICS
          </h1>
        </div>
      </div>
      
      {/* Tokenbox Image */}
      <div className="relative w-full flex justify-center mt-[0px] sm: z-10">

        <Swipernew/>
        
      </div>

      <div className=''> 
        <button className="mt-[200px] text-base sm:text-lg lg:text-xl bg-gradient-to-r from-leftbuynow to-rightbuynow hover:bg-blue-700 
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
