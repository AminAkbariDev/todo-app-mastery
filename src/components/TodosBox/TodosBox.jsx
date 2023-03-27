import React, { useEffect } from "react";
import { connect } from "react-redux";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function TodosBox({ todo, onRemove, onComplete, onEdit, fetchLocal }) {
  //run once when the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  //USE EFFECT
  useEffect(() => {
    saveLocalTodos();
  }, [todo]);

  // Save to Local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todo));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null)
      localStorage.setItem("todos", JSON.stringify([]));
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      fetchLocal(todoLocal)
    }
  };

  return (
    <Grid container spacing={5}>
      {todo.map((td) => (
        <Grid item key={td.id} xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            style={{
              opacity: !td.done ? "1" : "0.5",
              transition: "all 0.3s ease-out",
            }}
          >
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
              <Typography
                style={{
                  textDecorationLine: !td.done ? "none" : "line-through",
                  lineBreak: "anywhere",
                }}
              >
                {td.text}
              </Typography>
            </CardContent>
            <CardActions className="todo-icons">
              <Button
                onClick={() => onComplete(td.id)}
                color="success"
                variant="contained"
                size="small"
              >
                <CheckCircleIcon />
              </Button>
              <Button
                color="info"
                variant="contained"
                size="small"
                onClick={() => onEdit(td.id)}
              >
                <EditIcon />
              </Button>
              <Button
                color="warning"
                variant="contained"
                size="small"
                onClick={() => onRemove(td.id)}
              >
                <DeleteIcon />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    todo: state.todos,
    textStyle: state.textStyle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemove: (id) => dispatch({ type: "DELETE_TODO", id }),
    onComplete: (id) => dispatch({ type: "COMPLETE_TODO", id }),
    onEdit: (id) => dispatch({ type: "EDIT_TODO", id }),
    fetchLocal: (todos) => dispatch({type: "FETCH_LOCAL", payload: todos }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosBox);
