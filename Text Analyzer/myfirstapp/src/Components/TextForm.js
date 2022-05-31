import React from "react";
import { useState } from "react";
export default function TextForm() {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleconcatClick = () => {
    let newText = text.concat(text+"");
    setText(newText);
  };
  const handleclearClick = () => {
    let newText = text.concat();
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div>
        <h3>Enter the text to analyze: </h3>
        <textarea
          className="form-control my-4"
          id=""
          rows="6"
          onChange={handleOnChange}
          value={text}
        ></textarea>

        <div className="container">
          <h2>Text Analysis </h2>
          <ul>
            <li>
              {" "}
              <h4>Words</h4>
              {text.split(" ").length} Words
            </li>
            <li>
              {" "}
              <h4>Characters</h4>
              {text.length} Characters
            </li>
          </ul>
        </div>
        <button className="btn btn-primary my-5" onClick={handleUpClick}>
          Convert to Upper case
        </button>
        <button className="btn btn-primary my-5 mx-2" onClick={handleLowClick}>
          Convert to Lower case
        </button>
        <button className="btn btn-primary my-5 mx-2" onClick={handleconcatClick}>
          Concatenate the Words
        </button>
        <button className="btn btn-primary my-5 mx-2" onClick={handleclearClick}>
          Clear Text
        </button>
      </div>
    </>
  );
}
