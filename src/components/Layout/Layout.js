import React from "react";
import Bg from "../Bg/Bg";
import { LeftEdge, RightEdge } from "../Imgs/Edge/Edge";
import Page from "../Page/Page";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout = () => (
  <Bg>
    <LeftEdge />
    <Page>
      <Header />
      <Menu />
      <Content />
      <Footer />
    </Page>
    <RightEdge />
  </Bg>
);

export default Layout;
