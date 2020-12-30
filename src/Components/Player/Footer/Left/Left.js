import React, { useState, useEffect } from "react";

import SpotifyWebApi from "spotify-web-api-js";

import { useStoreValues } from "../../../../Store";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import "./Left.css";

const spotify = new SpotifyWebApi();

function Left() {
  const [{ current_track }, dispatch] = useStoreValues();
  const [currentTrack, setCurrentTrack] = useState(current_track);

  // useEffect(() => {
  //   spotify.getMyCurrentPlayingTrack().then((current) => {
  //     dispatch({ type: "SET_CURRENT_PLAYING", current });
  //   });
  // }, [dispatch]);

  useEffect(() => {
    const refreshCurrentTrack = setInterval(() => {
      //console.log("Left - Update Current Track ");
      spotify.getMyCurrentPlayingTrack().then((current) => {
        // dispatch({ type: "SET_CURRENT_PLAYING", current });
        setCurrentTrack(current);
      });
    }, 10000);
    return () => clearInterval(refreshCurrentTrack);
  }, [dispatch]);

  return (
    <div className="left__container">
      {currentTrack ? (
        <>
          <img
            className="album"
            src={currentTrack?.item.album.images[0].url}
            alt="album_art"
          />
          <div className="song__info">
            <h4>{currentTrack?.item.name}</h4>
            <p>{currentTrack?.item.artists[0].name}</p>
          </div>
          <FavoriteBorderIcon className="favorite__icon" />
        </>
      ) : (
        <p>No Current Playing Track</p>
      )}
    </div>
  );
}

export default Left;
