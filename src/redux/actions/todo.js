import * as api from "../api/todo";

export const addTodo = (todo) => async (dispatch) => {
  try {
    const res = await api.addTodo(todo);
    if (res.status === 200) {
      dispatch({ type: "ADD_TODO", payload: res.data });
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTodo = () => async (dispatch) => {
  try {
    const res = await api.getTodo();
    if (res.status === 200) {
      //   console.log(res.data);
      console.log(res.data.todo);
      dispatch({ type: "FETCH_TODO", payload: res.data.todo });
    } else {
      console.log("error occer");
    }
  } catch (error) {
    console.log(error);
  }
};
