import Header from "../components/Header";
import Main from "../components/Main";
import Auth from "../components/Auth";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }
};
