import React from "react";

import "./SideBarOptions.css";

function SideBarOptions({ Icon, title }) {
  return (
    <div className="side_options">
      {Icon && <Icon className="side_icon" />}
      {Icon ? (
        <h4 className="title_with_icon">{title}</h4>
      ) : (
        <p className="title">{title}</p>
      )}
    </div>
  );
}

export default SideBarOptions;
