import React from 'react'
import logo from "../Assets/logo.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pintester_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"
import "./Footer.css"
const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div>
                <img src={logo} alt="Shopper" />
                <h2>Shopper</h2>
            </div>
            <div>
                <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </div>
            <div className="socialMedia">
                <img src={instagram_icon} alt="" />
                <img src={pintester_icon} alt="" />
                <img src={whatsapp_icon} alt="" />
            </div>
            <hr />
            <p>Copyright @2026 - All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer