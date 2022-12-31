import React from "react";
import { useRouteError, Navigate, Outlet } from "react-router-dom";
// import Routes from "../Routes/Routes"; // when using wouter
import "./Content.css";

const Content = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="content-pane"
    >
      <div
        className="content-wrapper"
      >
        <div
          className="content"
        >
          {
            error ?
              <Navigate to="error" replace={true} /> :
              <Outlet />
          }
        </div>
      </div>
    </div>
  );
};

export default Content;
