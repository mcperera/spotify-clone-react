import React from "react";

import { useStoreValues } from "../../../Store";

import "./Body.css";

function Body() {
  const [{ discover_weekly }] = useStoreValues();

  return (
    <div className="body__container">
      <img
        className="album"
        src={discover_weekly?.images[2].url}
        alt="album_art"
      />
    </div>
  );
}

export default Body;
