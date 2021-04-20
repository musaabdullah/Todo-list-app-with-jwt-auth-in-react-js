import React from "react";
import { useState } from "react";
import { handleRegister } from "../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Register() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const submitRegister = (e) => {
    e.preventDefault();
    dispatch(handleRegister(user));
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h3>Register Form</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group m-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                  />
                  {state.userError.username && (
                    <div className="text-danger">
                      {state.userError.username}
                    </div>
                  )}
                </div>
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
                    onClick={submitRegister}
                  >
                    Register
                  </button>
                  <button className="btn btn-danger">Cancel</button>
                </div>
                <div className="mt-3">
                  if you already have account click ?
                  <Link to="/login">here</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
