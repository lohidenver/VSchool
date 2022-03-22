import React from "react";
import "./nav-style.css";

export default function Navbar() {
  return (
    <nav>
      <h2 className="home">Start Bootstrap</h2>
      <div className="menu">
        <h4>HOME</h4>
        <h4>ABOUT</h4>
        <h4>SAMPLE POST</h4>
        <h4>CONTACT</h4>
      </div>
    </nav>
  );
}
