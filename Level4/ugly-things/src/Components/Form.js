import "./form.css";
import React, {useContext} from "react";
import {UglyContext} from "./UglyContext";

const Form = () => {
  const {handleChange, handleSubmit, uglyData} = useContext(UglyContext);

  return (
    <div className='form' id='form'>
      <form onSubmit={handleSubmit}>
        <div className='main-form'>
          <h1>Add an ugly thing!</h1>
          <input
            className='form-input'
            name='title'
            value={uglyData.title}
            placeholder='Title'
            onChange={handleChange}
          />
          <input
            className='form-input'
            name='imgUrl'
            value={uglyData.imgUrl}
            placeholder='Image Url'
            onChange={handleChange}
          />
          <input
            className='form-input'
            name='description'
            value={uglyData.description}
            placeholder='Description'
            onChange={handleChange}
          />
          <button className='form-btn'>Add Ugly Thing</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
