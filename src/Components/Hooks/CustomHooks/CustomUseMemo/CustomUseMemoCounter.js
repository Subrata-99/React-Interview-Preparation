import React, { useMemo, useState } from "react";
import useCustomMemo from "./useCustomMemo";

const CustomUseMemoCounter = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(100);

    //React useMemo
    // const squaredValue = useMemo(() => {
    //     console.log("Expensive Calculation");
    //     for (let i = 0; i < 999999999; i++) { }
    //     return counter1 * counter1
    // }, [counter1])

    //Custom useMemo
    const squaredValue = useCustomMemo(() => {
        console.log("Expensive Calculation");
        for (let i = 0; i < 999999999; i++) { }
        return counter1 * counter1
    }, [counter1])

    return (
        <div>
            <div>
                <h2>Counter: {counter1}</h2>
                <h2>Squared Counter: {squaredValue}</h2>
                <button onClick={() => setCounter1((prev) => prev + 1)}>
                    Increment
                </button>
                <h2>Counter: {counter2}</h2>
                <button onClick={() => setCounter2((prev) => prev - 1)}>
                    Decrement
                </button>
            </div>
            {/* <span>{isEven ? "Even" : "Odd"}</span>
            <div>
                <button onClick={() => setCounter2((prev) => prev + 1)}>
                    counter2
                </button>
                <span>{counter2}</span>
            </div> */}
        </div>
    );
};

export default CustomUseMemoCounter;
