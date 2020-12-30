import React, { useEffect } from "react";

import SpotifyWebApi from "spotify-web-api-js";

import { useStoreValues } from "../../Store";

import SideBar from "./SideBar/SideBar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

import "./Player.css";

const spotify = new SpotifyWebApi();

function Player() {
  const [, dispatch] = useStoreValues();

  useEffect(() => {
    spotify.getUserPlaylists().then((playlists) => {
      dispatch({ type: "SET_PLAYLISTS", playlists: playlists });

      spotify.getPlaylist(playlists.items[0].id).then((list) => {
        dispatch({ type: "SET_DISCOVER_WEEKLY", discoverList: list });
      });
    });
  }, [dispatch]);

  return (
    <div className="player__contaienr">
      <SideBar />
      <Body />
      <Footer />
    </div>
  );
}

export default Player;
