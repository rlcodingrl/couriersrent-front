import React, { useState, useContext } from "react";

import "./FullInfoCourier.css";

const FullInfoCourier = ({active, setActive, chosenCourier}) => {

  const [courier]=useState(chosenCourier)

  return (
    <div className={active?"full-info-courier active":"full-info-courier"}>
      FullInfoCourier component
      <span class='close-btn' onClick={()=>{console.log('close btn');setActive(false);}}>Close btn</span>
    </div>
  );
};

export default FullInfoCourier;
