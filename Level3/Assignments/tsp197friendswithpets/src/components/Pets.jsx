import React from "react";

export default function Pets(props) {
  return (
    <div>
      <h4>Name: {props.name}</h4>
      <h4>Breed: {props.breed}</h4>
      <hr></hr>
    </div>
  );
}
