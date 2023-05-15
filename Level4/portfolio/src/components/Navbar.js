import logo from "../images/nav-logo.png";
import React from "react";

import {HashLink} from "react-router-hash-link";
import MobileNav from "./MobileNav";
import DeskNav from "./DeskNav";

const Navbar = () => {
  return (
    <div className='nav'>
      {/* Full Nav Bar Desk */}
      <div className='full-nav'>
        {/* Left Side of Nav */}
        <div className='nav-home'>
          <HashLink smooth to='/#' className='nav-link'>
            <img src={logo} alt='' />
            <h2>Dave Roberts</h2>
          </HashLink>
        </div>
        {/* Right Side of Nav */}
        <div className='nav-menu'>
          <div className='nav-links'>
            <DeskNav />
          </div>
          {/* Mobile */}
          <div className='nav-links'>
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
