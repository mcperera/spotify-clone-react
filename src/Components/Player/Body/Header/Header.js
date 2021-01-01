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
        <Avatar
          className="avatar"
          src={user?.images[0].url ? user?.images[0].url : null}
        />
        <p>{user?.display_name ? user?.display_name : "Hello User"}</p>
      </div>
    </div>
  );
}

export default Header;
