import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import insta_logo from '../Assets/instagram_icon.png'
import whats_logo from '../Assets/whatsapp_icon.png'
import pint_logo from '../Assets/pinterest_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-logo">
    <img src={footer_logo} alt="" className="src" />
        </div> 
        <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
        <img src={insta_logo} alt="" className="src" />
            </div>
            <div className="footer-icons-container">
        <img src={whats_logo} alt="" className="src" />
            </div>
            <div className="footer-icons-container">
        <img src={pint_logo} alt="" className="src" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr></hr>
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
