import React from "react";
import { Link } from "react-router-dom";
import FillerBig from "../Fillers/FillerBig/FillerBig";
import FillerSmall from "../Fillers/FillerSmall/FillerSmall";
import "./Footer.css";

// footer component with 'about' link

const Footer = () => (

  // wrapper element for layout

  <div
    className="footer-wrapper"
  >

    {/* footer with 'about' link */}

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
