import React from "react";

import "./CourierItemRow.css";

const CourierItemRow = ({ courier, consoleLogFunc }) => {
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
      <div className="couriers-item-row__col" onClick={consoleLogFunc}>
        Full info
      </div>
      <div className="couriers-item-row__col">Edit</div>
      <div className="couriers-item-row__col">Delete</div>
    </div>
  );
};

export default CourierItemRow;
