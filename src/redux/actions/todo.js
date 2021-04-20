import * as api from "../api/todo";

export const addTodo = (todo) => async (dispatch) => {
  try {
    const res = await api.addTodo(todo);
    if (res.status === 200) {
      dispatch({ type: "ADD_TODO", payload: res.data });
      //   console.log(res.data);
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTodo = (id) => async (dispatch) => {
  try {
    const res = await api.getTodo(id);
    if (res.status === 200) {
      //   console.log(res.data);
      //   console.log(res.data.todo);
      dispatch({ type: "FETCH_TODO", payload: res.data.todo });
    } else {
      console.log("error occer");
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeTodo = (id) => async (dispatch) => {
  try {
    const res = await api.removeTodo(id);
    if (res.status === 200) {
      //   console.log(res.data.todo);
      dispatch({ type: "REMOVE_TODO", payload: res.data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const currentTodo = (id) => {
  return {
    type: "CURRENT_TODO",
    payload: { id },
  };
};

export const completeTodo = (id) => {
  return {
    type: "COMPLETE_TODO",
    payload: { id },
  };
};
