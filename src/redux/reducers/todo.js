const initialState = {
  todos: [],
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
    default:
      return state;
  }
};

export default todo;
