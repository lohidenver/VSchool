import React from "react";
import Pets from "./Pets";

export default function Friend(props) {
  console.log(props);
  const petInfo = props.pets.map((pet) => {
    return <Pets key={pet.name} {...pet} />;
  });

  return (
    <div className="card-friend">
      <div>
        <img src={`../images/${props.img}`} alt="friend" />
        <h1>{props.name}</h1>
        <h3>{props.age} years old</h3>
      </div>
      <hr />
      <div className="card-pets">{petInfo}</div>

      {/* <Pets /> */}
    </div>
  );
}
