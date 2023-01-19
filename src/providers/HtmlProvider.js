import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import HtmlMapper from 'react-html-map';
import PropTypes from 'prop-types';

import ThirdSideTrackerConsentForm from './cookieManagement/ThirdSideTrackerConsentForm';

// set element map for HtmlMapper

const TagMap = {

  // pass these elements as is

  p: null,
  h1: null,
  i: null,
  em: null,
  b: null,
  strong: null,
  ul: null,
  li: null,
  img: null,
  div: null,
  br: () => (<br />),

  // convert <iframe> to react-iframe <Iframe>

  iframe: ({ src, width, height, border, frameborder, ...rest }) => {
    const frame = (
      <Iframe
        url={src}
        frameBorder={frameborder || border}
        width={width}
        height={height}
        {...rest}
      />
    );

    const wrapFrame = src.includes('youtube') ?
      <div
        class='video-container'
      >
        {frame}
      </div> :
      frame;

    return (
      <ThirdSideTrackerConsentForm
        src={src}
      >
        {wrapFrame}
      </ThirdSideTrackerConsentForm>
    );
  },

  // convert <a> to react-router <Link> for relative links

  a: ({ href, children, ...rest }) =>
    href?.startsWith('/') ?
      <Link
        to={href}
      >
        {children}
      </Link> :
      <a
        href={href}
        {...rest}
      >
        {children}
      </a>
};

const HtmlProvider = ({ html }) => (
  <HtmlMapper html={html}>
    {TagMap}
  </HtmlMapper>
);

HtmlProvider.propTypes = {
  html: PropTypes.string.isRequired
};


export { TagMap };
export default HtmlProvider;