import * as React from "react";
import { connect } from "react-redux";

import Hero from "../components/Hero/Hero";
import TodosBox from "../components/TodosBox/TodosBox";
import Container from "@mui/material/Container";
import Modal from "../UI/Modal/Modal";

import "./Todo.css";
import EditTodo from "../components/EditTodo/EditTodo";

function Todo({ show, todoInfo }) {
  return (
    <main>
      <Hero />
      <Modal edit={show}>
        <EditTodo todoInfo={todoInfo} />
      </Modal>
      <Container sx={{ py: 8 }} maxWidth="md">
        <TodosBox />
      </Container>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    show: state.editTodo.show,
    todoInfo: state.todos.text,
  };
};

export default connect(mapStateToProps)(Todo);
