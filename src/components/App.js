import React from "react";
import PropTypes from "prop-types";
import { createHashRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import PageTypes from "./PageTypes/PageTypes";
import NotFoundPage from "./PageTypes/NotFoundPage";

// create routing from config data

const App = ({ appData }) => {

  // create child routes from config data 

  const createRoutes = ({ title, locale, pageNotFound, routes, rootElement }) => {

    // map subtitles

    const subtitles = {};
    subtitles[rootElement.id] = rootElement.subtitle;

    routes.map((route) => {
      const id = route.id;
      subtitles[id] = route.subtitle;

      return routes;
    });

    // create page components

    const createComponent = (id) => {

      return (
        <PageTypes
          id={id}
          title={title}
          subtitle={subtitles[id]}
          locale={locale}
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
          path: "/error",
          element: <NotFoundPage
            title={title}
            subtitle="Error"
            message={pageNotFound}
          />
        }
      ])
    );
  };

  // set routes

  const routes = [
    {
      path: "/",
      element: <Layout appData={appData} />,
      errorElement: <Layout appData={appData} />,
      children: createRoutes(appData)
    }
  ];

  // create router from routes

  const router = appData.useHashRouter ?
    createHashRouter(routes) :
    createBrowserRouter(routes);

  // create routing from router

  return (
    <RouterProvider router={router} />
  );

};

App.propTypes = {
  appData: PropTypes.object.isRequired
};

export default App;
