import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Layout from "./Layout";
import MainContent from "./components/Profile/MainContent";

export default function Profile() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Profile | Pattarai</title>
      </Helmet>
      <MainContent></MainContent>
    </HelmetProvider>
  );
}
