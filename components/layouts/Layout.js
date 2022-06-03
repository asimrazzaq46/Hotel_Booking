import React, { Fragment } from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ childern, title = "Book Best Hotels For Your Holiday." }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      </Head>
      <Header />
      {childern}
      <Footer />
    </Fragment>
  );
};

export default Layout;
