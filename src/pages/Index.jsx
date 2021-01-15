import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MainContent from "./components/Index/MainContent";

import Footer from "./Footer";

export default class Index extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>Elevate | Pattarai</title>
          </Helmet>
          <MainContent></MainContent>
          <Footer></Footer>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}
