import React, { useEffect, useState } from "react";

import "./AllNews.css";

import getAllNews from "../../../../services/news/getAllNews";
import NewsItemRow from "./NewsItemRow";

const AllNews = ({newsCounter}) => {

  const [news, setNews]=useState([])

  // console.log(news)

  useEffect(()=>{
    getAllNews().then(res=>{
      setNews(res)
    })
  },[newsCounter])

  return (
    <div className="all-news">
      {news.map((el) => <NewsItemRow news={el} key={el._id} />)}

    </div>
  )

};

export default AllNews;
