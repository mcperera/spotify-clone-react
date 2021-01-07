import React, { useState, useEffect } from "react";

import SpotifyWebApi from "spotify-web-api-js";

import { useStoreValues } from "../../Store";

import SideBar from "./SideBar/SideBar";
import Body from "./Body/Body";
import MobileBody from "./Body/MobileBody/MobileBody";
import Footer from "./Footer/Footer";

import "./Player.css";

const spotify = new SpotifyWebApi();

function Player() {
  const [, dispatch] = useStoreValues();
  const [desktop, setDesktop] = useState(true);

  //TODO --> Create a hook
  const onResizeWidth = () => {
    const width = window.screen.width;

    if (width > 600) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
  };

  useEffect(() => {
    onResizeWidth();
  }, []);

  useEffect(() => {
    spotify.getUserPlaylists().then((playlists) => {
      dispatch({ type: "SET_PLAYLISTS", playlists: playlists });

      spotify.getPlaylist(playlists.items[0].id).then((list) => {
        dispatch({ type: "SET_DISCOVER_WEEKLY", discoverList: list });
      });
    });
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("resize", onResizeWidth);
    return () => window.removeEventListener("resize", onResizeWidth);
  }, []);

  return (
    <div className="player__contaienr">
      {desktop && <SideBar />}
      {desktop ? <Body /> : <MobileBody />}
      <Footer />
    </div>
  );
}

export default Player;
