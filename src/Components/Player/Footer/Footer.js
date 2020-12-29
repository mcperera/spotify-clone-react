import React from "react";

import Right from "./Right/Right";
import Center from "./Center/Center";
import Left from "./Left/Left";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer_left">
        <Left />
      </div>
      <div className="footer_center">
        <Center />
      </div>
      <div className="footer_right">
        <Right />
      </div>
    </div>
  );
}

export default Footer;
