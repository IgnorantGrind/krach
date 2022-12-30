import React from "react";
import { Link } from "wouter";
import Filler from "../Fillers/Filler/Filler";
import FillerSmall from "../Fillers/FillerSmall/FillerSmall";
import AdditionalLogo from "../Imgs/AdditionalLogo/AdditionalLogo";
import MainLogo from "../Imgs/MainLogo/MainLogo"
import "./Header.css";

const Header = () => (
  <Link
    href="/krachpage"
  >
    {/* eslint-disable-next-line*/}
    <a
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
    </a>
  </Link>
);

export default Header;
