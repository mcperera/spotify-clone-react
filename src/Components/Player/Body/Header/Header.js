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
        <p>{user?.display_name}</p>
      </div>
    </div>
  );
}

export default Header;
