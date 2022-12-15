import React, { useState, useContext } from "react";

import "./Couriers.css";

import CouriersNav from "./CouriersNav";
import CouriersList from "./CouriersList/CouriersList";

import { UserContext } from "../../app/app";


export const StatusContext = React.createContext({});

const Couriers = ({status}) => {

  const [courierStatus]=useState(status)

  const {user} = useContext(UserContext);


  return (
    <StatusContext.Provider value={courierStatus}>
      <div className="couriers">
        this is couriers comp {status}
        <CouriersNav />
        <CouriersList />
      </div>
    </StatusContext.Provider>
  );
};

export default Couriers;
