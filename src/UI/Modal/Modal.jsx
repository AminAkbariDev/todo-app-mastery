import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <div
      className="modal"
      style={{
        transform: props.edit ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.edit ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  );
}

export default Modal;
