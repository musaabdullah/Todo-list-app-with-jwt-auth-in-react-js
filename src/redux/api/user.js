import axios from "axios";

const url = "http://localhost:4000/";

export const handleLogin = (user) => axios.post(url + "login", user);
