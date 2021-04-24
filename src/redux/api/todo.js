import axios from "axios";

const url = "https://todonodeapiwithreactjs.herokuapp.com/";

export const addTodo = (todo) => axios.post(url + "addTodo", todo);
export const getTodo = (id) => axios.get(url + "todo/" + id);
export const removeTodo = (id) => axios.delete(url + "todo/" + id);
