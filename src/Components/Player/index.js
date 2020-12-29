import React from "react";

import SideBar from "./SideBar/SideBar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

import "./Player.css";

function Player() {
  return (
    <div className="player__contaienr">
      <SideBar />
      <Body />
      <Footer />
    </div>
  );
}

export default Player;
