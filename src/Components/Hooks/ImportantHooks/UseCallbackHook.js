import React, { useCallback, useState } from "react";
import Child from "./Child";

const UseCallbackHook = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const fun = useCallback(
    (params) => {
      console.log("Hi Accenture");
    },
    [counter2]
  );

  return (
    <div>
      <button onClick={() => setCounter1((prev) => prev + 1)}>counter1</button>
      <span>{counter1}</span>

      <Child countertwo={counter2} fun={fun} />
    </div>
  );
};

export default UseCallbackHook;
