import { Link } from 'react-router-dom';
import HtmlMapper from 'react-html-map';
import PropTypes from 'prop-types';

import ThirdSideIframeProvider from './ThirdSideIframeProvider';

// parse inline style tags to jsx

const parseInlineStyle = (stringStyles) => {
  const result = typeof stringStyles === 'string' ? stringStyles
    .split(';')
    .reduce((acc, style) => {
      const colonPosition = style.indexOf(':')

      if (colonPosition === -1) {
        return acc
      }

      const
        camelCaseProperty = style
          .substr(0, colonPosition)
          .trim()
          .replace(/^-ms-/, 'ms-')
          .replace(/-./g, c => c.substr(1).toUpperCase()),
        value = style.substr(colonPosition + 1).trim()

      return value ? { ...acc, [camelCaseProperty]: value } : acc
    }, {}) : {};

  return result;
};

parseInlineStyle.propTypes = {
  stringStyles: PropTypes.string.isRequired
};

// set element map for HtmlMapper

const tagMap = {

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

  iframe: ({ frameborder, style, ...rest }) => {
    const styles = parseInlineStyle(style);
    return (
      <ThirdSideIframeProvider
        frameBorder={frameborder}
        styles={styles}
        {...rest}
      />
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
        target="_blank"
        rel="noreferrer"
        {...rest}
      >
        {children}
      </a>
};

// provide HtmlMapper with TagMap

const HtmlProvider = ({ html }) => (
  <HtmlMapper html={html}>
    {tagMap}
  </HtmlMapper>
);

HtmlProvider.propTypes = {
  html: PropTypes.string.isRequired
};

export { parseInlineStyle, tagMap };
export default HtmlProvider;
