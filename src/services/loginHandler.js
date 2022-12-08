import { back } from "../config/config";

export const loginHandler = async ({ login, password }, setIfValidJwtRes) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    name: login,
    password: password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  let res = await fetch(`${back}/auth/login`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.user) {
        console.log(result);
        console.log("login success");
        console.log(result.data.access_token);
        localStorage.setItem("jwt", result.data.access_token);
        setIfValidJwtRes(true);
      }
      return result;
    })
    .catch((error) => console.log("error", error));

  return res;
};
