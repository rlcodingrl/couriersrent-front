import React from "react";

import CourierItemRow from "./CourierItemRow/CourierItemRow";

import "./CouriersListBody.css";

const CouriersListBody = ({ couriersData }) => {
  const consoleLogFunc = () => {
    console.log("consoleLogFunc");
  };

  return (
    <div className="couriers-list-body">
      {couriersData.map((el) => (
        <CourierItemRow
          courier={el}
          key={el.id}
          consoleLogFunc={consoleLogFunc}
        />
      ))}
    </div>
  );
};

export default CouriersListBody;
