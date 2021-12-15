// import '../styles/globals.css'
import React from "react";
import App from "next/app";
import "../styles/antd.less";
// import 'antd/dist/antd.css';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}
export default MyApp;
