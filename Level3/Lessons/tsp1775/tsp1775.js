import React from "react";
import ReactDOM from "react-dom";

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/
function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png" className="react-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Content() {
  return (
    <>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2021 Ziroll development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
