import React, { useRef} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css'


const Navbar = () => {

  const menuRef = useRef()
  const openMenu = ()=>{
    menuRef.current.style.right = '0'
  }

  const closeMenu = ()=>{
    menuRef.current.style.right = '-350px'
  }



  return (
    <div className='navbar'>
      <img src="" alt="logo" />
      <img src="" alt="menu" onClick={openMenu} className='nav-menu-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src="" alt="menu_close"  onClick={closeMenu} className='nav-menu-close' />
        <li> <AnchorLink className='anchor-link'  href='#home'> <p>Home</p> </AnchorLink>   </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#about'> <p>About Me</p> </AnchorLink>  </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#service'> <p>Services</p> </AnchorLink>  </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#work'>  <p>My Works</p> </AnchorLink> </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#contact'> <p>Contact</p> </AnchorLink>   </li>
        {/* <li></li> */}
      </ul>
      <div className="nav-connect">  <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me </AnchorLink> </div>
    </div>
  )
}

export default Navbar