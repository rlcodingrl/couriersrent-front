import React, { useEffect, useState } from "react";

import CourierItemRow from "./CourierItemRow/CourierItemRow";

import "./CouriersListBody.css";
import getCouriers from "../../../../../services/getCouriers";

const CouriersListBody = ({ couriersData }) => {

  const [couriersData2, setCouriersData2] = useState(couriersData);

  useEffect(()=>{
    getCouriers(setCouriersData2)
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
