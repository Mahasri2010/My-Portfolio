import React from 'react'
import './About.css'
import ProfileImage from '../../assets/ProfileImage.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src="" alt="design" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={ProfileImage} alt="profile image" style={{width:'250px',height:'300px'}} />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, neque? </p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, earum?</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>React Js</p><hr style={{width:"30%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p> YEARS OF EXPERIENCE </p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>90</h1>
                    <p> PROJECT COMPLETED</p>
                </div>
            </div>
        </div>
    )
}

export default About