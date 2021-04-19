const initialState = {
  user: {},
  userError: {},
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SCCESS":
      state = {
        ...state,
        user: action.payload,
      };
      return state;
    case "LOGIN_FAILED":
      state = {
        ...state,
        userError: action.payload,
      };
      return state;
    case "REGISTER_SUCCESS":
      state = {
        ...state,
        user: action.payload,
      };
      return state;
    case "REGISTER_FAILED":
      state = {
        ...state,
        userError: action.payload,
      };
      return state;
    default:
      return state;
  }
};

export default users;
