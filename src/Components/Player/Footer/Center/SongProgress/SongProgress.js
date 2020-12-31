import React, { useState, useEffect } from "react";

import SpotifyWebApi from "spotify-web-api-js";

import "./SongProgress.css";

const spotify = new SpotifyWebApi();

function SongProgress() {
  const [duration, setDuration] = useState({
    durationMin: 0,
    currentProgMin: 0,
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
        var progress_ms = state.progress_ms;
        var duration_ms = state.item.duration_ms;

        const durationMin = miliToMin(duration_ms);
        const currentProgMin = miliToMin(progress_ms);
        const currentProg = (progress_ms / duration_ms) * 100;

        setDuration({ durationMin, currentProgMin, currentProg });
      });
    }, 1000);

    return () => clearInterval(songProgress);
  }, []);

  const styleTracker = {
    width: `${duration.currentProg}%`,
  };

  return (
    <div className="tracker">
      <p>{duration.currentProgMin}</p>
      <div className="song__tracker">
        <div className="song__duration" style={styleTracker}></div>
      </div>
      <p>{duration.durationMin}</p>
    </div>
  );
}

export default SongProgress;
