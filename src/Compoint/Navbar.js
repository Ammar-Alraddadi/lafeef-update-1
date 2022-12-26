import React from "react";
import reactLogo from "../Compoint/React-icon.png"

export default function Navbar(){
    return (
        <nav>
          
            <ul className="line">
            <div className="left">
  <li ><a href="#Home">Home</a></li>
  <li ><a href="#Invest">Invest</a></li>
  <li ><a href="#Rise">Rise</a></li>
  <li ><a href="#About">About</a></li>
  </div>
  <div className="right">
  <li ><a href="#Sign Up">Sign Up</a></li>
  <li><a href="#Log In">Log In</a></li>
  <li><a href="#AR">AR</a></li>
  </div>
  
</ul>
        </nav>
    )
}