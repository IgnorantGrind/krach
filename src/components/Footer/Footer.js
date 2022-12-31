import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "wouter"; //  when using wouter
import FillerBig from "../Fillers/FillerBig/FillerBig";
import FillerSmall from "../Fillers/FillerSmall/FillerSmall";
import "./Footer.css";

const Footer = () => (
  <div
    className="footer-wrapper"
  >
    <footer>
      <FillerBig />
      <Link
        to="about"
      >
        about
      </Link>
      <FillerSmall />
    </footer>
  </div >
);

export default Footer;
