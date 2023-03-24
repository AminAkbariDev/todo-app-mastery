import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Hero(props) {
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const todos = localStorage.getItem("todo");
    if (todos) {
      props.postFromLocal(todos);
    }
  }, []);

  return (
    <div>
      <Box
        sx={{
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="white"
            gutterBottom
          >
            TODO APP
          </Typography>
          <Typography variant="h5" align="center" color="white" paragraph>
            To Do gives you focus, from work to play.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            spacing={2}
            color="white"
            justifyContent="center"
          >
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <div className="form">
                <input
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                  className="todo-input"
                  style={{
                    fontSize: "medium",
                  }}
                  placeholder="TODO..."
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 3, mb: 2 }}
                  disabled={todo ? false : true}
                  onClick={(e) => props.onSubmit(e, todo, setTodo)}
                >
                  Submit
                </Button>
              </div>
            </Box>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e, value, setTodo) => {
      e.preventDefault();
      dispatch({
        type: "ADD_TODO",
        payload: { id: uuid(), text: value, done: false },
      });
      setTodo("");
    },
    postFromLocal: (array) => {
      dispatch({
        type: "READ_LOCAL",
        payload: array,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Hero);
