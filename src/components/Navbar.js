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
    history.push("/login");
  };

  return (
    <div className="nav bg-dark d-flex">
      <Link to="/" className="nav-item nav-link text-white">
        Home
      </Link>
      {state.user ? (
        <>
          <Link to="/register" className="nav-item nav-link text-white">
            {state.user.username}
          </Link>
          <Link onClick={submitLogout} className="nav-item nav-link text-white">
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/register" className="nav-item nav-link text-white">
            Register
          </Link>
          <Link to="/login" className="nav-item nav-link text-white">
            Login
          </Link>
        </>
      )}
      )
    </div>
  );
}

export default Navbar;
