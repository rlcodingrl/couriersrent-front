import "./app.css";

import React, { useState } from "react";

import AuthOrApp from "../AuthOrApp/AuthOrApp";

const jwt = localStorage.getItem("jwt");
export const UserContext = React.createContext(jwt);

function App() {
  return (
    <UserContext.Provider value={jwt}>
      <div className="App">
        <AuthOrApp />
      </div>
    </UserContext.Provider>
  );
}

export default App;
