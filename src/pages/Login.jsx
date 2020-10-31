import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import MainContent from "./components/Login/MainContent";

export default class Login extends Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>Login | Elevate</title>
          </Helmet>
          <MainContent></MainContent>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}
