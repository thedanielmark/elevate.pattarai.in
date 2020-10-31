import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Importing all pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Test from "./pages/test";
// import CodeOfConduct from "./pages/CodeOfConduct";
// import ProposalGuidelines from "./pages/ProposalGuidelines";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import Profile from "./pages/Profile";
// import EditProfile from "./pages/EditProfile";
// import Discover from "./pages/Discover";
// import MyProposals from "./pages/MyProposals";
// import ApprovedProposals from "./pages/ApprovedProposals";
// import Bookmarks from "./pages/Bookmarks";
// import CreateProposal from "./pages/CreateProposal";
// import Settings from "./pages/Settings";
// import Error404 from "./pages/Error404";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/test" component={Test} />
          {/* <Route exact path="/code-of-conduct" component={CodeOfConduct} />
          <Route
            exact
            path="/proposal-guidelines"
            component={ProposalGuidelines}
          />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/edit-profile" component={EditProfile} />
          <ProtectedRoute exact path="/discover" component={Discover} />
          <ProtectedRoute exact path="/my-proposals" component={MyProposals} />
          <ProtectedRoute
            exact
            path="/approved-proposals"
            component={ApprovedProposals}
          />
          <ProtectedRoute exact path="/bookmarks" component={Bookmarks} />
          <ProtectedRoute
            exact
            path="/create-proposal"
            component={CreateProposal}
          />
          <ProtectedRoute exact path="/settings" component={Settings} />
          <Route exact path="/404" component={Error404} />
          <Redirect to="/404" /> */}
        </Switch>
      </Router>
    );
  }
}