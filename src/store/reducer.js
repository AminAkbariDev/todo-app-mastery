const initialState = {
  todos: [{ id: 1, text: "this is a test text to fill this up.", done: false }],
  editTodo: { show: false, id: null },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      const newList = state.todos.filter((todo) => action.id !== todo.id);
      return {
        todos: newList,
      };
    case "COMPLETE_TODO":
      let completedTodo = state.todos.find((td) => action.id === td.id);
      const bool = completedTodo.done;
      completedTodo.done = !bool;
      return {
        todos: [...state.todos],
      };
    case "EDIT_TODO":
      const newShow = true;
      const newId = action.id;
      const newEditTodo = { show: newShow, id: newId };
      return {
        ...state,
        editTodo: { ...newEditTodo },
      };

    case "CLOSE_MODAL":
      const closedShow = { show: false, id: state.editTodo.id };
      return {
        ...state,
        editTodo: { ...closedShow },
      };
  }

  return state;
};

export default reducer;
