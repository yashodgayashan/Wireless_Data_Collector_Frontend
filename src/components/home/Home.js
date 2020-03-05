import React, { Fragment } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Body from "./body/Body";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
};

export default Home;
