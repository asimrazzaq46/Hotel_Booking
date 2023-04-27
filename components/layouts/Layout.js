import React, { Fragment } from "react";
import { Bounce, Flip, Slide, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title = "Book Best Hotels For Your Holiday." }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      </Head>
      <Header />
      
      <ToastContainer position="bottom-right" />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
