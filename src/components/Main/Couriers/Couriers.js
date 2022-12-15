import React, { useState, useContext } from "react";

import "./Couriers.css";

import CouriersNav from "./CouriersNav";
import CouriersList from "./CouriersList/CouriersList";

import { UserContext } from "../../app/app";
import FullInfoCourier from "./FullInfoCourier";

export const StatusContext = React.createContext({});

const Couriers = ({status}) => {

  const [courierStatus]=useState(status)

  const [modalActive,setModalActive] = useState(false)

  const {user} = useContext(UserContext);


  return (
    <StatusContext.Provider value={courierStatus}>
      <div className="couriers">
        this is couriers comp {status} <span onClick={()=>{setModalActive(true)}}>open full info</span>
        <CouriersNav />
        <CouriersList />
      </div>
      <FullInfoCourier active={modalActive} setActive={setModalActive}></FullInfoCourier>
    </StatusContext.Provider>
  );
};

export default Couriers;
