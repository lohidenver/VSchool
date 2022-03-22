import React from "react";

export default function Card(props) {
  let timeBadge = props.timeToGo;
  let priceBadge = props.price;

  let timeBack = timeBadge;

  if (priceBadge < 500) {
    priceBadge = "$";
  } else if (priceBadge < 1000) {
    priceBadge = "$$";
  } else {
    priceBadge = "$$$";
  }

  return (
    <div className="card">
      <div className={`card-timeBadge ${timeBack.toLowerCase()}`}>
        {timeBadge}
      </div>
      <div
        className="card-priceBadge 
      "
      >
        {priceBadge}
      </div>
      <img src={props.img} className="card-img" alt="{props.place" />

      <div className="card-place bold">{props.place}</div>
      <div className="card-desc">{props.description}</div>

      <div className="card-price bold">${props.price}</div>
    </div>
  );
}
