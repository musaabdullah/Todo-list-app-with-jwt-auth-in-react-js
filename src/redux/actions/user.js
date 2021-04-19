import * as api from "../api/user";

export const handleLogin = (user) => async (dispatch) => {
  try {
    const res = await api.handleLogin(user);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
