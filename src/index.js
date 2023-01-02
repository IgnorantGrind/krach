import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
import TestApp from "./components/TestApp/TestApp";   //  when running TestApp
// import { runConfig, router } from "./config";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
function App() {
  runConfig();
  return (
    <RouterProvider router={router} />
  );
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

root.render(          // when running TestApp
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>
);
