import React from "react";

import { useStoreValues } from "../../../../Store";

import { Avatar } from "@material-ui/core";

import "./Header.css";

function Header() {
  const [{ user }] = useStoreValues();

  return (
    <div className="header__container">
      <div className="header__left"></div>
      <div className="header__right">
        <Avatar className="avatar" src={user?.images[0].url} />
        <h5>{user?.display_name}</h5>
      </div>
    </div>
  );
}

export default Header;
