import React from "react";

import SpotifyWebApi from "spotify-web-api-js";

import { useStoreValues } from "../../../../Store";

import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import SongProgress from "./SongProgress/SongProgress";
import PlayPause from "./PlayPause/PlayPause";

import "./Center.css";

const spotify = new SpotifyWebApi();

function Center() {
  const [, dispatch] = useStoreValues();

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
        <PlayPause />
        <SkipNextIcon className="center__icons" onClick={skipNext} />
        <RepeatIcon className="center__icons" />
      </div>
      <SongProgress />
    </div>
  );
}

export default Center;
