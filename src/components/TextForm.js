import React, { useState } from "react";

export default function TextForm(props) {
  const onChange = (event) => {
    console.log("On Changed!");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  const upClick = () => {
    console.log("Uppercase Clicked!");
    setText(text.toUpperCase());
    // props.showAlert("Text converted to UPPERCASE", "success");
  };
  const lowClick = () => {
    console.log("Lowercase Clicked!");
    setText(text.toLowerCase());
    // props.showAlert("Text converted to lowercase", "success");
  };

  const clear = () => {
    console.log("Cleared!");
    setText("");
    // props.showAlert("Text CLEARED", "success");
  };

  const copyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text COPIED to CLIPBOARD", "success");
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    // props.showAlert("Extra spaces have been REMOVED from the text", "success");
  };

  return (
    <>
      <div className="container my-4">
        <h1 className="user-select-none">
          <label htmlFor="myBox" style={{ cursor: "pointer" }}>
            Enter Text to Analyze
          </label>
        </h1>
        <div className="mb-3">
          <textarea
            className={`form-control 
            bg-${props.mode === "light" ? "light" : "dark"}
            text-${props.mode === "light" ? "dark" : "light"}
            `}
            id="myBox"
            rows="8"
            value={text}
            onChange={onChange}
            placeholder="Enter Text Here"
          ></textarea>
        </div>

        <div className="btn-group" role="group" aria-label="Basic example">
          <button className="btn btn-primary" onClick={upClick}>
            Covert to Uppercase
          </button>
          <button className="btn btn-primary" onClick={lowClick}>
            Covert to Lowercase
          </button>
        </div>
        <div className="btn-group mx-4" role="group" aria-label="Basic example">
          <button className="btn btn-primary" onClick={removeExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>

        <button className="btn btn-success" onClick={copyClick}>
          Copy
        </button>

        <button className="btn btn-danger mx-4" onClick={clear}>
          Clear
        </button>
      </div>
      <div className="container">
        <h2 className="my-2 user-select-none">Text Summary</h2>
        <p className="user-select-all">
          Word Count: {text.split(" ").length} <br />
          Character Count: {text.length} <br />
          Time Required to Read: {0.008 * text.split(" ").length} Minutes
        </p>

        <h2 className="user-select-none">Text Preview</h2>
        <pre className="user-select-all">
          {text.length > 0 ? (
            text
          ) : (
            <span className="text-muted user-select-none">
              Preview Text will be shown here
            </span>
          )}
        </pre>
      </div>
    </>
  );
}
