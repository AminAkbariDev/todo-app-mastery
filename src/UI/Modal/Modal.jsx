import React from "react";
import { connect } from "react-redux";

import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

function Modal({ edit, children, modalClose }) {
  return (
    <React.Fragment>
      <Backdrop show={edit} click={modalClose} />
      <div
        className="modal"
        style={{
          transform: edit ? "translateY(0)" : "translateY(-100vh)",
          opacity: edit ? "1" : "0",
        }}
      >
        {children}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    edit: state.editTodo.show,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalClose: () => dispatch({ type: "CLOSE_MODAL" }),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Modal);
