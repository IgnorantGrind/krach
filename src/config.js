import React from "react";
import WebFont from 'webfontloader';
import Layout from "./components/Layout/Layout";


////////////////////////
//                    //
//-->  Page Types  <--//
//                    //
////////////////////////

//-->  Import page types  <--//

import Band from "./components/PageTypes/Band";
import News from "./components/PageTypes/News";
import Shows from "./components/PageTypes/Shows";
import Music from "./components/PageTypes/Music";
import Video from "./components/PageTypes/Video";
import Contact from "./components/PageTypes/Contact";
import About from "./components/PageTypes/About";
import ErrorPage from "./components/PageTypes/ErrorPage";


/////////////////////
//                 //
//-->  ROUTING  <--//
//                 //
/////////////////////

//-->  Choose router type import  <--//

import { createHashRouter } from "react-router-dom";     //  when using a hash router
// import { createBrowserRouter } from "react-router-dom"; //  when using a browser router


//-->  Configure page paths  <--//  for help see https://reactrouter.com

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Band />
          },
          {
            path: "shows",
            element: <Shows />
          },
          {
            path: "news",
            element: <News />
          },
          {
            path: "music",
            element: <Music />
          },
          {
            path: "video",
            element: <Video />
          },
          {
            path: "contact",
            element: <Contact />
          },
          {
            path: "about",
            element: <About />
          },
          {
            path: "error",
            element: <ErrorPage />
          }
        ]
      }
    ]
  }
];


//-->  Configure router type below  <--//

const router = createHashRouter(routes);     //  when using a hash router
// const router = createBrowserRouter(routes); //  when using a browser router

const useHashPrefix = false;                 //  set to false if using a browser router or to avoid development bugs


//////////////////////
//                  //
//-->  WEBFONTS  <--//
//                  //
//////////////////////

//-->  Load Webfonts                      <--//
//-->  Add local font urls to config.css  <--//  for help see https://www.npmjs.com/package/webfontloader

const runConfig = () => {
  WebFont.load = {
    custom: {
      families: ["Georgia Pro Condensed"],
      urls: ["/config.css"]
    }
  };
};


export { runConfig, router, useHashPrefix };
