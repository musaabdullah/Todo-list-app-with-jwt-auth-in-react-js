import * as api from "../api/user";

export const handleLogin = (user) => async (dispatch) => {
  try {
    const res = await api.handleLogin(user);
    if (res.data.success) {
      dispatch({ type: "LOGIN_SCCESS", payload: res.data.user });
    } else {
      dispatch({ type: "LOGIN_FAILED", payload: res.data.err });
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (user) => async (dispatch) => {
  try {
    const res = await api.handleRegister(user);
    if (res.data.success) {
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.user });
    } else {
      dispatch({ type: "REGISTER_FAILED", payload: res.data.err });
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleCheckAuth = () => async (dispatch) => {
  try {
    const res = await api.handleCheckAuth();
    dispatch({ type: "CHECK_USER", payload: res.data.user });
  } catch (error) {
    console.log(error);
  }
};

export const handleLogout = () => async (dispatch) => {
  try {
    const res = await api.handleLogout();
    dispatch({ type: "LOGOUT", payload: "" });
  } catch (error) {
    console.log(error);
  }
};
