import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

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
