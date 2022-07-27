import React from "react";

const FunctionEvent = () => {
  const clickHandler = () => {
    alert("eiifhelih");
  };
  return (
    <div>
      <button onClick={clickHandler}>Fumction Click</button>
    </div>
  );
};

export default FunctionEvent;
