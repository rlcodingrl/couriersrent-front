import React from "react";
import {useForm} from 'react-hook-form'

import "./NewCourierBody.css";

const NewCourierBody = () => {
  const {
    register,
    formState: {
      errors, isValid
    },
    handleSubmit,
    reset
  } =useForm({
    mode:"onChange"
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="new-courier-body">
        <div className="new-courier-1clm new-courier-clm">
          <label>
            <div className="new-courier-line__description">Name</div>
            <div>
              <input {...register('firstName', {
                required: 'Field is required',
                minLength: {
                  value: 5,
                  message: 'Minimum 5 letters'
                }
              })} />
            </div>
            <div>
              {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
            </div>
          </label>
          
          
          <div className="new-courier-line__description">Holder Name</div>
          <div></div>
          <div className="new-courier-line__description">DOB (mm/dd/yyyy)</div>
          <div></div>
          <div className="new-courier-line__description">Cell Phone</div>
          <div></div>
          <div className="new-courier-line__description">Street Address</div>
          <div></div>
        </div>
        <div className="new-courier-2clm new-courier-clm">
          <div className="new-courier-line__description">Bank</div>
          <div></div>
          <div className="new-courier-line__description">Accounting number</div>
          <div></div>
          <div className="new-courier-line__description">Routing number</div>
          <div></div>
          <div className="new-courier-line__description">
            Wire routing number
          </div>
          <div></div>
          <div className="new-courier-line__description">SSN</div>
          <div></div>
          <div className="new-courier-line__description">EIN</div>
          <div></div>
        </div>
        <div className="new-courier-3clm new-courier-clm">
          <div className="new-courier-line__description">Pers/Bus</div>
          <div></div>
          <div className="new-courier-line__description">Summ</div>
          <div></div>
          <div className="new-courier-line__description">Used Banks</div>
          <div></div>
          <div className="new-courier-line__description">Started day</div>
          <div></div>
          <div className="new-courier-line__description">Status</div>
          <div></div>
          <div className="new-courier-line__description">Comment</div>
          <div></div>
        </div>
        <div className="full-info-4clm full-info-clm">
          place for chat
          <input type="submit" disabled={!isValid}/>
        </div>
      </div>
    </form>
  );
};

export default NewCourierBody;
