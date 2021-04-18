import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav bg-dark ">
      <Link className="nav-item nav-link text-white">Home</Link>
      <Link to="/register" className="nav-item nav-link text-white">
        Register
      </Link>
      <Link to="/login" className="nav-item nav-link text-white">
        Login
      </Link>
      )
    </div>
  );
}

export default Navbar;
