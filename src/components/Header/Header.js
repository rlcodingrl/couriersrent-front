import React from "react";

import Nav from "./Nav";
import Profile from "./Profile";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Nav>This is nav section</Nav>
      <Profile>This is Profile section</Profile>
    </div>
  );
};

export default Header;
