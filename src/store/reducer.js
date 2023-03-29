const initialState = {
  todos: [],
  editTodo: { show: false, id: null },
  selectedTodoText: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };
      break;

    case "DELETE_TODO":
      const newList = state.todos.filter((todo) => action.id !== todo.id);
      return {
        todos: newList,
      };
      break;

    case "COMPLETE_TODO":
      let completedTodo = state.todos.find((td) => action.id === td.id);
      const bool = completedTodo.done;
      completedTodo.done = !bool;
      return {
        todos: [...state.todos],
      };
      break;

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
      break;

    case "CLOSE_MODAL":
      const closedShow = { show: false, id: state.editTodo.id };
      return {
        ...state,
        editTodo: { ...closedShow },
      };
      break;

    case "CHANGE_TODO":
      return {
        ...state,
        selectedTodoText: action.text,
      };
      break;

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
      break;

    case "FETCH_LOCAL":
      console.log(action.payload);
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
      break;
  }

  return state;
};

export default reducer;
