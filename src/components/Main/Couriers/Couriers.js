import React, { useState, useContext } from "react";

import "./Couriers.css";

import CouriersNav from "./CouriersNav";
import CouriersList from "./CouriersList/CouriersList";

import { UserContext } from "../../app/app";
import FullInfoCourier from "./FullInfoCourier";
import NewCourier from "./NewCourier";

export const StatusContext = React.createContext({});
export const fullInfoContext = React.createContext({});
export const newCourierContext = React.createContext({});

const Couriers = ({status}) => {

  const [courierStatus]=useState(status)
  const [fullInfo,setFullInfo] = useState({active: false, userId: ''})  // this state is object about component fullInfo that describe {active,id}
  const [newCourier,setNewCourier] = useState(false) // this state is object about component newCourier that describe if it active


  // eslint-disable-next-line
  const {user} = useContext(UserContext);


  return (
    <StatusContext.Provider value={courierStatus}>
    <fullInfoContext.Provider value={{fullInfo, setFullInfo}}>
    <newCourierContext.Provider value={{newCourier,setNewCourier}}>

      <div className="couriers">
        this is couriers comp {status} 
        <CouriersNav />
        <CouriersList />
      </div>
      
      <FullInfoCourier/>
      <NewCourier/>

    </newCourierContext.Provider>
    </fullInfoContext.Provider> 
    </StatusContext.Provider>
  );
};

export default Couriers;
