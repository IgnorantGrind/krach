import WebFont from 'webfontloader';
import "./config.css";

function runConfig() {
  WebFont.load = {
    custom: {
      families: ["Georgia Pro Condensed"],
      urls: ["/Layout.css"]
    }
  };
};

export default runConfig;