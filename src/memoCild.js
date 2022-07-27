import React from "react";

const MemoCild = (props) => {
  console.log("child is render");
  return <div>{props.text}Cild</div>;
};

export default React.memo(MemoCild);
