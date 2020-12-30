import React from "react";

import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import SongsOverview from "./SongsOverview/SongsOverview";

import "./Body.css";

function Body() {
  return (
    <div className="body__container">
      <Header />
      <Banner />
      <SongsOverview />
    </div>
  );
}

export default Body;
