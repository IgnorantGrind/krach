import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "wouter"; //  when using wouter
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
    {/* eslint-disable-next-line */} {/*  when  using wouter */}
    {/*
    <a
      className="header-link"
    >
    */}
    <header>
      <FillerSmall />
      <AdditionalLogo />
      <Filler />
      <MainLogo />
      <Filler />
      <AdditionalLogo />
      <FillerSmall />
    </header>
    {/*
    </a>
    */}
  </Link>
);

export default Header;
