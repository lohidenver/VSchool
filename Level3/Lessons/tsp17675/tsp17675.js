import React from "react";
import ReactDOM from "react-dom";

function temporaryName() {
  return (
    <div>
      <img src="./react-logo.png" width="40px" />
      <h1> Fun facts about React </h1>{" "}
      <ul>
        <li> Was first released in 2013 </li>{" "}
        <li> Was originally created by Jordan Walke </li>{" "}
        <li> Has well over 100 K stars on GitHub </li>{" "}
        <li> Is maintained by Facebook </li>{" "}
        <li> Powers thousands of enterprise apps, including mobile apps </li>{" "}
      </ul>{" "}
    </div>
  );
}

ReactDOM.render(temporaryName(), document.getElementById("root"));

//////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";

function LearnReact() {
  return (
    <div>
      <h1>Learn React</h1>
      <ol>
        <li>easier</li>
        <li>industry</li>
        <li>job</li>
      </ol>
    </div>
  );
}

ReactDOM.render(<LearnReact />, document.getElementById("root"));

////
