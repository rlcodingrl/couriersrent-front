import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/couriers">Couriers</NavLink>
      <NavLink to="/rules">Faq / Rules</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
};

export default Nav;
