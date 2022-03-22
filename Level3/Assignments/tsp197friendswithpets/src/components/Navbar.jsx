import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="center page-header">
        <h1 className=" page-title">Friends with Pets</h1>
        <img
          className="img-pet"
          src="https://www.cityofmarcoisland.com/sites/default/files/styles/full_node_primary/public/imageattachments/emergency/page/59661/bg_pets_lg2.jpg?itok=T2q7yWpy"
          alt=""
        />
      </div>

      <ul className="topnav">
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li className="right">
          <a href="#about">About</a>
        </li>
      </ul>
    </div>
  );
}
