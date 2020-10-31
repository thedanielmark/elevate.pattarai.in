import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Layout from "./Layout";
import MainContent from "./components/Profile/MainContent";

export default function Profile() {
  return (
    <HelmetProvider>
      <Layout>
        <Helmet>
          <title>Create Proposal | Pattarai</title>
          <script src="../js/create-proposal.js"></script>
        </Helmet>
        <MainContent></MainContent>
      </Layout>
    </HelmetProvider>
  );
}