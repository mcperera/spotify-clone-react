import React from "react";

import "./SideBarOptions.css";

function SideBarOptions({ Icon, id, title, handlePlaylistClick, className }) {
  return (
    <div className={`side_options ${className}`}>
      {Icon && <Icon className="side_icon" />}
      {Icon ? (
        <h4 className="title_with_icon">{title}</h4>
      ) : (
        <p className="title" onClick={() => handlePlaylistClick(id)}>
          {title}
        </p>
      )}
    </div>
  );
}

export default SideBarOptions;
