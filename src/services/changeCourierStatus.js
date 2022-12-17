import { back } from "../config/config";

const changeCourierStatus = async (courierId, newStatus) => {
  console.log('changeCourierStatus works')
  const token = localStorage.getItem('jwt')

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "status": `${newStatus}`
  });
  
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch(`${back}/couriers/change/status/${courierId}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export default changeCourierStatus
