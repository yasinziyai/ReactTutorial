import React from "react";
import ReactDOM from "react-dom";

const PortallCild = () => {
  return ReactDOM.createPortal(
    <div>
      <h1>yasin</h1>
    </div>,
    document.getElementById("Cild-root")
  );
};
export default PortallCild;
