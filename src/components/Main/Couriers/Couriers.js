import React, { useState, useContext } from "react";

import "./Couriers.css";

import CouriersNav from "./CouriersNav";
import CouriersList from "./CouriersList/CouriersList";

import { UserContext } from "../../app/app";
import FullInfoCourier from "./FullInfoCourier";

export const StatusContext = React.createContext({});
export const fullInfoContext = React.createContext({});


const Couriers = ({status}) => {

  const [courierStatus]=useState(status)
  const [fullInfo,setFullInfo] = useState({active: false, userId: ''})

  console.log(fullInfo)

  const {user} = useContext(UserContext);


  return (
    <StatusContext.Provider value={courierStatus}>
    <fullInfoContext.Provider value={{fullInfo, setFullInfo}}>

      <div className="couriers">
        this is couriers comp {status} <span onClick={()=>{setFullInfo({active: true});console.log(fullInfo)}}>open full info</span>
        <CouriersNav />
        <CouriersList />
      </div>
      
      <FullInfoCourier></FullInfoCourier>
      </fullInfoContext.Provider> 
    </StatusContext.Provider>
  );
};

export default Couriers;
