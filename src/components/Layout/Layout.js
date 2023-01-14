import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import Bg from "./Bg/Bg";
import EdgeImg from "./EdgeImg/EdgeImg"
import Page from "./Page/Page";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import "./Layout.css";

// create helmet and load page layout

const Layout = ({ appData }) => {

  // destructuring config data

  const { title, description, keywords, icon, appleTouchIcon, noScript, googleFont, rootElement,
    mainLogo, mainLogoAlt, additionalLogo, additionalLogoAlt, edgeImgLeft, edgeImgRight, edgeImgAlt } = appData;

  // create link elements for webfonts (google fonts only)

  const fontLinks = googleFont ?
    <>
      <link
        id="favicon"
        rel="icon"
        type="image/x-icon"
        href={"img/" + icon}
        sizes="64x64 32x32 24x24 16x16"
      />
      <link
        rel="apple-touch-icon"
        href={"img/" + appleTouchIcon}
        sizes="192x192"
        type="image/png"
      />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      />
      <link
        href={googleFont}
        rel="stylesheet"
      />
    </> :
    <></>;

  // create helmet and layout

  return (
    <>

      {/* create helmet from config data*/}

      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <meta
          name="keywords"
          content={keywords}
        />
        <meta
          name="subtitle"
          content={rootElement.subtitle}
        />
        {fontLinks}
        <noscript>
          {noScript}
        </noscript>
      </Helmet>

      {/* create layout from config data */}

      {/* background container element */}
      <Bg>

        {/* image at left edge */}

        <EdgeImg
          src={"img/" + edgeImgLeft}
          alt={edgeImgAlt}
        />


        {/* main page container element */}

        <Page>

          {/* page components */}

          <Header
            mainLogo={"img/" + mainLogo}
            mainLogoAlt={mainLogoAlt}
            additionalLogo={"img/" + additionalLogo}
            additionalLogoAlt={additionalLogoAlt}
          />
          <Menu />
          <Content />
          <Footer />

        </Page>

        {/* image at right edge */}

        <EdgeImg
          src={"img/" + edgeImgRight}
          isLeft={false}
          alt={edgeImgAlt}
        />
      </Bg>
    </>
  );
};

Layout.propTypes = {
  appData: PropTypes.object.isRequired
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

  iframe: ({ src, width, height, border, frameborder, ...rest }) => (
    <Iframe
      url={src}
      frameBorder={frameborder || border}
      width={width}
      height={height}
      {...rest}
    />
  ),

  // convert <a> to react-router <Link> for relative links

  a: ({ href, children, ...rest }) =>
    href?.startsWith("/") ? (
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

export { tagMap };

export default Layout;
