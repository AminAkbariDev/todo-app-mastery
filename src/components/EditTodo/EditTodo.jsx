import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "@mui/material/Button";

import "./EditTodo.css";

function EditTodo({ onSaveChange, todoInfo }) {
  const [todo, setTodo] = useState(todoInfo);
  return (
    <div className="box">
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
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
    selectedTodoId: state.editTodo.id,
  };
};

export default connect(mapStateToProps)(EditTodo);
