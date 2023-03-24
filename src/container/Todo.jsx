import * as React from "react";

import Hero from "../components/Hero/Hero";
import TodosBox from "../components/TodosBox/TodosBox";
import Container from "@mui/material/Container";
import Modal from "../UI/Modal/Modal";

import "./Todo.css";
import EditTodo from "../components/EditTodo/EditTodo";

function Todo() {
  return (
    <main>
      <Hero />
      <Modal>
        <EditTodo />
      </Modal>
      <Container sx={{ py: 8 }} maxWidth="md">
        <TodosBox />
      </Container>
    </main>
  );
}

export default Todo;
