import React from 'react';
import { useRouteError, Navigate, Outlet } from 'react-router-dom';
import './Content.css';

// content component with router outlet

const Content = () => {

  // check for routing error

  const error = useRouteError();
  if (error) console.error(error);

  // create content component

  return (

    // container elements for layout
    <div
      className='content-pane'
    >
      <div
        className='content-wrapper'
      >
        <div
          className='content'
        >

          {/* load content page */}
          {
            error ?
              <Navigate to='/error' replace={true} /> :
              <Outlet />
          }
        </div>
      </div>
    </div>
  );
};

export default Content;
