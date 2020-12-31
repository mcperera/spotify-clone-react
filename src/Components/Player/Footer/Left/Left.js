import React, { useEffect } from "react";

import SpotifyWebApi from "spotify-web-api-js";

import { useStoreValues } from "../../../../Store";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import "./Left.css";

const spotify = new SpotifyWebApi();

function Left() {
  const [{ item }, dispatch] = useStoreValues();

  useEffect(() => {
    const refreshCurrentTrack = setInterval(() => {
      spotify.getMyCurrentPlaybackState().then((state) => {
        if (state) {
          if ((state && !item) || state.item.id !== item.id) {
            console.log("Left ", state);
            dispatch({
              type: "SET_PLAYING",
              playing: state.is_playing,
            });

            dispatch({
              type: "SET_CURRENT_PLAYING",
              item: state,
            });

            dispatch({
              type: "SET_ITEM",
              item: state.item,
            });
          }
        }
      });
    }, 10000);
    return () => clearInterval(refreshCurrentTrack);
  }, [item, dispatch]);

  return (
    <div className="left__container">
      {item ? (
        <>
          <img
            className="album"
            src={item.album.images[0].url}
            alt="album_art"
          />
          <div className="song__info">
            <h4>{item.name}</h4>
            <p>{item.artists[0].name}</p>
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
