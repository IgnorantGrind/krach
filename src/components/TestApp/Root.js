import React from "react";
import { useRouteError, Link, Navigate, Outlet } from "react-router-dom";

const Root = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
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
