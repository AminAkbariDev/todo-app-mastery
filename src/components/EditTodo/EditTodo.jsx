import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "@mui/material/Button";

import "./EditTodo.css";

function EditTodo({ setTodoInfo, onSaveChange, todoInfo, modalClose }) {
  return (
    <div className="box">
      <input
        className="input"
        value={todoInfo}
        onChange={(e) => setTodoInfo(e.target.value)}
      />
      <Button
        onClick={onSaveChange}
        sx={{ mt: 3 }}
        color="info"
        variant="contained"
        size="small"
      >
        Save Changes
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todoInfo: state.selectedTodoText,
    selectedTodoId: state.editTodo.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalClose: () => dispatch({ type: "CLOSE_MODAL" }),
    setTodoInfo: (text) => dispatch({ type: "CHANGE_TODO", text }),
    onSaveChange: () => dispatch({ type: "SAVE_TODO" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);
