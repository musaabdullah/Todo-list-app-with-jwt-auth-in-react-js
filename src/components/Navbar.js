import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleLogout } from "../redux/actions/user";
function Navbar() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const history = useHistory();

  const submitLogout = () => {
    dispatch(handleLogout());
    // <Redirect to={{ pathname: "/login" }} />;
    history.push("/login");
    window.location.reload();
  };

  return (
    <div className="nav bg-dark d-flex ">
      <Link to="/" className="nav-item nav-link text-white flex-grow-1">
        Home
      </Link>
      {state.user ? (
        <div className="d-flex ">
          <Link to="/register" className="nav-item nav-link text-white">
            {state.user.username}
          </Link>
          <button
            onClick={() => submitLogout()}
            className="nav-item nav-link text-white bg-dark btn"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="d-flex">
          <Link to="/register" className="nav-item nav-link text-white">
            Register
          </Link>
          <Link to="/login" className="nav-item nav-link text-white">
            Login
          </Link>
        </div>
      )}
      )
    </div>
  );
}

export default Navbar;
