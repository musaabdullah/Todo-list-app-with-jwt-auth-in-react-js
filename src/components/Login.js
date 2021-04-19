import React from "react";
import { useState } from "react";
import { handleLogin } from "../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  // const [userError, setUserError] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  console.log(state);
  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(handleLogin(user));
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h3>Login Form</h3>
            </div>
            <div className="card-body shadow">
              <form>
                <div className="form-group m-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                  {state.userError.email && (
                    <div className="text-danger">{state.userError.email}</div>
                  )}
                </div>
                <div className="form-group m-2">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                  {state.userError.password && (
                    <div className="text-danger">
                      {state.userError.password}
                    </div>
                  )}
                </div>
                <div className="container text-center">
                  <button
                    className="btn btn-primary "
                    style={{ marginRight: 5 }}
                    onClick={submitLogin}
                  >
                    Login
                  </button>
                  <button className="btn btn-danger">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
