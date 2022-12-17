import { back } from "../config/config";

const getCouriers = async (setCouriersData, courierStatus, user, id = 'none') => {

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

  let path = `${back}/couriers/${courierStatus}`;
  if (id !== 'none') {
    path = `${back}/couriers/${id}`
  }



  fetch(path, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result.data.courier)
    //   console.log(result.data.couriers);
      if (id !== 'none') { setCouriersData(result.data.courier); return }
      setCouriersData(filterCouriers(result.data.couriers));
    })
    .catch((error) => console.log("error", error));
};

export default getCouriers;
