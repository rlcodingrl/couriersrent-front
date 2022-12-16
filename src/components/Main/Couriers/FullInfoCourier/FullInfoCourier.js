import React, { useState, useContext } from "react";

import "./FullInfoCourier.css";

import { ifFullInfoActiveContext } from "../Couriers";

const FullInfoCourier = ({chosenCourier}) => {

  const [courier]=useState(chosenCourier)
  const {ifFullInfoActive,setFullInfoActive}=useContext(ifFullInfoActiveContext)

  return (
    <div className={ifFullInfoActive?"full-info-courier active":"full-info-courier"}>
      FullInfoCourier component
      <span className='close-btn' onClick={()=>{setFullInfoActive(false);}}>Close btn</span>
    </div>
  );
};

export default FullInfoCourier;
