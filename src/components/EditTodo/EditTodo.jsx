import React, { useState } from "react";

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

export default EditTodo;
