// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { assets } from '../../assests/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
           <p> hi everyone  vauyyfa pa chfo qaaohowae oahfo  afirog  iofhawo  ppfh  pqerg9pre9r rg8qjgflkdjf  jwla fl ak. welcome to zomato </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
      <h2> company </h2>
      <ul>
        <li>Home</li>
        <li>about us</li>
        <li>Delivery </li>
        <li>Privacy policy</li>
      </ul>
        </div>
        <div className="footer-content-right">
             <h2>Get in touch</h2>
             <ul>
                <li>+91 8465048210</li>
                <li> vinayvrd9@gmail.com</li>
             </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        CopyRight 2024 @Tomato.com . All rights are reserved 
      </p>
    </div>
  )
}

export default Footer
