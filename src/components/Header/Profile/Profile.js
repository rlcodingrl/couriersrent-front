import React, { useContext } from "react";
import { UserContext } from "../../app/app";
import { logout } from "../../../services/logout";
import { NavLink } from "react-router-dom";

import "./Profile.css";

const Profile = () => {
  const { user, setUser, ifAuthenticated, setIfAuthenticated } =
    useContext(UserContext);
  console.log(user);
  return (
    <div className="profile">
      {user.balance}$ {user.name}{" "}
      <NavLink
        onClick={() => {
          logout(setUser, setIfAuthenticated);
          console.log("works onclick");
        }}
        to="/"
      >
        Logout
      </NavLink>
    </div>
  );
};

export default Profile;
