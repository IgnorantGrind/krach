import { createElement } from "react";
import PropTypes from "prop-types";
import About from "./About";
import News from "./News";
import Contact from "./Contact";
import Home from "./Home";
import Music from "./Music";
import Shows from "./Shows";
import Video from "./Video";
import "./PageTypes.css";

// map page types

const Types = {
  about: About,
  contact: Contact,
  home: Home,
  music: Music,
  news: News,
  shows: Shows,
  video: Video
};

// create page component from id

const PageTypes = ({ id, title, subtitle, locale }) => {
  const component = Types[id];

  return createElement(
    component,
    {
      title: title,
      subtitle: subtitle,
      locale: locale
    }
  );
}

News.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  locale: PropTypes.string
};

export default PageTypes;
