import React, { useState } from "react";

let TextForm = (props) => {
  const [text, settext] = useState("");
  let handleupclick = () => {
    let upcase = text.toUpperCase();
    settext(upcase);
    props.showalert("Your Text is uppercase", "success");
  };
  let handleLoclick = () => {
    let upcase = text.toLowerCase();
    settext(upcase);
    props.showalert("Your Text is LowerCase", "warning");
  };
  let cleartext = () => {
    let upcase = "";
    settext(upcase);
    props.showalert("Your Text is Delete", "danger");
  };
  let copyText = () => {
    let t = document.getElementById("myBox");
    navigator.clipboard.writeText(t.value);
    props.showalert("Your Text is copied", "success");
  };
  let extraspace = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
    props.showalert("Remove Extra Spaces", "success");
  };
  let handleOnchange = (e) => {
    settext(e.target.value);
  };
  return (
    <>
      <div className="container ">
        <div className="col-10 col-sm-8 m-auto">
          <h2> {props.heading}</h2>
          <textarea
            className={`form-control bg-${props.mode}`}
            id="myBox"
            style={{
              background: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
            rows="8"
            value={text}
            onChange={handleOnchange}
          ></textarea>
          <button disabled={text.length === 0}
            className={`btn btn-info text-${props.mode === 'light'?'dark':'light'} bg-${props.mode} mt-3`}
            onClick={handleupclick}
          >
            Convert UPPERCASE
          </button>
          <button disabled={text.length === 0}
            className={`btn btn-info text-${props.mode === 'light'?'dark':'light'} bg-${props.mode} mt-3 ms-2`}
            onClick={handleLoclick}
          >
            Convert lowercase
          </button>
          <button disabled={text.length === 0}
            className={`btn btn-info text-${props.mode === 'light'?'dark':'light'} bg-${props.mode} mt-3 ms-2`}
            onClick={copyText}
          >
            Copy Text
          </button>
          <button disabled={text.length === 0}
            className={`btn btn-info text-${props.mode === 'light'?'dark':'light'} bg-${props.mode} mt-3 ms-2`}
            onClick={cleartext}
          >
            Clear Text
          </button>
          <button disabled={text.length === 0}
            className={`btn btn-info text-${props.mode === 'light'?'dark':'light'} bg-${props.mode} mt-3 ms-2`}
            onClick={extraspace}
          >
            Remove Extraspace
          </button>
        </div>
        <div className="container my-2">
          <h3>Your Text Summery</h3>
          <p>
            <strong className="d-inline-block">{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length }</strong>
            words , <strong className="d-inline-block">{text.length}</strong>
            Charecters
          </p>
          <p>
            <strong className="d-inline-block">
              {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length}
            </strong>
            Minuite Read
          </p>
          <h5>Preview</h5>
          <p className="preview">
            {text.length > 0 ? text : "Nothing to preview"}
          </p>
        </div>
      </div>
    </>
  );
};
export default TextForm;
