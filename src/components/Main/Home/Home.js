import React from "react";

import NewNews from "./NewNews";
import AllNews from "./AllNews";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <NewNews/>
      <AllNews/>
      
    </div>
  )

};

export default Home;
