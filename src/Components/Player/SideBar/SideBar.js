import React from "react";

import SpotifyWebApi from "spotify-web-api-js";

import { useStoreValues } from "../../../Store";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SideBarOptions from "./SideBarOptions/SideBarOptions";

import logoWhite from "../../../assets/logo/Spotify_Logo_RGB_White.png";
import "./SideBar.css";

const spotify = new SpotifyWebApi();

function SideBar() {
  const [{ discover_weekly, playlists }, dispatch] = useStoreValues();

  const handlePlaylistClick = (id) => {
    spotify.getPlaylist(id).then((list) => {
      dispatch({ type: "SET_DISCOVER_WEEKLY", discoverList: list });
    });
  };

  const list = playlists?.items?.map((item) => (
    <SideBarOptions
      key={item.id}
      title={item.name}
      id={item.id}
      handlePlaylistClick={handlePlaylistClick}
      className={discover_weekly?.id === item.id ? "active_list" : ""}
    />
  ));

  return (
    <div className="sidebar">
      <img src={logoWhite} alt="white-spotify" />
      <SideBarOptions Icon={HomeIcon} title={"Home"} />
      <SideBarOptions Icon={SearchIcon} title={"Search"} />
      <SideBarOptions Icon={LibraryMusicIcon} title={"Your Library"} />
      <hr className="separator_side_bar" />
      <div className="playlist__container">{list}</div>
    </div>
  );
}

export default SideBar;
