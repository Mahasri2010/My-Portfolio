import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Services from './Component/Services/Services'
import Works from './Component/Works/Works'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import{Routes,Route} from 'react-router-dom'

const App = ()=> {
 

  return (
    <>
      <div>

        <Navbar/>
        <Routes>
          <Route path='/' element={<Hero />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/service' element={<Services />}/>
          <Route path='/work' element={<Works />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/foot' element={<Footer />}/>
        </Routes>
       
        
       
       
      </div>
     </>
  )
}

export default App
