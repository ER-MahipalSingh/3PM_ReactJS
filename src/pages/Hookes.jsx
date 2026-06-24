import React, { useState } from "react";

const Hookes = () => {
  const [count, setCount] = useState(0);
  const [darkmode, setDarkmode] = useState(false);

  const countIncHandler = () => {
    setCount((pre) => pre + 1);
  };

  const countDecHandler = () => {
    if (count === 0) return;
    setCount((pre) => pre - 1);
  };

  const chnageDarkmodeHandler = () => {
    setDarkmode((pre) => !pre);
  };

  const darkmodeStyle = {
    backgroundColor: darkmode ? "black" : "white",
    color: darkmode ? "white" : "black",
  };
  return (
    <div style={darkmodeStyle}>
      <h2>Count: {count}</h2>
      <button onClick={countIncHandler}>Click +</button>
      <button onClick={countDecHandler}>Click -</button>
      <button onClick={chnageDarkmodeHandler}>Dark Mode</button>
    </div>
  );
};

export default Hookes;
