import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Services from './Component/Services/Services'
import Works from './Component/Works/Works'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

function App() {
 

  return (
    <>
      <div>

        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Works/>
        <Contact/>
        <Footer/>
       
      </div>
     </>
  )
}

export default App
