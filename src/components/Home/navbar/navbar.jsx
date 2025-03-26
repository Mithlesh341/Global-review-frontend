import React from 'react'
import './navbar.css'
import image from '../../../assets/lo.png'
import { StoreContext } from '../../../context/StoreContext'
const navbar = () => {
 const url="http://localhost:5173/signin";
  return (
    <div>
        <nav className="navbar">
        <div className="logo" >
            <img src={image} style={{width:100,height:65,paddingTop:0}} alt="image" />
            <p style={{paddingTop:18}}> GLOBAL REVIEW </p></div>
        <div className="menu-toggle" onclick="toggleMenu()">☰</div>
        <div className="menu">
            <a   href={url}>Sign in</a>
            {/* <!-- <a href="../review/review.html">Write a review</a> --> */}
            <div className="dropdown">
            <a href="/category" className='more' >Categories</a>
                <div>
                    {/* <a href="#">Electronics</a>
                    <a href="#">Home & Kitchen</a>
                    <a href="#">Beauty & Health</a>
                    <a href="#">Automotive</a> */}
                </div>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default navbar
