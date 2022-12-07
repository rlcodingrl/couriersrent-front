import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/couriers">Couriers</Link>
      <Link to="/rules">Faq / Rules</Link>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Nav;
