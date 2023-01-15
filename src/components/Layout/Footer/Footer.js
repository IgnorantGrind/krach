import React from "react";
import { Link } from "react-router-dom";
import Filler from "../Filler/Filler";
import "./Footer.css";

// footer component with 'about' link

const Footer = () => (

  // wrapper element for layout

  <div
    className="footer-wrapper"
  >

    {/* footer with 'about' link */}

    <footer>
      <Filler
        size="big"
      />
      <Link
        to="about"
      >
        about
      </Link>
      <Filler
        size="small"
      />
    </footer>
  </div >
);

export default Footer;
