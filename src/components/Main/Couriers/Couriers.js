import React, { useState } from "react";

import "./Couriers.css";

import CouriersNav from "./CouriersNav";
import CouriersList from "./CouriersList/CouriersList";

import couriersData from "../../../data/couriersData";

const Couriers = ({status}) => {
  const [couriers] = useState(couriersData);

  return (
    <div className="couriers">
      this is couriers comp {status}
      <CouriersNav />
      <CouriersList couriersData={couriers} />
    </div>
  );
};

export default Couriers;
