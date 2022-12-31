import React from "react";
import { Link } from "react-router-dom";
import Filler from "../Fillers/Filler/Filler";
import FillerSmall from "../Fillers/FillerSmall/FillerSmall";
import "./Menu.css";

const Links = () => (
  <>
    <Link
      to="/"
    >
      band
    </Link>
    <Link
      to="news"
    >
      news
    </Link>
    <Link
      to="shows"
    >
      shows
    </Link>
    <Link
      to="music"
    >
      music
    </Link>
    <Link
      to="video"
    >
      video
    </Link>
    <Link
      to="contact"
    >
      contact
    </Link>
  </>
);

const Menu = () => (
  <div
    className="menu"
  >
    <nav>
      <FillerSmall />
      <Links />
      <Filler />
    </nav>
  </div>
);

export default Menu;
