import React from "react";
import { useRouteError, Link, Navigate, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Root = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Helmet>
        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=ignorantgrind"></script>
      </Helmet>
      <div>
        <h1>React Router Test</h1>
        <nav>
          <ul>
            <li>
              <Link to={"about"}>About</Link>
            </li>
            <li>
              <Link to={"contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        {
          error ?
            <Navigate to="/error" replace={true} /> :
            <Outlet />
        }
      </div>
    </>
  );
};

export default Root;
