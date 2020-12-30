import React, { useEffect } from "react";

import SpotifyWebApi from "spotify-web-api-js";

import { useStoreValues } from "../../../../Store";

import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";

import "./Center.css";

const spotify = new SpotifyWebApi();

function Center() {
  const [{ playing }, dispatch] = useStoreValues();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((state) => {
      // console.log("Center ", state);
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

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((state) => {
      dispatch({
        type: "SET_ITEM",
        item: state.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((state) => {
      dispatch({
        type: "SET_ITEM",
        item: state.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  return (
    <div className="center__container">
      <div className="center__row__container">
        <ShuffleIcon className="center__icons" />
        <SkipPreviousIcon className="center__icons" onClick={skipPrevious} />
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
        <SkipNextIcon className="center__icons" onClick={skipNext} />
        <RepeatIcon className="center__icons" />
      </div>
      <div className="song__tracker"></div>
    </div>
  );
}

export default Center;
