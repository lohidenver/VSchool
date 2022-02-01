console.log("connected");
import React from "react";
import ReactDOM from "react-dom";

const h1 = document.createElement("h1");
h1.textContent = "Hello world";
h1.className = "header";
console.log(h1);

const element = <h1 className="header"> This is JSX </h1>;
console.log(element);

const page = (
  <div>
    <h1 className="header"> This is JSX </h1> <p> This is a paragraph </p>{" "}
  </div>
);
// JSX
ReactDOM.render(page, document.getElementById("root"));

const nav = (
  <nav className="nav">
    <h1 className="website"> This is my Website </h1>{" "}
    <ul>
      <li> Pricing </li> <li> About </li> <li> Contact </li>{" "}
    </ul>{" "}
  </nav>
);

ReactDOM.render(nav, document.getElementById("root"));
