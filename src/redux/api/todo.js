import axios from "axios";

const url = "http://localhost:4000/";

export const addTodo = (todo) => axios.post(url + "addTodo", todo);
export const getTodo = (id) => axios.get(url + "todo/" + id);
export const removeTodo = (id) => axios.delete(url + "todo/" + id);
