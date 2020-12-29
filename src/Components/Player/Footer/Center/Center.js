import React from "react";

import { useStoreValues } from "../../../../Store";

import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";

import "./Center.css";

function Center() {
  const [{ playing }, dispatch] = useStoreValues();

  const handlePlaying = () => {
    if (playing) {
      dispatch({ type: "SET_PAUSE" });
      console.log("pause ", playing);
    } else {
      dispatch({ type: "SET_PLAY" });
      console.log("playing ", playing);
    }
  };

  return (
    <div className="center__container">
      <div className="center__row__container">
        <ShuffleIcon className="center__icons" />
        <SkipPreviousIcon className="center__icons" />
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
        <SkipNextIcon className="center__icons" />
        <RepeatIcon className="center__icons" />
      </div>
      <div className="song__tracker"></div>
    </div>
  );
}

export default Center;
