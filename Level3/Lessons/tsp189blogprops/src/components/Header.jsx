import React from "react";
import Navbar from "./Navbar";
import "./header-style.css";

export default function Header() {
  return (
    <div className="nav-title">
      <Navbar />
      <div className="title">
        <h1>Clean Blog</h1>
        <span>A Blog Theme by Start Bootstrap</span>
      </div>
    </div>
  );
}
