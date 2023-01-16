import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import Bg from './Bg/Bg';
import EdgeImg from './EdgeImg/EdgeImg'
import Page from './Page/Page';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import CookieConsent from '../loaders/CookieConsent/CookieConsent'
import './Layout.css';

// create helmet and load page layout

const Layout = ({ config }) => {

  // destructuring config data

  const { title, description, keywords, icon, appleTouchIcon, noScript, googleFont, rootElement,
    mainLogo, mainLogoAlt, additionalLogo, additionalLogoAlt, edgeImgLeft, edgeImgRight, edgeImgAlt } = config;

  // create helmet and layout

  return (
    <>

      {/* create helmet from config data*/}

      <Helmet>
        <title>{title}</title>
        <meta
          name='description'
          content={description}
        />
        <meta
          name='keywords'
          content={keywords}
        />
        <meta
          name='subtitle'
          content={rootElement.subtitle}
        />
        <link
          id='favicon'
          rel='icon'
          type='image/x-icon'
          href={'img/' + icon}
          sizes='64x64 32x32 24x24 16x16'
        />
        <link
          rel='apple-touch-icon'
          href={'img/' + appleTouchIcon}
          sizes='192x192'
          type='image/png'
        />
        {
          googleFont && <>
              <link
                rel='preconnect'
                href='https://fonts.googleapis.com'
              />
              <link
                rel='preconnect'
                href='https://fonts.gstatic.com'
                crossorigin
              />
              <link
                href={googleFont}
                rel='stylesheet'
              />
            </>
        }
        <noscript>
          {noScript}
        </noscript>
      </Helmet>

      {/* create layout from config data */}

      {/* background container element */}
      <Bg>

        {/* image at left edge */}

        <EdgeImg
          src={'img/' + edgeImgLeft}
          alt={edgeImgAlt}
        />


        {/* main page container element */}

        <Page>

          {/* page components */}

          <Header
            mainLogo={'img/' + mainLogo}
            mainLogoAlt={mainLogoAlt}
            additionalLogo={'img/' + additionalLogo}
            additionalLogoAlt={additionalLogoAlt}
          />
          <Menu />
          <Content />
          <Footer />

        </Page>

        {/* image at right edge */}

        <EdgeImg
          src={'img/' + edgeImgRight}
          isLeft={false}
          alt={edgeImgAlt}
        />
      </Bg>
    </>
  );
};

Layout.propTypes = {
  config: PropTypes.object.isRequired
};

// set element map for HtmlMapper

const tagMap = (cookieConsentText) => {
  return {

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

      return src.includes('youtube-nocookie') ?
        <div
          class='video-container'
        >
          {frame}
        </div> :
        src.includes('youtube') ?
          <CookieConsent
            text={cookieConsentText}
          >
            <div
              class='video-container'
            >
              {frame}
            </div>
          </CookieConsent> :
          <CookieConsent
            text={cookieConsentText}
          >
            {frame}
          </CookieConsent>;
    },

    // convert <a> to react-router <Link> for relative links

    a: ({ href, children, ...rest }) =>
      href?.startsWith('/') ? (
        <Link
          to={href}
        >
          {children}
        </Link>
      ) : (
          <a
            href={href}
            {...rest}
          >
            {children}
          </a>
        )
  };
};

export { tagMap };

export default Layout;
