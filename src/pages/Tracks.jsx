import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MainContent from "./components/Tracks/MainContent";

export default class Tracks extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>Tracks | Elevate</title>
          </Helmet>
          <MainContent></MainContent>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}
