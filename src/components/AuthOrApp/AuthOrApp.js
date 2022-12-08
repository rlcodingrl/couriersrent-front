import Header from "../Header";
import Main from "../Main";
import Auth from "../Auth";
import React, { useContext } from "react";
import { UserContext } from "../app/app";
import { ifValidJwtFunc } from "../../services/ifValidJwtFunc";
import { useState } from "react";

const AuthOrApp = () => {
  let jwt = useContext(UserContext);
  console.log(jwt);
  const [ifValidJwtRes, setIfValidJwtRes] = useState(false);
  // jwt = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg4YWI0MjY2Nzk3MDQ2NDMyY2FjNjEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Njk5MDE1MzEsImV4cCI6MTY3MjQ5MzUzMX0.radvl7Hd-jc__4Y47YyAUaOMQ9AK0uMGO4mDV6QIpbY`;
  ifValidJwtFunc(jwt, setIfValidJwtRes);

  // let ifValidJwtRes = false;  console.log(ifValidJwtRes);
  return (
    <>
      {ifValidJwtRes ? (
        <>
          <Header />
          <Main />
        </>
      ) : (
        <Auth setIfValidJwtRes={setIfValidJwtRes} />
      )}
    </>
  );
};
export default AuthOrApp;
