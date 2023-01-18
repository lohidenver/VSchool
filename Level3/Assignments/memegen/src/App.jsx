import logo from "./logo.svg";
// import "./style.css";
import React, { useState } from "react";
// import Header from "./components/Header";
import MemeMaker from "./components/Meme";
import MemeEdits from "./components/Character";

function App(props) {
  const [memeList, setMemeList] = useState([]);

  const updateMemeItem = (id, updatedItem) => {
    setMemeList((prevMemeList) => {
      return prevMemeList.map((item, index) => {
        if (index === id) {
          return updatedItem;
        } else {
          return item;
        }
      });
    });
  };

  const addNewItem = (newItem) => {
    setMemeList((prev) => [...prev, newItem]);
  };

  const list = memeList.map((meme, index) => {
    return (
      <MemeEdits
        key={index + meme.topText}
        topText={meme.topText}
        bottomText={meme.bottomText}
        randomImage={meme.randomImage}
        updateMemeItem={updateMemeItem}
        id={index}
      />
    );
  });

  return (
    <div className="App">
      {/* <Header /> */}
      <MemeMaker submit={addNewItem} />
      <h2>Created Memes</h2>
      {list}
    </div>
  );
}

export default App;
