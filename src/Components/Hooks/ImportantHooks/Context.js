import React, { createContext, useState } from "react";

export const demoContext = createContext();

const Context = ({ children }) => {
  const [count, setCount] = useState(1);
  return (
    <demoContext.Provider value={{ count, setCount }}>
      {children}
    </demoContext.Provider>
  );
};

export default Context;
