import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img
        src="./images/Trollface_non-free.png"
        alt="troll face"
        className="trollface"
      />
      <h2 className="header-title">Meme Generator</h2>
      <h4 className="header-project">React Course - Project 3</h4>
    </header>
  );
}

console.log("Header connected");
