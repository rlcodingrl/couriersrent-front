import React, { useContext } from "react";

import "./CouriersItemRowMenu.css";

import { UserContext } from "../../../../../../app/app";
import { StatusContext } from "../../../../Couriers";

const CourierItemRowMenu = () => {

  const {user} = useContext(UserContext)
  const courierStatus=useContext(StatusContext)

  // console.log(user)
  // console.log(courierStatus)

  return (
    <div className="couriers-item-row-menu">
      {user.role === 'admin'?<div className="couriers-item-row__col">Full info</div>:null}
      {user.role === 'admin'?<div className="couriers-item-row__col">Edit</div>:null}
      {user.role === 'admin'?<div className="couriers-item-row__col">Delete</div>:null}

      {(user.role === 'user')&&(courierStatus==='free')?<div className="couriers-item-row__col">Reserve</div>:null}
      {(user.role === 'user')&&(courierStatus==='reserved')?<div className="couriers-item-row__col">Full info</div>:null}
      {(user.role === 'user')&&(courierStatus==='reserved')?<div className="couriers-item-row__col">Unreserve</div>:null}
    </div>
  );
};

export default CourierItemRowMenu;
