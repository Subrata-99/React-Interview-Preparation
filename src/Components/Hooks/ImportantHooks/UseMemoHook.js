import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const isEven = useMemo(() => {
    console.log("isEven");
    for (let i = 0; i < 999999999; i++) { }
    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <div>
      <div>
        <button onClick={() => setCounter1((prev) => prev + 1)}>
          counter1
        </button>
        <span>{counter1}</span>
      </div>
      <span>{isEven ? "Even" : "Odd"}</span>
      <div>
        <button onClick={() => setCounter2((prev) => prev + 1)}>
          counter2
        </button>
        <span>{counter2}</span>
      </div>
    </div>
  );
};

export default UseMemoHook;
