import React, { useEffect, useState } from "react";
import { loginHandler } from "../../services/loginHandler";

import "./Auth.css";

const Auth = () => {
  const [form, setForm] = useState({ login: "", password: "" });
  const [error, setError] = useState("");

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className="auth">
      <h1>Couriers rent service</h1>
      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault();
          let res = await loginHandler(form);
          console.log(res);
        }}
      >
        <div>
          <span>login</span>
          <input
            name="login"
            type="text"
            placeholder="login"
            autoComplete="username"
            onChange={changeHandler}
            value={form.login}
          ></input>
        </div>
        <div>
          <span>password</span>
          <input
            name="password"
            type="password"
            placeholder="password"
            autoComplete="current-password"
            value={form.password}
            onChange={changeHandler}
          ></input>
        </div>
        <button type="submit">Login</button>
      </form>
      {/* {error ? "ошибка" : ""} */}
    </div>
  );
};

export default Auth;
