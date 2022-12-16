import React, { useState, useContext } from "react";

import "./FullInfoCourier.css";

import { fullInfoContext } from "../Couriers";

const FullInfoCourier = ({chosenCourier}) => {

  const [courier]=useState(chosenCourier)
  const {fullInfo,setFullInfo}=useContext(fullInfoContext)

  return (
    <div className={fullInfo.active===true?"full-info-courier active":"full-info-courier"}>
      FullInfoCourier component . id of user {fullInfo.courierId}
      <span className='close-btn' onClick={()=>{setFullInfo({active: false})}}>Close btn</span>
    </div>
  );
};

export default FullInfoCourier;
