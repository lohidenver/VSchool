import React from "react";
import memesData from "../memesData";

export default function Meme() {
  //   const [memeImage, setMemeImage] = React.useState();

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://via.placeholder.com/800",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getRandomImage() {
    console.log("getRandomImage");
    const memesArray = allMemeImages.data.memes;
    const rand = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[rand].url;
    setMeme((preMeme) => ({
      ...preMeme,
      randomImage: url,
    }));
  }

  function handleMemeChange(event) {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="top text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleMemeChange}
        ></input>
        <input
          type="text"
          placeholder="bottom text"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleMemeChange}
        ></input>
        <button type="submit" className="form-btn" onClick={getRandomImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="memeDiv">
        <img src={meme.randomImage} alt="" className="memeImage" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
