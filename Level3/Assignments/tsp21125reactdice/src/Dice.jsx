import React from "react";

export default function Dice(props) {
  console.log("Dice Value: " + props.dieArr);
  console.log(" ");
  let dice = ["🎲", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  let displayDice = props.dieArr.map((num) => {
    return dice[num];
  });

  return (
    <div className="dice-display">
      {displayDice}
      {/* {dice[props.dieArr[0]]}
      {dice[props.dieArr[1]]}
      {dice[props.dieArr[2]]}
      {dice[props.dieArr[3]]}
      {dice[props.dieArr[4]]} */}
    </div>
  );
}

//  let num = Math.floor(Math.random() * 6) + 1;
// let dice = ["🎲", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
// console.log(diceArray);
// setDiceArray((prevDiceArray) => prevDiceArray.map(dice[num]));

// console.log(diceArray);
// console.log("Number: " + num);
// return num;
