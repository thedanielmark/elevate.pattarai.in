import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import MainContent from "./components/Login/MainContent";

export default class MyProposals extends Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>My Proposals | Elevate</title>
          </Helmet>
          <MainContent></MainContent>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}