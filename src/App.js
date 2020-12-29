import React, { useEffect } from "react";

import SpotifyWebApi from "spotify-web-api-js";
import { useStoreValues } from "./Store";
import { getToken } from "./spotify";

import Login from "./Components/Login/Login";
import Player from "./Components/Player";

import "./App.css";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStoreValues();

  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({ type: "SET_TOKEN", token: _token });
    }
  }, [token, dispatch]);

  return <div className="App">{true ? <Player /> : <Login />}</div>;
}

export default App;
