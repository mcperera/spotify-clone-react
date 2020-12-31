import React, { useEffect } from "react";

import SpotifyWebApi from "spotify-web-api-js";

import { useStoreValues } from "../../../../../Store";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";

import "./PlayPause.css";

const spotify = new SpotifyWebApi();

function PlayPause() {
  const [{ playing }, dispatch] = useStoreValues();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((state) => {
      dispatch({
        type: "SET_PLAYING",
        playing: state.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: state.item,
      });
    });
  }, [dispatch]);

  const handlePlaying = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  return (
    <div className="play__pause__box">
      {playing ? (
        <PauseCircleOutlineIcon
          className="center__icons play__pause"
          onClick={handlePlaying}
        />
      ) : (
        <PlayCircleOutlineIcon
          className="center__icons play__pause"
          onClick={handlePlaying}
        />
      )}
    </div>
  );
}

export default PlayPause;
