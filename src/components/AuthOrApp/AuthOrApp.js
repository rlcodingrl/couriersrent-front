import Header from "../Header";
import Main from "../Main";
import Auth from "../Auth";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../app/app";
import { ifValidJwtFunc } from "../../services/ifValidJwtFunc";

const AuthOrApp = () => {
  let { user, setUser, ifAuthenticated, setIfAuthenticated } =
    useContext(UserContext);

  // console.log(ifAuthenticated);

  useEffect(() => {
    ifValidJwtFunc(user.jwt, setIfAuthenticated, setUser);
  }, []);

  return ifAuthenticated ? (
    <>
      <Header />
      <Main />
    </>
  ) : (
    <Auth setIfAuthenticated={setIfAuthenticated} />
  );
};
export default AuthOrApp;
