import React, {useEffect, useState} from "react";

const Generator = () => {
  const [currentGradient, setCurrentGradient] = useState(
    "linear-gradient(180deg, #ffffff, #000000)"
  );

  const [inputsValue, setInputsValue] = useState({
    color1: "#ffffff",
    color2: "#000000",
    angle: 180,
  });

  const [gradientCSS, setGradientCSS] = useState(
    `background: linear-gradient(${inputsValue.angle}deg, ${inputsValue.color1}, ${inputsValue.color2});
        
        -moz-background: linear-gradient(${inputsValue.angle}deg, ${inputsValue.color1}, ${inputsValue.color2});

        -webkit-background: linear-gradient(${inputsValue.angle}deg, ${inputsValue.color1}, ${inputsValue.color2}`
  );

  const generate = (e) => {
    setCurrentGradient(
      `linear-gradient(${inputsValue.angle}deg, ${inputsValue.color1}, ${inputsValue.color2})`
    );
    setGradientCSS(`background: linear-gradient(${inputsValue.angle}deg, ${inputsValue.color1}, ${inputsValue.color2}); 
-moz-background: linear-gradient(${inputsValue.angle}deg, ${inputsValue.color1}, ${inputsValue.color2}); 
-webkit: linear-gradient(${inputsValue.angle}deg, ${inputsValue.color1}, ${inputsValue.color2})`);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputsValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    generate();
  };

  const minValue = 0;
  const maxValue = 360;

  useEffect(() => {
    generate();
  }, []);

  //copy CSS
  function copyCSS() {
    const textField = document.getElementsByTagName("textarea")[0];
    textField.select();
    // for mobile
    textField.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textField.value);
  }

  return (
    <>
      <div className='generator'>
        <div className='display' style={{background: currentGradient}}></div>
        <h2>Choose your colors and your Angle</h2>
        <div className='color1'>
          <p>Color 1</p>
          <p>{inputsValue.color1}</p>
          <input
            type='color'
            name='color1'
            id='color1'
            value={inputsValue.color1}
            onChange={handleChange}
          />
        </div>
        <div className='color2'>
          <p>Color 2</p>
          <p>{inputsValue.color2}</p>
          <input
            type='color'
            name='color2'
            id='color2'
            value={inputsValue.color2}
            onChange={handleChange}
          />
        </div>
        <div className='angle'>
          <p>Angle</p>
<p>{inputsValue.angle} degrees</p>
          <input
            type='number'
            name='angle'
            id='angle'
            className='angle'
            placeholder={inputsValue.angle}
            min={minValue}
            max={maxValue}
            onChange={handleChange}
          />
        </div>

        <textarea
          name=''
          id=''
          cols='30'
          rows='10'
          readOnly
          value={gradientCSS}
        ></textarea>

        <div className='text-to-copy'>
          <button className='generate-button' onClick={generate}>
            Generate
          </button>
          <button className='generate-copy' onClick={copyCSS}>
            Copy
          </button>
        </div>
      </div>
    </>
  );
};

export default Generator;
