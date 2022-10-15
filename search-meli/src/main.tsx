import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

import { MeliApp } from "./MeliApp";

import "./css/normalize.css";
import "./scss/main.scss"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <BrowserRouter>
      <MeliApp />
    </BrowserRouter>
  // <React.StrictMode>
  // </React.StrictMode>
)
