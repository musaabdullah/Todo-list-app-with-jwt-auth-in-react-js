const initialState = {
  todos: [],
  currentTodo: null,
};

const todo = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      state = {
        todos: [...state.todos, payload],
      };
      return state;
    case "FETCH_TODO":
      state = {
        todos: payload,
      };
      return state;
    case "REMOVE_TODO":
      state = {
        todos: state.todos.filter((todo) => todo._id !== payload),
      };
      return state;
    case "CURRENT_TODO":
      state = {
        ...state,
        currentTodo: state.todos.filter((todo) => todo._id === payload.id),
      };
      return state;
    case "COMPLETE_TODO":
      state = {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo._id === payload.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
      return state;
    default:
      return state;
  }
};

export default todo;
