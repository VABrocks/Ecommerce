import "./Navbar.css";

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import "./Navbar.css"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LogiSignUp from "../../Pages/LoginSignUp";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {

    const [pageSwitchStatus,setPageSwitchStatus] = useState("home");
    const {cartNumber}=useContext(ShopContext)
  return (
    <div className='navbar'>
<div className="nav-logo">
    <Link to="/">
    <img onClick={()=>{setPageSwitchStatus("home")}} src={logo} alt="It is a logo" />
    </Link>
    <p>Shopper</p>
</div>
<ul>
    <Link to="/">
    <li onClick={()=>{setPageSwitchStatus("home")}}>Shop {pageSwitchStatus==="home"?<hr/>:<></>}</li>
     </Link>
    <Link to="/mens">
    <li onClick={()=>{setPageSwitchStatus("men")}}>Men {pageSwitchStatus==="men"?<hr/>:<></>}</li>
    </Link>
    <Link to="/womens">
    <li onClick={()=>{setPageSwitchStatus("women")}}>Women {pageSwitchStatus==="women"?<hr/>:<></>}</li>
    </Link>
    <Link to="/kids">
    <li onClick={()=>{setPageSwitchStatus("kids")}}>Kids {pageSwitchStatus==="kids"?<hr/>:<></>}</li>
    </Link>   
</ul>
<div className="nav-login-cart">
    <button onClick={()=>{setPageSwitchStatus("login")}}><Link to="/login">Login</Link></button>
    <Link to="/cart"><img onClick={()=>{setPageSwitchStatus("cart")}} src={cart_icon} alt="It is a cart" /></Link>
    <div className="cart_counter">
        {cartNumber}
    </div>
</div>
    </div>
  )
}

export default Navbar


