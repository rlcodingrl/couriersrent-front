import React from "react";

import "./CouriersList.css";

import CourierListHeader from "./CouriersListHeader/CouriersListHeader";
import CourierListBody from "./CouriersListBody/CouriersListBody";

const CouriersList = ({ couriersData }) => {
  return (
    <div className="couriers-list">
      <CourierListHeader />
      <CourierListBody couriersData={couriersData} />
    </div>
  );
};

export default CouriersList;
