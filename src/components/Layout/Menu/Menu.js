import React from "react";
import { Link } from "react-router-dom";
import Filler from "../Filler/Filler";
import "./Menu.css";

// main menu component

// create react-router <Link> components

const Links = () => (
  <>
    <Link
      to="/"
    >
      band
    </Link>
    <Link
      to="/news"
    >
      news
    </Link>
    <Link
      to="/shows"
    >
      shows
    </Link>
    <Link
      to="/music"
    >
      music
    </Link>
    <Link
      to="/video"
    >
      video
    </Link>
    <Link
      to="/contact"
    >
      contact
    </Link>
  </>
);

// menu component

const Menu = () => (

  // container element for layout

  <div
    className="menu"
  >

    {/* navigation bar */}

    <nav>
      <Filler
        size="small"
      />
      <Links />
      <Filler />
    </nav>

  </div>
);

export default Menu;
