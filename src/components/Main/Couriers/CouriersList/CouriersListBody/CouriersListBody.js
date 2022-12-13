import React, { useEffect, useState, useContext } from "react";

import CourierItemRow from "./CourierItemRow/CourierItemRow";

import "./CouriersListBody.css";
import getCouriers from "../../../../../services/getCouriers";
import couriersData from "../../../../../data/couriersData";
import { StatusContext } from "../../Couriers";

const CouriersListBody = () => {

  const [couriersData2, setCouriersData2] = useState(couriersData);

  const courierStatus=useContext(StatusContext)

  useEffect(()=>{
    getCouriers(setCouriersData2,courierStatus)
  },[])

  return (
    <div className="couriers-list-body">
      {couriersData2.map((el) => (
        <CourierItemRow
          courier={el}
          key={el._id}
        />
      ))}
    </div>
  );
};

export default CouriersListBody;
