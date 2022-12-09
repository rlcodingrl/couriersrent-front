import Header from "../Header";
import Main from "../Main";
import Auth from "../Auth";
import React, { useContext } from "react";
import { UserContext } from "../app/app";
import { ifValidJwtFunc } from "../../services/ifValidJwtFunc";
import { useState } from "react";

const AuthOrApp = () => {
  let { user } = useContext(UserContext);
  console.log(user);
  const [ifValidJwtRes, setIfValidJwtRes] = useState(false);
  ifValidJwtFunc(user.jwt, setIfValidJwtRes);

  return ifValidJwtRes ? (
    <>
      <Header />
      <Main />
    </>
  ) : (
    <Auth setIfValidJwtRes={setIfValidJwtRes} />
  );
};
export default AuthOrApp;
