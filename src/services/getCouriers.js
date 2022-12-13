const getCouriers = async (setCouriersData) => {
    console.log('getCouriers works')

    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzkwOTg5Y2FkMzhkNjM0M2VmNWFjYTEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzA5MjIwNzQsImV4cCI6MTY3MTA5NDg3NH0.Aady9qHhy1_PaPRG4lvS7-fK0lYqH8xDau1UyLdvUkM");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://api.couriersrent.online/couriers/free", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result.data.couriers);
    setCouriersData(result.data.couriers)
  })
  .catch(error => console.log('error', error));
}

export default getCouriers