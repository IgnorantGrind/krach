// import "react-app-polyfill/ie9";
// import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import App from "./components/App";

// fetch config data and load app

const root = ReactDOM.createRoot(document.getElementById("root"));

fetch("config.json")
  .then((response) => response.json())
  .then((data) => {
    root.render(
      <HelmetProvider>
        <App appData={data} />
      </HelmetProvider>
    );
  })
  .catch((err) => {
    console.log("Failed to fetch config.json: ", err);
  });
