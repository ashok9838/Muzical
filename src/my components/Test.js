import React, { useState } from "react";

// console.log(useState("Enter the text here2"))

export default function Test() {
  const handleUpClick = () => {
    let upperText = text.toUpperCase();

    setText(upperText);
  };
  const handleLoClick = () => {
    let LowerText = text.toLowerCase();

    setText(LowerText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter the text");
  return (
    <div>
      <div className="m-3">
        <h1 className="text-4xl">Enter the text to analyze below</h1>

        <textarea
          className="form-control"
          id="mybox"
          rows="3"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary my-3 " onClick={handleUpClick}>
          Convert the Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>
          Convert the Uppercase
        </button>
      </div>

      
        <h1 className="text-xl mx-3 ">Your Text summary</h1>
        <p className="mx-3">{text.split(" ").length} Words and {text.length}  Characters</p>
        <p className="mx-3"> {0.008*text.split(" ").length} Minutes read</p>
    </div>
  );
}
