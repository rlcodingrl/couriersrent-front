import React, { useState, useContext } from "react";

import "./Couriers.css";

import CouriersNav from "./CouriersNav";
import CouriersList from "./CouriersList/CouriersList";

import { UserContext } from "../../app/app";
import FullInfoCourier from "./FullInfoCourier";

export const StatusContext = React.createContext({});
export const ifFullInfoActiveContext = React.createContext({});


const Couriers = ({status}) => {

  const [courierStatus]=useState(status)
  const [ifFullInfoActive,setFullInfoActive] = useState(false)
  console.log(ifFullInfoActive)
  

  const {user} = useContext(UserContext);


  return (
    <StatusContext.Provider value={courierStatus}>
      <div className="couriers">
        this is couriers comp {status} <span onClick={()=>{setFullInfoActive(true);console.log(ifFullInfoActive)}}>open full info</span>
        <CouriersNav />
        <CouriersList />
      </div>

      <ifFullInfoActiveContext.Provider value={{ifFullInfoActive, setFullInfoActive}}>
        <FullInfoCourier></FullInfoCourier>
      </ifFullInfoActiveContext.Provider> 
    </StatusContext.Provider>
  );
};

export default Couriers;
