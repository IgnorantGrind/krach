import React from "react";
import PropTypes from "prop-types";
import "./Bg.css";

const Bg = ({ children }) => (
  <div
    className="bg"
  >
    {children}
  </div>
);

Bg.propTypes = {
  children: PropTypes.node.isRequired
};

export default Bg;
