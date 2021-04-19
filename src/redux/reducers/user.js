const initialState = {
  user: {},
  isLoggedIn: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      state = {
        ...state,
        user: action.payload,
      };
      return state;
    case "LOGIN_SCCESS":
      state = {
        ...state,
        isLoggedIn: state.user ? true : false,
      };
      return state;
    default:
      return state;
  }
};

export default users;
