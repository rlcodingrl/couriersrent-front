import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./Auth.css";

const Auth = () => {
  const [form, setForm] = useState({ login: "", password: "" });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className="auth">
      <h1>Couriers rent service</h1>
      <form action="">
        <div>
          <span>login</span>
          <input name="login" type="text" onChange={changeHandler}></input>
        </div>
        <div>
          <span>password</span>
          <input
            name="password"
            type="password"
            onChange={changeHandler}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Auth;
