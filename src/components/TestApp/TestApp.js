import React from "react";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic";
import { HelmetProvider } from "react-helmet-async";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import "./TestApp.css";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Root />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <About />
          },
          {
            path: "about",
            element: <About />
          },
          {
            path: "contact",
            element: <Contact />
          },
          {
            path: "error",
            element: <ErrorPage />
          }
        ]
      }
    ]
  }
]);

const TestApp = () => {

  return (
    <HelmetProvider>
      <PrismicProvider client={client}>
        <RouterProvider router={router} />
      </PrismicProvider>
    </HelmetProvider>
  );
}

export default TestApp;
