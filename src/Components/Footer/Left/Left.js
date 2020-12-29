import React from "react";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import albumCover from "../../../assets/album/test.jpg";

import "./Left.css";

function Left() {
  return (
    <div className="left__container">
      <img className="album" src={albumCover} alt="album_art" />
      <div className="song__info">
        <h4>Stuck on a Feeling</h4>
        <p>Artist name</p>
      </div>
      <FavoriteBorderIcon className="favorite__icon" />
    </div>
  );
}

export default Left;
