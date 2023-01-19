import React from 'react';

import Bg from './Bg/Bg';
import EdgeImg from './EdgeImg/EdgeImg'
import Main from './Main/Main';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Content from './Content/Content';
import Footer from './Footer/Footer';

import './Layout.css';

// create helmet and load page layout

const Layout = () => {

  // create layout from config data

  return (
    <Bg>                {/* background container element */}
      <EdgeImg />       {/* image at left edge */}
      <Main>            {/* main page container element */}

        <Header />      {/* page components */}
        <Menu />
        <Content />
        <Footer />

      </Main>
      <EdgeImg          // image at right edge
        isLeft={false}
      />
    </Bg>
  );
};

export default Layout;
