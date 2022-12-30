import React from "react";
import { Link } from "wouter";
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
        href="/about"
      >
        about
      </Link>
      <FillerSmall />
    </footer>
  </div >
);

export default Footer;
