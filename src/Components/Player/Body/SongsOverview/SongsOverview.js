import React from "react";

import SpotifyWebApi from "spotify-web-api-js";

import { useStoreValues } from "../../../../Store";

import SongRow from "../SongRow/SongRow";

import "./SongsOverview.css";

const spotify = new SpotifyWebApi();

function SongsOverview() {
  const [{ discover_weekly, item }, dispatch] = useStoreValues();

  const handleCurrentPlay = (track_id) => {
    console.log("discover_weekly track ID: ", track_id);
    spotify
      .play({
        uris: [`spotify:track:${track_id}`],
      })
      .then((res) => {
        console.log("Play", res);
        spotify.getMyCurrentPlayingTrack().then((current) => {
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });

          dispatch({
            type: "SET_ITEM",
            item: current.item,
          });
        });
      });
  };

  const row = discover_weekly?.tracks.items.map((song, index) => {
    var minutes = Math.floor(song.track.duration_ms / 60000);
    var seconds = ((song.track.duration_ms % 60000) / 1000).toFixed(0);
    const duration = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    const artists = song.track.album.artists.map((artist, index) => {
      if (song.track.album.artists.length - 1 !== index) {
        return artist.name + ", ";
      } else {
        return artist.name;
      }
    });

    return (
      <SongRow
        key={song.track.id}
        track_id={song.track.id}
        rowNumber={index + 1}
        src={song.track.album.images[0].url}
        songName={song.track.album.name}
        //---TODO --> set artists names. song.track.album.artists[0].name
        artistName={artists}
        duration={duration}
        handleCurrentPlay={handleCurrentPlay}
        className={item.id === song.track.id ? "playing" : ""}
      />
    );
  });

  return <div className="overview__container">{row}</div>;
}

export default SongsOverview;
