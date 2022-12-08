import { back } from "../config/config";

export const ifValidJwtFunc = async (jwt, setIfValidJwtRes) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${jwt}`);
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  let res = await fetch(
    `http://api.couriersrent.online/couriers/free`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      // console.log(result.status);
      if (result.data) {
        console.log("token valid");
        setIfValidJwtRes(true);
        return true;
      }
      return result;
    })
    .catch((error) => console.log("error", error));
  return res;
};
