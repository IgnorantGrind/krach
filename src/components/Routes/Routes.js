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
    <Route path="/news">
      {() => <News />}
    </Route>
    <Route path="/shows">
      {() => <Shows />}
    </Route>
    <Route path="/music">
      {() => <Music />}
    </Route>
    <Route path="/video">
      {() => <Video />}
    </Route>
    <Route path="/contact">
      {() => <Contact />}
    </Route>
    <Route path="/about">
      {() => <About />}
    </Route>
    <Route path="/:rest*">
      {() => <NotFoundPage />}
    </Route>
  </Switch>
);

export default Routes;
