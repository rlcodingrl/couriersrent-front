import React, { useContext } from "react";

import "./CouriersItemRowMenu.css";

import { UserContext } from "../../../../../../app/app";
import { StatusContext } from "../../../../Couriers";
import { ifFullInfoActiveContext } from "../../../../Couriers";


const CourierItemRowMenu = ({courierId}) => {

  const {user} = useContext(UserContext)
  const courierStatus=useContext(StatusContext)

  const {ifFullInfoActive,setFullInfoActive}=useContext(ifFullInfoActiveContext)


  return (
    <div className="couriers-item-row-menu">
      {user.role === 'admin'?<div className="couriers-item-row__col">Full info</div>:null}
      {user.role === 'admin'?<div className="couriers-item-row__col">Edit</div>:null}
      {user.role === 'admin'?<div className="couriers-item-row__col">Delete</div>:null}

      {(user.role === 'user')&&(courierStatus==='free')?<div className="couriers-item-row__col">Reserve</div>:null}
      {(user.role === 'user')&&(courierStatus==='reserved')?<div className="couriers-item-row__col" onClick={()=>{setFullInfoActive(true);console.log(courierId)}}>Full info</div>:null}
      {(user.role === 'user')&&(courierStatus==='reserved')?<div className="couriers-item-row__col">Unreserve</div>:null}
    </div>
  );
};

export default CourierItemRowMenu;
