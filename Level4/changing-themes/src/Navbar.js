import React from "react";
import {BsPersonSquare} from "react-icons/bs";
import {useState, useContext} from "react";
import {Context} from "./ThemeContext";
import {MdDarkMode} from "react-icons/md";
import {HiOutlineLightBulb} from "react-icons/hi";

const Navbar = () => {
  const {currentTheme, toggleTheme} = useContext(Context);

  const icon =
    currentTheme === "light" ? <MdDarkMode /> : <HiOutlineLightBulb />;
  return (
    <div className={`navbar ${currentTheme}-nav `}>
      <div className='nav-left'>
        <h2>
          <BsPersonSquare />
        </h2>
        <h2>Changing Themes</h2>
      </div>
      <div className='nav-center'>
        <button onClick={toggleTheme}>{icon}</button>
      </div>
      <div className='nav-right'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
