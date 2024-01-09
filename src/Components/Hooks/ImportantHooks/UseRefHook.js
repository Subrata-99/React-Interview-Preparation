import React, { useRef, useState } from "react";

const UseRefHook = () => {
  const [input, setInput] = useState("");
  //We have a feature to copy whatever we type from input field.
  const inputRef = useRef(null);

  return (
    <div>
      <label>Input</label>
      <input ref={inputRef} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          console.log("input", input, inputRef.current.value);
          inputRef.current.select();
          input && input !== "" && window.navigator.clipboard.writeText(input);
        }}
      >
        Copy
      </button>
      <span>{input}</span>
    </div>
  );
};

export default UseRefHook;
