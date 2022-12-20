import React, { useContext } from "react";

import "./CouriersItemRowMenu.css";

import { UserContext } from "../../../../../../app/app";
import { StatusContext } from "../../../../Couriers";
import { fullInfoContext } from "../../../../Couriers";
import { courierUpdateContext } from "../../../../Couriers"; 

import changeCourierStatus from "../../../../../../../services/changeCourierStatus";

const CourierItemRowMenu = ({courierId}) => {

  const {user} = useContext(UserContext)
  const courierStatus=useContext(StatusContext)
  const { setCourierCounter } = useContext(courierUpdateContext)

  // eslint-disable-next-line
  const {fullInfo,setFullInfo}=useContext(fullInfoContext)


  return (
    <div className="couriers-item-row-menu">
      {((user.role === 'user')&&(courierStatus==='reserved'))||(user.role === 'admin')
        ?<div className="couriers-item-row__col def-btn" 
              onClick={()=>{setFullInfo({active: true, courierId: courierId});console.log(courierId)}}>
                Full info
         </div>
        :null
      }

      {user.role === 'admin'?<div className="couriers-item-row__col def-btn">Edit</div>:null}
      {user.role === 'admin'?<div className="couriers-item-row__col def-btn">Delete</div>:null}

      {(user.role === 'user')&&(courierStatus==='free')
        ?<div className="couriers-item-row__col def-btn" 
              onClick={()=>{changeCourierStatus(courierId,user.name,setCourierCounter)}}>
                Reserve
         </div>
        :null}

      {(user.role === 'user')&&(courierStatus==='reserved')
        ?<div className="couriers-item-row__col def-btn"
              onClick={()=>{changeCourierStatus(courierId,'Free',setCourierCounter)}}>
                Unreserve
         </div>
        :null}
    </div>
  );
};

export default CourierItemRowMenu;
