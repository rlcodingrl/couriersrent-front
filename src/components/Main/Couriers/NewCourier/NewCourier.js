import React from "react";

import "./NewCourier.css";



import NewCourierHeader from "./NewCourierHeader";
import NewCourierBody from "./NewCourierBody";

const NewCourier = () => {

  return (
    <div className={NewCourier.active===true?"new-courier active":"new-courier"}>

      <NewCourierHeader></NewCourierHeader>
      <NewCourierBody></NewCourierBody>

    </div>
  );
};

export default NewCourier;
