import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout/Layout";
//import TestApp from "./components/TestApp/TestApp";
import runConfig from "./config";

runConfig();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <Layout />
  </React.StrictMode>
);
