import React, { useState } from 'react'
import './Home.css'


const Home = () => {

  const [menuOpen , setMenuOpen] = useState(false)

  const toggleMenu = () =>{
    setMenuOpen(!menuOpen)
  }


  return (
    <div>
      <nav className='nav'>
        <div className='menu' onClick={toggleMenu}> &#9776;  </div> 
          <ul className={`nav-items ${menuOpen?'open' : '' }`}>
            <li>
              <a className='hove' href='../Component/Home.jsx'>HOME</a>
            </li>
          
            <li>
             <a className='hove' href='../Component/Education.jsx' > EDUCATION </a>
            </li>
          
            <li>
              <a className='hove' href='../Component/Project.jsx'>PROJECT</a>
              </li>

              <li>
                <a  className='hove' href='../Component/About.jsx' > ABOUT </a>
              </li>
          
            <li>
             <a className='hove' href='../Component/Project.jsx'> CONTACT </a>
            </li>
          </ul> 
      </nav>
      </div>  
  )
}

export default Home