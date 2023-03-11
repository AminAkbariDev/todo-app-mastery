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
      const bool2 = state.editTodo.show;
      state.editTodo.show = !bool2;
      state.editTodo.id = action.id;
  }

  return state;
};

export default reducer;
