import Header from "../Header";
import Main from "../Main";
import Auth from "../Auth";
import React, { useContext } from "react";

export const AuthOrApp = () => {
  const ifAuthenticated = false;

  const jwt = useContext(UserContext);
  return {
    /* {ifAuthenticated ? (
        <>
          <Header />
          <Main />
        </>
      ) : (
        <Auth />
      )} */
  };
};
