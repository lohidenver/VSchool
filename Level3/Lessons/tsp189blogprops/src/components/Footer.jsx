import React from "react";

export default function Footer() {
  return (
    <div className="logos">
      <hr />
      <div>
        <a
          href="https://twitter.com/PageOnlineLG"
          class="link twitter"
          target="_parent"
        >
          <span class="fa fa-twitter"></span>
        </a>
        <a
          href="https://facebook.com/ondrej.p.barta"
          class="link facebook"
          target="_parent"
        >
          <span class="fa fa-facebook"></span>
        </a>
        <span></span>
        <a href="#" class="fa fa-github"></a>
        <div>
          <small>Copyright © Your Website 2022</small>
        </div>
      </div>
    </div>
  );
}
