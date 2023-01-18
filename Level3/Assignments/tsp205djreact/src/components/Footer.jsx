import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <a
          href="http://www.facebook.com"
          className="link facebook"
          target="_parent"
        >
          <span className="fa fa-facebook"></span>
        </a>
        <a
          href="http://www.instagram.com"
          className="link instagram"
          target="_parent"
        >
          <span className="fa fa-instagram"></span>
        </a>
        <a
          href="http://www.youtube.com"
          className="link youtube"
          target="_parent"
        >
          <span className="fa fa-youtube"></span>
        </a>
      </div>

      <img src="./images/record.jpeg" alt="" className="footer-img" />
    </div>
  );
}
