import "./app.css";

import React, { useState } from "react";

import AuthOrApp from "../AuthOrApp/AuthOrApp";

export const UserContext = React.createContext({});

function App() {
  const [user, setUser] = useState({ jwt: localStorage.getItem("jwt") });
  // console.log(user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <AuthOrApp />
      </div>
    </UserContext.Provider>
  );
}

export default App;
