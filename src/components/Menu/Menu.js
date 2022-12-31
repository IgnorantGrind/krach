import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "wouter"; //  when using wouter
import Filler from "../Fillers/Filler/Filler";
import FillerSmall from "../Fillers/FillerSmall/FillerSmall";
import "./Menu.css";

const links = [
  <Link
    to="/"
  >
    band
  </Link>,
  <Link
    to="news"
  >
    news
  </Link>,
  <Link
    to="shows"
  >
    shows
  </Link>,
  <Link
    to="music"
  >
    music
  </Link>,
  <Link
    to="video"
  >
    video
  </Link>,
  <Link
    to="contact"
  >
    contact
  </Link>
];

/*  when using wouter
 const links = [
  <Link
    href="/krachpage/"
  >
    band
  </Link>,
  <Link
    href="/krachpage/news"
  >
    news
  </Link>,
  <Link
    href="/krachpage/shows"
  >
    shows
  </Link>,
  <Link
    href="/krachpage/music"
  >
    music
  </Link>,
  <Link
    href="/krachpage/video"
  >
    video
  </Link>,
  <Link
    href="/krachpage/contact"
  >
    contact
  </Link>
];
*/

const Menu = () => (
  <div
    className="menu"
  >
    <nav>
      <FillerSmall />
      {links}
      <Filler />
    </nav>
  </div>
);

export default Menu;
