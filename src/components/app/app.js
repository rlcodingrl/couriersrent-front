import "./app.css";

import React, { useState } from "react";

import { AuthOrApp } from "../AuthOrApp/AuthOrApp";

function App() {
  const jwt = localStorage.getItem("jwt");
  const UserContext = React.createContext({ jwt });

  return (
    <UserContext.Provider value={jwt}>
      <div className="App">
        <AuthOrApp />
      </div>
    </UserContext.Provider>
  );
}

export default App;
