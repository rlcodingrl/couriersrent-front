import React, {useContext} from "react";

import "./NewCourier.css";

import { newCourierContext } from "../Couriers";

import NewCourierHeader from "./NewCourierHeader";
import NewCourierBody from "./NewCourierBody";

const NewCourier = () => {

  const {newCourier,setNewCourier} = useContext(newCourierContext)
  console.log(`newCourier = ${newCourier}`)

  return (
    <div className={newCourier===true?"new-courier active":"new-courier"}>

      <NewCourierHeader setNewCourier={setNewCourier}></NewCourierHeader>
      <NewCourierBody></NewCourierBody>

    </div>
  );
};

export default NewCourier;
