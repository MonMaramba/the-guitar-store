import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { BrowserRouter, Route } from "react-router-dom";

import "./index.styles.scss";

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
