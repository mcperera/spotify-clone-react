import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reducer, { initialState } from "./Store/reducer";

import { StoreProvider } from "./Store";
import App from "./App";

ReactDOM.render(
  <StoreProvider reducer={reducer} initialState={initialState}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
