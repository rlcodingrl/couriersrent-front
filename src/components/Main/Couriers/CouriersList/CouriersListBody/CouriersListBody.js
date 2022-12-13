import React from "react";

import CourierItemRow from "./CourierItemRow/CourierItemRow";

import "./CouriersListBody.css";

const CouriersListBody = ({ couriersData }) => {

  const couriersData2 = 

  

  return (
    <div className="couriers-list-body">
      {couriersData.map((el) => (
        <CourierItemRow
          courier={el}
          key={el.id}
        />
      ))}
    </div>
  );
};

export default CouriersListBody;
