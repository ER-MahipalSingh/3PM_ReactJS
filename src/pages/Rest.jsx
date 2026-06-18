import React, { version } from "react";

const Rest = () => {
  // const a = [10,20,30];
  // const b = [100,200,300];
  // const c = [...a, ...b];
  // console.log(c);

  // const obj = {
  //   name: "Node",
  //   version: 24,
  //   relese: 2009
  // }

  // const update = {
  //   ...obj,
  //   version: 25
  // }
  // const newAdd = {
  //   ...obj,
  //   relese: 2009
  // }

  // const {version, ...details} = obj;
  // console.log(details);

  // function sum(...num){
  //   return num.reduce((a, b)=>a + b, 0);
  // }
  // const res = sum(10,20,30,40,50)
  // console.log(res);

  const tech = [
    { id: 1, name: "Node" },
    { id: 2, name: "React" },
  ];
  // const newAdd = [
  //   ...tech,
  //   {id:3, name:"js"}
  // ]
  const update = tech.map((tech) => {
    if (tech.id === 1) {
      return { ...tech, name: "Java" };
    }
    return tech;
  });
  console.log(update);

  return <div>Rest</div>;
};

export default Rest;
