import React from "react";

import { accessUrl } from "./../../spotify";

import logoAnimate from "../../assets/logo/logo-animated.gif";
import "./Login.css";

function Login() {
  return (
    <div className="login__container">
      <img src={logoAnimate} alt="spotify" />
      <a href={accessUrl}>Login</a>
      <div>
        <hr className="separator_login" />
        <p>- Spotify Clone - React -</p>
        <span className="note">
          Note : Premium account required for player options
        </span>
      </div>
    </div>
  );
}

export default Login;
