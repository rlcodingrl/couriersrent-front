import React from "react";
import {useForm} from 'react-hook-form'

import postNewNews from "../../../../services/news/postNewNews";

import "./NewNews.css";





const NewNews = () => {

  const {
    register,
    formState: {
      errors, isValid
    },
    handleSubmit,
    reset
  } =useForm({
    mode:"onBlur"
  });

  const onSubmit = (data) => {
  

    // alert(JSON.stringify(data));
    console.log(data)
    postNewNews(data).then(res=>{
      if (res.status===true) {
        // setIfCreateSuccessful(true)
        // setCourierCounter(prev=>prev+1)
        reset()
      }
      
    })
    
  }

  return (
    <form className="new-news-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="new-news-line">
            <div className="new-news-line__description">message</div>
            <div>
              <input
                {...register("message", {
                  required: "Message is required",
                })}
              />
            </div>
            <div className="new-news-line__error">
              {errors?.message && <p>{errors?.message?.message || "Error!"}</p>}
            </div>
          </label>
      <input type="submit" disabled={!isValid} />
    </form>
  )

};

export default NewNews;
