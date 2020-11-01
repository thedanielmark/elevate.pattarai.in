import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import MainContent from "./components/VerifyAccount/MainContent";

export default class VerifyAccount extends Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>Verify Account | Elevate</title>
          </Helmet>
          <MainContent></MainContent>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}