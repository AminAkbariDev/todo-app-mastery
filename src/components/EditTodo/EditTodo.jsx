import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "@mui/material/Button";

import "./EditTodo.css";

function EditTodo({ onSaveChange, todoInfo,modalClose }) {
  const [todo, setTodo] = useState(todoInfo);
  return (
    <div className="box">
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button
        onClick={modalClose}
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
    selectedTodoId: state.editTodo.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalClose: () => dispatch({type: "CLOSE_MODAL"})
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(EditTodo);
