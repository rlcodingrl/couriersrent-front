import { back } from "../config/config";

const getCouriers = async (setCouriersData, courierStatus, user) => {

    const jwt = localStorage.getItem('jwt')  

    if (courierStatus === "reserved") {
      courierStatus = "res";
    }

  const filterCouriers = (courierList)=> {
    if ((courierStatus==='res')&&(user.role==='user')) {
        return courierList.filter((el) => el.status === user.name )
    }
    return courierList
  }




  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${jwt}`
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`${back}/couriers/${courierStatus}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // console.log(result)
      // console.log(result.data.couriers);
      setCouriersData(filterCouriers(result.data.couriers));
    })
    .catch((error) => console.log("error", error));
};

export default getCouriers;
