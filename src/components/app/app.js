import "./app.css";

import { useRoutes } from "../../routes/routes";

function App() {
  let isAuthenticated = false;

  return useRoutes(isAuthenticated);
}

export default App;
