import React from "react";

import { useStoreValues } from "../../Store";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SideBarOptions from "./../SideBarOptions/SideBarOptions";

import logoWhite from "../../assets/logo/Spotify_Logo_RGB_White.png";
import "./SideBar.css";

function SideBar() {
  const [{ playlists }] = useStoreValues();

  console.log(playlists.items);

  const list = playlists?.items?.map((item) => (
    <SideBarOptions title={item.name} />
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
