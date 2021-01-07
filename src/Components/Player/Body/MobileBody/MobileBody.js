import React from "react";

import { useStoreValues } from "../../../../Store";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

import Left from "../../Footer/Left/Left";

import "./MobileBody.css";

function MobileBody() {
  const [{ playing }] = useStoreValues();

  return (
    <div className={`mobile__body ${!playing ? "not__playing" : ""}`}>
      <div className="header">
        <div className="down__arrow">
          <ExpandMoreIcon />
        </div>
        <div className="current__playlist__name">
          <h2>Spotify Clone</h2>
        </div>
        <div className="playlist">
          <PlaylistPlayIcon />
        </div>
      </div>
      <div className="current__track__container">
        <Left />
      </div>
    </div>
  );
}

export default MobileBody;
