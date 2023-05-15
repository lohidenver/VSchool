import React from "react";
import "./navbar.css";
import NavMobile from "./NavMobile";
import NavDesk from "./NavDesk";
import {Link} from "react-router-dom";

import {GiArtificialIntelligence} from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <Link to='/'>
          <GiArtificialIntelligence className='ai-home' />
        </Link>
        <h3 className='page-title'>AI exploration</h3>
      </div>
      <div className='navbar-right'>
        <NavMobile />
        <NavDesk />
      </div>
    </nav>
  );
};

export default Navbar;
