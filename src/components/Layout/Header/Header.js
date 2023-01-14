import React from "react";
import { Link } from "react-router-dom";
import Filler from "../Fillers/Filler/Filler";
import FillerSmall from "../Fillers/FillerSmall/FillerSmall";
import "./Header.css";

// header component with two logos

const Header = ({ mainLogo, mainLogoAlt = "", additionalLogo, additionalLogoAlt = "" }) => (

  // link on whole header

  <Link
    to="/"
    className="header-link"
  >

    {/* header with two logos */}

    <header>
      <FillerSmall />
      <img
        src={additionalLogo}
        alt={additionalLogoAlt}
        className="additional-logo"
      />
      <Filler />
      <img
        src={mainLogo}
        alt={mainLogoAlt}
        className="main-logo"
      />
      <Filler />
      <img
        src={additionalLogo}
        alt={additionalLogoAlt}
        className="additional-logo"
      />
      <FillerSmall />
    </header>
  </Link>
);

export default Header;
