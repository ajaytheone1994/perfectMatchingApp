import React from 'react'
import './style.css'
const Header =props=> {
    return (
         
             <header className="header">
                 <nav className="header-Menu">
                     {/* <a href="#">Home</a>
                     <a href="#">AboutUs</a>
                     <a href="#">ContactUs</a> */}
              <img src={require('../../assets/brand.png')} height="40px"/>
                     
                 </nav>
                 <div>
                <a href="https://www.facebook.com/profile.php?id=100008978260382"><img src={require('../../assets/icon/facebook.png')} className="zoom"/></a>&nbsp;&nbsp;
                <a href="https://twitter.com/ajaybat16894008"><img src={require('../../assets/icon/twitter.png')} className="zoom"/></a>&nbsp;&nbsp;
                <a href="https://www.instagram.com/ajay_never_giveup/?hl=en"><img src={require('../../assets/icon/linkedin.png')} className="zoom"/></a>
                </div>
             </header>
             
         
    )
}

export default Header;