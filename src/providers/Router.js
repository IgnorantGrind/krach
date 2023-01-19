import React, { useContext } from 'react';
import { createHashRouter, createBrowserRouter } from 'react-router-dom';

import { GlobalContext } from '../contexts/GlobalContext';
import Layout from '../components/Layout/Layout';
import PageProvider from './PageProvider';

// create routing and meta data from config data

const useRouter = () => {

  // destructurize config data

  const { Config } = useContext(GlobalContext);
  const { title, useHashRouter, routes, rootElement } = Config;

  // create child routes from config data 

  const createChildRoutes = () => {

    // map subtitles

    const subtitles = {};
    subtitles[rootElement.id] = rootElement.subtitle;

    let route;
    for (route of routes)
      subtitles[route.id] = route.subtitle;

    // create page components

    const createComponent = (id) => {

      return (
        <PageProvider
          id={id}
          title={title}
          subtitle={subtitles[id]}
        />
      );
    };

    // map child paths

    const childRoutes = routes.map(({ path, id }) => {
      const element = createComponent(id);

      return { path, element };
    });

    // add index and error routes

    return [
      {
        index: true,
        element: createComponent(rootElement.id)
      }
    ].concat(
      childRoutes.concat([
        {
          path: '/error',
          element: <PageProvider
            id='404'
            title={title}
            subtitle='Error'
          />
        }
      ])
    );
  };

  // set routes

  const Routes = [
    {
      path: '/',
      element: <Layout />,
      errorElement: <Layout />,
      children: createChildRoutes()
    }
  ];

  const router = useHashRouter ?
    createHashRouter(Routes) :
    createBrowserRouter(Routes);

  return router;
};

export default useRouter;
