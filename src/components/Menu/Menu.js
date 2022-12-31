import React from "react";
import { Link } from "react-router-dom";
import { useHashPrefix } from "../../config";
import Filler from "../Fillers/Filler/Filler";
import FillerSmall from "../Fillers/FillerSmall/FillerSmall";
import "./Menu.css";

const Links = () => {
  const prefix = useHashPrefix ? "#" : "";
  return (
    <>
      <Link
        to="/"
      >
        band
      </Link>
      <Link
        to={prefix + "news"}
      >
        news
      </Link>
      <Link
        to={prefix + "shows"}
      >
        shows
      </Link>
      <Link
        to={prefix + "music"}
      >
        music
      </Link>
      <Link
        to={prefix + "video"}
      >
        video
      </Link>
      <Link
        to={prefix + "contact"}
      >
        contact
      </Link>
    </>
  );
};

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
