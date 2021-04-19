import axios from "axios";

const url = "http://localhost:4000/";

export const handleLogin = (user) => axios.post(url + "login", user);
export const handleRegister = (user) => axios.post(url + "register", user);
export const handleCheckAuth = () => axios.post(url + "check");
export const handleLogout = () => axios.get(url + "logout");
