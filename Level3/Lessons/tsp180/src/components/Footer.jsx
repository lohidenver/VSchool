import React from "react";
import twitter from "../images/Twitter Icon.png";
import instagram from "../images/Instagram Icon.png";
import github from "../images/GitHub Icon.png";
import facebook from "../images/Facebook Icon.png";

export default function Footer() {
  return (
    <div>
      <div className="footer-icons">
        <img src={twitter} alt="test" />
        <img src={facebook} alt="test" />
        <img src={instagram} alt="test" />
        <img src={github} alt="test" />
      </div>{" "}
    </div>
  );
}
