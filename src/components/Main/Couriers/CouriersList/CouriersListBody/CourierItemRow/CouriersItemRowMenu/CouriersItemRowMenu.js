import React, { useContext } from "react";

import "./CouriersItemRowMenu.css";

import { UserContext } from "../../../../../../app/app";

const CourierItemRowMenu = () => {

  const {user} = useContext(UserContext)

  console.log(user)

  return (
    <>
      <div className="couriers-item-row__col">
        Full info
      </div>
      {user.role === 'admin'?<div className="couriers-item-row__col">Edit</div>:null}
      {user.role === 'admin'?<div className="couriers-item-row__col">Delete</div>:null}
    </>
  );
};

export default CourierItemRowMenu;
