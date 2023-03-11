import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./Modal.css";

function Modal({ edit, children }) {
  return (
    <div
      className="modal"
      style={{
        transform: edit ? "translateY(0)" : "translateY(-100vh)",
        opacity: edit ? "1" : "0",
      }}
    >
      {children}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    edit: state.editTodo.show,
  };
};

export default connect(mapStateToProps)(Modal);
