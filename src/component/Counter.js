import React from "react";
import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("yasin");

  const clickHandler = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const nameHandler = () => {
    setName("ali");
  };
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={nameHandler}>change</button>
      <h1>{number}</h1>
      <button onClick={clickHandler}>Up One</button>
    </div>
  );
};

export default Counter;
