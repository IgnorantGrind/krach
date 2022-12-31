import React from "react";
import { Link } from "react-router-dom";
import Filler from "../Fillers/Filler/Filler";
import FillerSmall from "../Fillers/FillerSmall/FillerSmall";
import AdditionalLogo from "../Imgs/AdditionalLogo/AdditionalLogo";
import MainLogo from "../Imgs/MainLogo/MainLogo"
import "./Header.css";

const Header = () => (
  <Link
    to="/"
    className="header-link"
  >
    <header>
      <FillerSmall />
      <AdditionalLogo />
      <Filler />
      <MainLogo />
      <Filler />
      <AdditionalLogo />
      <FillerSmall />
    </header>
  </Link>
);

export default Header;
