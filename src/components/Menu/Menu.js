import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "wouter"; //  when using wouter
import { useHashLinks } from "../../config";
import Filler from "../Fillers/Filler/Filler";
import FillerSmall from "../Fillers/FillerSmall/FillerSmall";
import "./Menu.css";

const prefix = useHashLinks ? "#" : "";

const links = [
  <Link
    to="/"
  >
    band
  </Link>,
  <Link
    to={prefix + "news"}
  >
    news
  </Link>,
  <Link
    to={prefix + "shows"}
  >
    shows
  </Link>,
  <Link
    to={prefix + "music"}
  >
    music
  </Link>,
  <Link
    to={prefix + "video"}
  >
    video
  </Link>,
  <Link
    to={prefix + "contact"}
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
