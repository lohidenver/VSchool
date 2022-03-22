import React from "react";

export default function Navbar() {
  return (
    <nav>
      <img
        src="https://t4.ftcdn.net/jpg/03/20/29/37/360_F_320293762_JlZbe7Esq0WwzbfW4e0PSYOjsTdxWyWg.jpg"
        alt="missing"
      ></img>

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
    </nav>
  );
}
