import React from "react";

import VolumeDown from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import "./Right.css";

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "white",
        "&:hover": {
          boxShadow: "0px 0px 0px 8px rgba(225, 225, 225, 0.16)",
        },
        "&:focus": {
          boxShadow: "0px 0px 0px 14px rgba(225, 225, 225, 0.16)",
        },
      },
      track: {
        color: "white",
      },
      rail: {
        color: "white",
      },
    },
  },
});

function Right() {
  return (
    <div className="right__container">
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-end"
        alignItems="center">
        <Grid item>
          <PlaylistPlayIcon className="right_icons" />
        </Grid>
        <Grid item>
          <VolumeDown className="right_icons" />
        </Grid>
        <Grid item xs={6} className="slider">
          <ThemeProvider theme={muiTheme}>
            <Slider aria-labelledby="continuous-slider" />
          </ThemeProvider>
        </Grid>
      </Grid>
    </div>
  );
}

export default Right;
