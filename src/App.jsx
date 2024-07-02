// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './components/Navbar'
import Navbarnew from './components/Navbarnew'
import FirstPage from './pages/FirstPage'
import Tokenomics from './pages/Tokenomics'
import backgroundImage from '/1bg.png';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <div style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: ''
        }}>
        <Navbarnew />
        <FirstPage />
        <Tokenomics />
      </div>
      <div>
        
      </div>
    </>
  )
}

export default App
