import React from "react";
import ReactDOM from "react-dom";

function LearnReact() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react-logo.png" width="40px" />{" "}
        </nav>
      </header>
      <h1> Learn React </h1>
      <ol>
        <li> item 1 </li> <li> item 2 </li> <li> item 3 </li>
      </ol>
      <footer>© 2022 Roberts development. All rights reserved.</footer>
    </div>
  );
}

ReactDOM.render(<LearnReact />, document.getElementById("root"));
