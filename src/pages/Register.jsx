import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import MainContent from "./components/Register/MainContent";

export default class Register extends Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>Register | Elevate</title>
          </Helmet>
          <MainContent></MainContent>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}