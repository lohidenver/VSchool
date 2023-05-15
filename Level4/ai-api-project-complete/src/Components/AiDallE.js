import "./aiDallE.css";
import {useState} from "react";

const AiDallE = () => {
  const [images, setImages] = useState([]);
  const [value, setValue] = useState("");

  const surpriseOptions = [
    "A beagle playing the trumpet",
    "A tiger skiing down a mountain",
    "A penguin fighting a hippo in a boxing ring",
    "Roy Lichtenstein style image of Dwight Schrute eating beets",
    "A web developer coding on a laptop while on a surfboard in outerspace",
  ];

  const surpriseMe = () => {
    setImages(null);
    const randomValue =
      surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
    setValue(randomValue);
  };

  const getImages = async () => {
    console.log("clicked");
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("http://localhost:8000/images", options);

      const data = await response.json();
      console.log(data);
      setImages(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(value);

  return (
    <div className='aiDallE' id='aiDallE'>
      <div className='aiDallE-content'>
        <section className='search-section'>
          <p>
            Start with a detailed description{" "}
            <span className='surprise' onClick={surpriseMe}>
              Surprise Me!
            </span>
          </p>
          <div className='input-container-dalle'>
            <input
              value={value}
              placeholder='A Dali style painting of drunk college kids'
              onChange={(event) => setValue(event.target.value)}
            />
            <button onClick={getImages}>Generate</button>
          </div>
        </section>

        {/*  */}
        <section className='image-section'>
          {images?.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Generated image of ${value}`}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default AiDallE;
