import React from "react";
import { useState } from "react";
import ActionButtons from "./ActionButtons";
import Squares from "./Squares";
import DJSquare from "./DJSquare";

export default function DJSetup() {
  /* ==================================================*/
  //colors
  const [colors, setColors] = useState(["white", "red", "blue", "pink"]);
  /* ==================================================*/
  //functions
  function smallTime() {}
  function party() {}
  function proLeft() {}
  function proRight() {}
  function bigDJ1() {}
  function bigDJ2() {}
  function bigDJ3() {}
  function bigDJ4() {}
  /* ==================================================*/

  // const colorBlock = colors.map((block, index) => {
  //   console.log(colors[index]);
  //   return (
  //     <div key={index}>
  //       <Squares />
  //     </div>
  //   );
  // });

  // console.log(colorBlock);

  /* ==================================================*/
  return (
    <div className="dj-setup">
      <ActionButtons className="action-buttons" />
      <Squares />
    </div>
  );
}
