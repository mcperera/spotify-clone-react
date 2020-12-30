import React from "react";

// import SpotifyWebApi from "spotify-web-api-js";

import { useStoreValues } from "../../../../Store";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import "./Left.css";

// const spotify = new SpotifyWebApi();

function Left() {
  const [{ item }] = useStoreValues();
  // const [currentTrack, setCurrentTrack] = useState(item);

  // useEffect(() => {
  //   spotify.getMyCurrentPlayingTrack().then((current) => {
  //     dispatch({ type: "SET_CURRENT_PLAYING", current });
  //   });
  // }, [dispatch]);

  // if (current_track) {
  //   setCurrentTrack(current_track);
  // }

  // useEffect(() => {
  //   const refreshCurrentTrack = setInterval(() => {
  //     console.log("left__container__Update");
  //     spotify.getMyCurrentPlayingTrack().then((current) => {
  //       setCurrentTrack(current);
  //     });
  //   }, 10000);
  //   return () => clearInterval(refreshCurrentTrack);
  // }, [dispatch]);

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
