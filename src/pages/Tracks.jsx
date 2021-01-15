import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MainContent from "./components/Tracks/MainContent";
import Footer from "./Footer";
export default class Tracks extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>Tracks | Elevate</title>
          </Helmet>
          <MainContent></MainContent>
          <Footer></Footer>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}
