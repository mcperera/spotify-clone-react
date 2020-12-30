import React from "react";

import { useStoreValues } from "../../../../Store";

import "./Banner.css";

function Banner() {
  const [{ discover_weekly }] = useStoreValues();

  return (
    <div className="banner__container">
      <img
        className="banner__album"
        src={discover_weekly?.images[0].url}
        alt="album_art"
      />
      <div className="banner__info">
        <h1>{discover_weekly?.name}</h1>
        <p>{`${discover_weekly?.tracks.items.length} - Songs`}</p>
      </div>
    </div>
  );
}

export default Banner;
