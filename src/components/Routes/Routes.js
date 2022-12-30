import React from "react";
import { Route, Switch } from "wouter";
import Band from "../Pages/Band";
import News from "../Pages/News";
import Shows from "../Pages/Shows";
import Music from "../Pages/Music";
import Video from "../Pages/Video";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import NotFoundPage from "../Pages/NotFoundPage";

const Routes = () => (
  <Switch>
    <Route path="/">
      {() => <Band />}
    </Route>
    <Route path="/krachpage">
      {() => <Band />}
    </Route>
    <Route path="/krachpage/news">
      {() => <News />}
    </Route>
    <Route path="/krachpage/shows">
      {() => <Shows />}
    </Route>
    <Route path="/krachpage/music">
      {() => <Music />}
    </Route>
    <Route path="/krachpage/video">
      {() => <Video />}
    </Route>
    <Route path="/krachpage/contact">
      {() => <Contact />}
    </Route>
    <Route path="/krachpage/about">
      {() => <About />}
    </Route>
    <Route path="/krachpage/:rest*">
      {() => <NotFoundPage />}
    </Route>
  </Switch>
);

export default Routes;
