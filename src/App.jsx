// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Swiper from 'swiper';
import './App.css'
// import Navbar from './components/Navbar'
import Navbarnew from './components/Navbarnew'
import FirstPage from './pages/FirstPage'
import Tokenomics from './pages/Tokenomics'
import backgroundImage from '/1bg.png';
import Swipernew from './pages/Swipernew';
import Features from './pages/Features';
import Twits from './pages/Twits';
// import SwiperCoverflow from './SwiperCoverflow';
// import './styles.scss';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <div 
      style={{
          backgroundImage: `url(${backgroundImage})`,   
          backgroundColor: 'darkblue',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: 'auto'
        }}
        >
        <Navbarnew />
        <FirstPage />
        {/* <Tokenomics /> */}
        {/* <Swipernew /> */}
        {/* <Features /> */}
        {/* <Twits /> */}

      </div>
      <div>
        
      </div>
    </>
  )
}

export default App
