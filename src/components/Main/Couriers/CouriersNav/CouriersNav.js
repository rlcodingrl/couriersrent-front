/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";

import "./CouriersNav.css";

import { UserContext } from "../../../app/app";


const CouriersNav = () => {

  const {user} = useContext(UserContext)
  // console.log(user.role)

  return (
    <div className="couriers-nav">
      {user.role==="admin"?<a href="#">Create new user</a>:null}
    </div>
  );
};

export default CouriersNav;
