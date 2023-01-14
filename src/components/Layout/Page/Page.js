import React from "react";
import PropTypes from "prop-types";
import "./Page.css";

const Page = ({ children }) => (
  <div
    className="page"
  >
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;