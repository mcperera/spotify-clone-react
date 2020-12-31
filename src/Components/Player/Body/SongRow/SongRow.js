import React from "react";

import "./SongRow.css";

function SongRow({
  rowNumber,
  src,
  songName,
  artistName,
  duration,
  track_id,
  handleCurrentPlay,
  className,
}) {
  return (
    <div
      className={`row ${className}`}
      onClick={() => handleCurrentPlay(track_id)}>
      <h5>{`${rowNumber}.`}</h5>
      <img src={src} alt="row-album" />
      <div className="row__song__info">
        <h4>{songName}</h4>
        <p>{artistName}</p>
        <p>{duration}</p>
      </div>
    </div>
  );
}

export default SongRow;
