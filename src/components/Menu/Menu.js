import React from "react";
import { Link } from "wouter";
import Filler from "../Fillers/Filler/Filler";
import FillerSmall from "../Fillers/FillerSmall/FillerSmall";
import "./Menu.css";

const Menu = () => (
  <div
    className="menu"
  >
    <nav>
      <FillerSmall />
      <Link
        href="/"
      >
        band
      </Link>
      <Link
        href="/news"
      >
        news
      </Link>
      <Link
        href="/music"
      >
        shows
      </Link>
      <Link
        href="/music"
      >
        music
      </Link>
      <Link
        href="/video"
      >
        video
      </Link>
      <Link
        href="/contact"
      >
        contact
      </Link>
      <Filler />
    </nav>
  </div>
);

export default Menu;
