import React from "react";
import picture from "../images/x.jpg";
import icon from "../images/Icon.png";
import linked from "../images/linked.png";

export default function Info() {
  return (
    <div className="info-top">
      <img src={picture} className="headshot" alt="" />
      <h1 className="user-name">Dave Roberts </h1>
      <h2 className="user-title"> Web Developer </h2>
      <h3 className="user-web" href="#">
        glitchinthematri.x
      </h3>
      <div className="actions">
        <button className="email-button">
          <img src={icon} alt=""></img>
          Email
        </button>
        <button className="linkedin-button">
          <img src={linked} alt=""></img>
          LinkedIn
        </button>
      </div>
    </div>
  );
}
