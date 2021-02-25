import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MainContent from "./components/CodeOfConduct/MainContent";

export default class Index extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>Elevate | Pattarai</title>
          </Helmet>
          <MainContent></MainContent>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}
