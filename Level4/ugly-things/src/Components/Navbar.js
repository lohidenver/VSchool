import React from "react";
import {useState} from "react";
import "./navbar.css";
import NavMobile from "./NavMobile";
import NavDesk from "./NavDesk";


const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <h2>Ugly Things</h2>
        
      </div>
      <div className='navbar-right'>
        <NavMobile />
        <NavDesk />
      </div>
    </nav>
  );
};

export default Navbar;
