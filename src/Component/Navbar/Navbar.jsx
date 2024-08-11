import React, { useState } from 'react'
import './Navbar.css'


const Navbar = () => {

  const[menu,setMenu]=useState("Home")

  return (
    <div className='navbar'>
        <img src="" alt="logo" />
        <ul className="nav-menu">
            <li> <p onClick={()=>setMenu("Home")}>Home</p> {menu==="Home"?<img /> :<></>} </li>
            <li> <p>About Me</p> </li>
            <li> <p>Services</p> </li>
            <li> <p>Projects</p> </li>
            <li> <p>Contact</p> </li>
            {/* <li></li> */}
        </ul>
        <div className="nav-connect"> Connect With Me</div>
    </div>
  )
}

export default Navbar