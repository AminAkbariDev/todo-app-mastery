const initialState = {
  todos: [{ id: 1, text: "this is a test text to fill this up.", done: false }],
  editTodo: { show: false, id: null },
  selectedTodoText: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case "ADD_TODO":
      if (localStorage.length != 0) {
        const prevTodos = localStorage.getItem("todo");
        localStorage.setItem("todo", [...prevTodos, action.payload]);
      } else {
        localStorage.setItem("todo", [action.payload]);
      }
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
      state.editTodo = { ...newEditTodo };
      const selectedTodoinfo = state.todos.find(
        (td) => td.id === state.editTodo.id
      ).text;
      return {
        ...state,
        selectedTodoText: selectedTodoinfo,
      };

    case "CLOSE_MODAL":
      const closedShow = { show: false, id: state.editTodo.id };
      return {
        ...state,
        editTodo: { ...closedShow },
      };

    case "CHANGE_TODO":
      return {
        ...state,
        selectedTodoText: action.text,
      };

    case "SAVE_TODO":
      const selectedId = state.editTodo.id;
      const selectedTodo = state.todos.find((td) => td.id === selectedId);
      selectedTodo.text = state.selectedTodoText;
      const closeShow = { show: false, id: state.editTodo.id };
      return {
        ...state,
        todos: [...state.todos],
        editTodo: { ...closeShow },
      };

    case "READ_LOCAL":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
  }

  return state;
};

export default reducer;
