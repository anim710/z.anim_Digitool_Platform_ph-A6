import { useState } from 'react'
import NavBar from './Components/NavBar.jsx'
import Banner from './Components/Banner.jsx'
import Footer from './Components/Footer.jsx'
import Pricing from './Components/Pricing.jsx'

function App() {
  

  return (
    <>
      
          <NavBar />
          {/* <h1 className='text-red-500'>hello world</h1> */}
          <Banner />
          <Pricing />
         <Footer />
    </>
  )
}

export default App
