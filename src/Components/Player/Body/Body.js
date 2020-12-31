import React from "react";

import { useStoreValues } from "../../../Store";

import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import SongsOverview from "./SongsOverview/SongsOverview";

import "./Body.css";

function Body() {
  const [{ playing }] = useStoreValues();

  return (
    <div className={playing ? "body__container" : "body__container2"}>
      <Header />
      <Banner />
      <SongsOverview />
    </div>
  );
}

export default Body;
