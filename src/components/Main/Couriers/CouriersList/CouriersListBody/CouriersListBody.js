import React, { useEffect, useState, useContext } from "react";

import CourierItemRow from "./CourierItemRow/CourierItemRow";

import "./CouriersListBody.css";
import getCouriers from "../../../../../services/getCouriers";
import couriersDataDef from "../../../../../data/couriersDataDef";
import { StatusContext } from "../../Couriers";
import { UserContext } from "../../../../app/app";

import { courierUpdateContext } from "../../Couriers";




const CouriersListBody = () => {
  // eslint-disable-next-line
  const { courierCounter, setCourierCounter } = useContext(courierUpdateContext)


  const [couriersData, setCouriersData] = useState(couriersDataDef);

  // eslint-disable-next-line
  let { user, setUser } = useContext(UserContext);

  const courierStatus = useContext(StatusContext);

  // eslint-disable-next-line
  useEffect(() => {
    getCouriers(courierStatus, user).then(res=>setCouriersData(res));
  }, [user, courierStatus,courierCounter]);

  return (

      <div className="couriers-list-body">
        {couriersData.map((el) => (
          <CourierItemRow courier={el} key={el._id} />
        ))}
      </div>

  );
};

export default CouriersListBody;
