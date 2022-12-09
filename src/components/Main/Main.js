import React from "react";
import { Route, Routes } from "react-router-dom";

import "./Main.css";

import Couriers from "./Couriers";
import Rules from "./Rules";
import Users from "./Users";
import Home from "./Home";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/couriers" element={<Couriers />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default Main;
