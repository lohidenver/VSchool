import React from "react";
import Friend from "./Friend";
import data from "../data";

export default function FriendList() {
  const cards = data.map((item) => {
    return (
      <Friend
        key={item.id}
        name={item.name}
        age={item.age}
        img={item.img}
        {...item}
        // petName={item.pets.petName}
        // petBreed={item.pets.petBreed}
      />
    );
  });

  return <div className="cards">{cards}</div>;
}
