import React, {useState} from "react";

import NewNews from "./NewNews";
import AllNews from "./AllNews";

import "./Home.css";

const Home = () => {

  const [newsCounter, setNewsCounter] = useState(0);
  // console.log(newsCounter)

  return (
    <div className="home">
      <NewNews setNewsCounter={setNewsCounter}/>
      <AllNews newsCounter={newsCounter}/>
      
    </div>
  )

};

export default Home;
