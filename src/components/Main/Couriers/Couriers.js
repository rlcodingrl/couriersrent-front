import React, { useState } from "react";

import "./Couriers.css";

import CouriersNav from "./CouriersNav";
import CouriersList from "./CouriersList/CouriersList";

import couriersData from "../../../data/couriersData";

const Couriers = () => {
  const [couriers, setCouriers] = useState(couriersData);

  return (
    <div className="couriers">
      this is couriers comp
      <span>click test</span>
      <CouriersNav />
      <CouriersList couriersData={couriers} />
    </div>
  );
};

export default Couriers;
