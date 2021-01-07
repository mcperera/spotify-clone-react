import React, { useState, useEffect } from "react";

import SpotifyWebApi from "spotify-web-api-js";

import { useStoreValues } from "../../../../../Store";

import "./SongProgress.css";

const spotify = new SpotifyWebApi();

function SongProgress() {
  const [{ playing }, dispatch] = useStoreValues();
  const [duration, setDuration] = useState({
    durationMin: 0,
    currentProgMin: null,
    currentProg: 0,
  });

  const miliToMin = (mili) => {
    var minutes = Math.floor(mili / 60000);
    var seconds = ((mili % 60000) / 1000).toFixed(0);
    const duration = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    return duration;
  };

  useEffect(() => {
    const songProgress = setInterval(() => {
      spotify.getMyCurrentPlaybackState().then((state) => {
        if (state) {
          var progress_ms = state.progress_ms;
          var duration_ms = state.item.duration_ms ? state.item.duration_ms : 0;

          const durationMin = miliToMin(duration_ms);
          const currentProgMin = miliToMin(progress_ms);
          const currentProg = (progress_ms / duration_ms) * 100;

          setDuration({ durationMin, currentProgMin, currentProg });

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
      });
    }, 1000);

    return () => clearInterval(songProgress);
  }, [dispatch]);

  const styleTracker = {
    width: `${duration.currentProg}%`,
  };

  return (
    <div className="tracker">
      {duration.currentProgMin && <p>{duration.currentProgMin}</p>}
      <div className="song__tracker">
        <div
          className={playing ? "song__duration" : "song__duration2"}
          style={styleTracker}></div>
      </div>
      {duration.currentProgMin && <p>{duration.durationMin}</p>}
    </div>
  );
}

export default SongProgress;
