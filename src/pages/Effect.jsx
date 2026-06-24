import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [tech, setTech] = useState({ tech: "React", version: 20 });
  const [timer, setTimer] = useState(0);
  //   console.log(tech);

  //   console.log("Component Render");

  function countFun() {
    console.log("count Fun Call");
  }

  const countIncHandler = () => {
    setCount((pre) => pre + 1);
  };

  //   useEffect(() => {
  //     countFun();
  //     console.log("Effect Render");
  //   }, []);

  useEffect(() => {
    if (count > 0) {
      setTech((pre) => ({ ...pre, version: 25 }));
    }
  }, [count]);

  useEffect(() => {
    const timerFun = setInterval(() => {
      setTimer((time) => time + 1);
    }, 1000);

    return () => {
      clearInterval(timerFun);
    };
  }, []);

  return (
    <div>
      <h1>Time: {timer}</h1>
      <h2>Count: {count}</h2>
      <button onClick={countIncHandler}>Click +</button>
    </div>
  );
};

export default Effect;
