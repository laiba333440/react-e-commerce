import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart icon.png';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  const [menu,setMenu]= useState("Shop");
  const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>PIXEL PRO</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("tripods")}}><Link style={{ textDecoration: 'none' }}to='/tripods'>Tripods</Link>{menu==="tripods"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("monopods")}}><Link style={{ textDecoration: 'none' }}to='/monopods'>Monopods</Link>{menu==="monopods"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("microphone")}}><Link style={{ textDecoration: 'none' }}to='/microphone'>Microphone</Link>{menu==="microphone"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
