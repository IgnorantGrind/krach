import React from "react";
import Routes from "../Routes/Routes";
import "./Content.css";

const Content = () => (
  <div
    className="content-pane"
  >
    <div
      className="content-wrapper"
    >
      <div
        className="content"
      >
        <Routes />
      </div>
    </div>
  </div>
);

export default Content;
