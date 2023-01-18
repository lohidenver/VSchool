import React from "react";
import Dice from "./Dice";

export default function DiceBox() {
  const [diceArray, setDiceArray] = React.useState([1, 1, 1, 1, 1]);

  // console.log(diceArray);

  function rollDie() {
    setDiceArray((prevDice) =>
      prevDice.map(() => Math.floor(Math.random() * 6) + 1)
    );
    console.log("Roll Die: " + diceArray);
  }

  return (
    <div className="page">
      <div className="dice-all">
        <Dice dieArr={diceArray} />
      </div>
      <button className="roll-button" onClick={rollDie}>
        ROLL
      </button>
    </div>
  );
}
