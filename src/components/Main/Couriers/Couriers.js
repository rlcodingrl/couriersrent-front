import React, { useState } from "react";

import "./Couriers.css";

import CouriersNav from "./CouriersNav";
import CouriersList from "./CouriersList/CouriersList";

import couriersData from "../../../data/couriersData";

export const StatusContext = React.createContext({});

const Couriers = ({status}) => {

  const [courierStatus]=useState(status)

  const [couriers] = useState(couriersData);

  return (
    <StatusContext.Provider value={courierStatus}>
      <div className="couriers">
        this is couriers comp {status}
        <CouriersNav />
        <CouriersList couriersData={couriers} />
      </div>
    </StatusContext.Provider>
  );
};

export default Couriers;
