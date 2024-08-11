import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src="" alt="footer-logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam nemo in reiciendis!</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src="" alt="user_icon" />
                        <input type="email" placeholder='Enter your Email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <p className="footer-bottom-left"> &#169; 2024 Alex Bennett . All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>

        </div>
    )
}

export default Footer