import React, { memo } from "react";

const Child = () => {
  console.log("Child called");
  return <div>I am the child</div>;
};

export default memo(Child);
