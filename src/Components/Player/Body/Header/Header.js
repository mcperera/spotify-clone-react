import React from "react";

import { useStoreValues } from "../../../../Store";

import { Avatar } from "@material-ui/core";

import "./Header.css";

function Header() {
  const [{ user }, dispatch] = useStoreValues();

  const handleLogOut = () => {
    dispatch({ type: "SET_TOKEN", token: null });
  };

  return (
    <div className="header__container">
      <div className="header__left"></div>
      <div className="header__right">
        <div className="user__details">
          <Avatar
            className="avatar"
            src={user?.images[0]?.url ? user?.images[0].url : null}
          />
          <p>{user?.display_name ? user?.display_name : "Hello User"}</p>
        </div>
        <div className="dropdown__content">
          <button onClick={handleLogOut}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
