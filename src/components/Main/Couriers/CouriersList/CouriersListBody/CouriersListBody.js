import React, { useEffect, useState, useContext } from "react";

import CourierItemRow from "./CourierItemRow/CourierItemRow";

import "./CouriersListBody.css";
import getCouriers from "../../../../../services/getCouriers";
import couriersDataDef from "../../../../../data/couriersDataDef";
import { StatusContext } from "../../Couriers";
import { UserContext } from "../../../../app/app";

const CouriersListBody = () => {

  const [couriersData, setCouriersData] = useState(couriersDataDef);
  let { user, setUser } = useContext(UserContext);

  const courierStatus=useContext(StatusContext)

  useEffect(()=>{
    getCouriers(setCouriersData,courierStatus,user)
  },[])

  return (
    <div className="couriers-list-body">
      {couriersData.map((el) => (
        <CourierItemRow
          courier={el}
          key={el._id}
        />
      ))}
    </div>
  );
};

export default CouriersListBody;
