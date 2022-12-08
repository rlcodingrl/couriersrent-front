import "./app.css";

import { useState } from "react";

import { useRoutes } from "../../routes/routes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return useRoutes(isAuthenticated);
}

export default App;
