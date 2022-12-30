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
        href="/krachpage"
      >
        band
      </Link>
      <Link
        href="/krachpage/news"
      >
        news
      </Link>
      <Link
        href="/krachpage/music"
      >
        shows
      </Link>
      <Link
        href="/krachpage/music"
      >
        music
      </Link>
      <Link
        href="/krachpage/video"
      >
        video
      </Link>
      <Link
        href="/krachpage/contact"
      >
        contact
      </Link>
      <Filler />
    </nav>
  </div>
);

export default Menu;
