import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import Layout from "./components/Layout/Layout";    //  when using wouter
// import TestApp from "./components/TestApp/TestApp"; //  when running TestApp
import { runConfig, router } from "./config";

runConfig();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Layout />   when using wouter */}
    {/* <TestApp />  when running TestApp */}
  </React.StrictMode>
);
