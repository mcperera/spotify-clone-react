import React, { useEffect } from "react";

import SpotifyWebApi from "spotify-web-api-js";

import { useStoreValues } from "../../Store";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SideBarOptions from "./../SideBarOptions/SideBarOptions";

import logoWhite from "../../assets/logo/Spotify_Logo_RGB_White.png";
import "./SideBar.css";

const spotify = new SpotifyWebApi();

function SideBar() {
  const [{ playlists }, dispatch] = useStoreValues();

  useEffect(() => {
    spotify.getUserPlaylists().then((playlists) => {
      dispatch({ type: "SET_PLAYLISTS", playlists: playlists });
    });
  }, [dispatch]);

  const list = playlists?.items?.map((item, index) => (
    <SideBarOptions key={index} title={item.name} />
  ));

  return (
    <div className="sidebar">
      <img src={logoWhite} alt="white-spotify" />
      <SideBarOptions Icon={HomeIcon} title={"Home"} />
      <SideBarOptions Icon={SearchIcon} title={"Search"} />
      <SideBarOptions Icon={LibraryMusicIcon} title={"Your Library"} />
      <hr className="separator_side_bar" />
      {list}
    </div>
  );
}

export default SideBar;
