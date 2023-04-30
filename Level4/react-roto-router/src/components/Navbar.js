import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/mario.png";
import DarkMode from "./DarkMode/DarkMode";

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-left'>
        <Link to='/' className='nav-link'>
          <img src={logo} alt='' />
          <h2 className='nav-title'>Mario Bros. Plumbing</h2>
        </Link>
      </div>
      <div className='nav-right'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/careers'>Careers</Link>
          </li>
        </ul>

        <DarkMode />
      </div>
    </nav>
  );
};

export default Navbar;
