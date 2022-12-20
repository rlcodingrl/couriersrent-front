import React, { useEffect, useState, useContext } from "react";

import CourierItemRow from "./CourierItemRow/CourierItemRow";

import "./CouriersListBody.css";
import getCouriers from "../../../../../services/getCouriers";
import couriersDataDef from "../../../../../data/couriersDataDef";
import { StatusContext } from "../../Couriers";
import { UserContext } from "../../../../app/app";

export const courierUpdateContext = React.createContext({});

const CouriersListBody = () => {
  const [courierCounter, setCourierCounter] = useState(0);  // state to update courier list

  const [couriersData, setCouriersData] = useState(couriersDataDef);

  // eslint-disable-next-line
  let { user, setUser } = useContext(UserContext);

  const courierStatus = useContext(StatusContext);

  // eslint-disable-next-line
  useEffect(() => {
    getCouriers(courierStatus, user).then(res=>setCouriersData(res));
  }, [user, courierStatus,courierCounter]);

  return (
    <courierUpdateContext.Provider
      value={ setCourierCounter }
    >
      <div className="couriers-list-body">
        {couriersData.map((el) => (
          <CourierItemRow courier={el} key={el._id} />
        ))}
      </div>
    </courierUpdateContext.Provider>
  );
};

export default CouriersListBody;
