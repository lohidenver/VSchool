import React, { useState } from "react";

function MemeEdits(props) {
  const [showForm, setShowForm] = useState(false);

  const [meme, setMeme] = useState({
    topText: props.topText,
    bottomText: props.bottomText,
    randomImage: props.randomImage,
  });

  const toggleShowForm = () => {
    setShowForm((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form was submitted and these are the values: ");
    console.log(meme);
    props.updateMemeItem(props.id, meme);
  };

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <input name="topText" value={meme.topText} onChange={handleChange} />
          <input
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      ) : (
        <>
          <h2>{props.title}</h2>
          <h2>{props.description}</h2>
        </>
      )}
      <button onClick={toggleShowForm}>{showForm ? "Close" : "Edit"}</button>
    </div>
  );
}

export default MemeEdits;
