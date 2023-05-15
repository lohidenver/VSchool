import React from 'react'
import {useState, useContext} from "react";
import {Context} from "./ThemeContext";

const Footer = () => {

    const {currentTheme, toggleTheme} = useContext(Context);
  return (
    <div className={`${currentTheme}-footer footer`}>All right reserved</div>
  )
}

export default Footer