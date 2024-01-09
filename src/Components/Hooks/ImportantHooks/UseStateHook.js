import React, { useState } from 'react'

/*
  useState hook has been introduced to react functional component for managing local state of the component.
  Whenever state changes react keeps the track through useState hook and rerenders the update on DOM.
*/

const UseStateHook = () => {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(counter + 1)
    }
    return (
        <>
            <div>UseStateHook</div>
            <p>Counter: {counter} </p>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default UseStateHook