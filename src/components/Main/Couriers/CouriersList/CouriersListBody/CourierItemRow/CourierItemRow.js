import React from "react";

import "./CourierItemRow.css";

import CourierItemRowMenu from "./CouriersItemRowMenu";



const CourierItemRow = ({ courier }) => {


  return (
    <div className="couriers-item-row">
      <div className="couriers-item-row__col couriers-item-row__name">
        {courier["name"]}
      </div>
      <div className="couriers-item-row__col">{courier["Pers/Bus"]}</div>
      <div className="couriers-item-row__col">{courier["Summ"]}</div>
      <div className="couriers-item-row__col">{courier["Bank"]}</div>
      <div className="couriers-item-row__col">Citi, Wells</div>
      <div className="couriers-item-row__col">{courier["Started day"]}</div>
      <div className="couriers-item-row__col">{courier["Status"]}</div>

      <CourierItemRowMenu/>


    </div>
  );
};

export default CourierItemRow;
