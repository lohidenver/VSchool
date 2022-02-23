import React from "react";

console.log("Card Connected");

export default function Card() {
  return (
    <div className="card">
      <img
        src="../images/activity1.png"
        alt="activity missing"
        className="card-image"
      />
      <div className="card-statss">
        <img src="..images/star.png" alt="star missing" className="card-star" />

        <span className="grey"> 5.0 </span>
        <span className="grey"> (6) • </span>
        <span> USA </span>
        <p> Life Lessons </p>
        <p>
          <span className="bold">From $126 /</span> person
        </p>
      </div>
    </div>
  );
}
