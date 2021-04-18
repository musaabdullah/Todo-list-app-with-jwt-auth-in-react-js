import React from "react";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [userError, setUserError] = useState({ email: "", password: "" });
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/login", user);
      if (res.status === 200) {
        if (!res.data.success) {
          setUserError(res.data.err);
          console.log(res.data.err);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h3>Login Form</h3>
            </div>
            <div className="card-body">
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
                  {userError.email && (
                    <div className="text-danger">{userError.email}</div>
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
                  {userError.password &
                  <div className="text-danger">{userError.password}</div>}
                </div>
                <div className="container text-center">
                  <button
                    className="btn btn-primary "
                    style={{ marginRight: 5 }}
                    onClick={handleLogin}
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
