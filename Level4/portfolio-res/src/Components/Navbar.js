import React from "react";
import "./navbar.css";
import NavMobile from "./NavMobile";
import NavDesk from "./NavDesk";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt=""/>
        <h2>Dave Roberts</h2>
      </div>
      <div className='navbar-right'>
        <NavMobile/>
        <NavDesk/>
      </div>
    </nav>
  );
};

export default Navbar;
