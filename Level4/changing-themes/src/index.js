import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {ThemeContext} from "./ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </React.StrictMode>
);
