import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'

const Hero = () => {
  return (
    <div id='home' className="hero">
        <img src="" alt="Profile Image" />
        <h1> <span>I'm Mahasri</span> , Web Developer .</h1>
        <p>I am a Fresher </p>
        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me </AnchorLink></div>
            <div className="hero-resume">My Resume </div>
        </div>
    </div>
  )
}

export default Hero