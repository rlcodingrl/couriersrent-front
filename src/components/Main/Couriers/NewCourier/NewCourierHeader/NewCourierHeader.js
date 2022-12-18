import React from "react";

import "./NewCourierHeader.css";


const NewCourierHeader = ({setNewCourier}) => {

  return (
      <div className="new-courier-header">
        <span className='close-btn def-btn' onClick={()=>{setNewCourier(false)}}>Close new courier</span>
      </div>
      
  );
};

export default NewCourierHeader;
