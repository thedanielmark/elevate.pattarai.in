import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import CheckIfLoggedIn from "./CheckIfLoggedIn";
import CheckIfAccountVerified from "./CheckIfAccountVerified";

// Importing all pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import VerifyAccount from "./pages/VerifyAccount";
import Register from "./pages/Register";
import CodeOfConduct from "./pages/CodeOfConduct";
import ProposalGuidelines from "./pages/ProposalGuidelines";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Tracks from "./pages/Tracks";
import RegisterSpeakers from "./pages/RegisterSpeakers";
import CallForProposal from "./pages/CallForProposal";

// import Settings from "./pages/Settings";
import Error404 from "./pages/Error404";


// var registerSpeakerScript = document.createElement('script');
// registerSpeakerScript.async = true;
// registerSpeakerScript.defer = true;
// registerSpeakerScript.src = "https://formfacade.com/include/108981789612968408902/form/1FAIpQLSfrnJKV5_r4eIl8GeuOACL3UfbBX06kGAbZ2jyaDFlYJ2bH7g/bootstrap.js?div=speakerRegistration";
// document.getElementById('register-speaker-script-holder').appendChild(registerSpeakerScript);    


// var cfpformScript = document.createElement('script');
// cfpformScript.async = true;
// cfpformScript.defer = true;
// cfpformScript.src = "https://formfacade.com/include/108981789612968408902/form/1FAIpQLSdDFQ_NaCZpRhgGOsgSvtDxykcXUawYOIApo7cioMq5yDyYRw/bootstrap.js?div=cfpform";
// document.getElementById('cfp-script-holder').appendChild(cfpformScript); 

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <CheckIfLoggedIn exact path="/register" component={Register} />
          <CheckIfLoggedIn exact path="/login" component={Login} />
          <CheckIfAccountVerified
            exact
            path="/verify-account"
            component={VerifyAccount}
          />
          <Route exact path="/code-of-conduct" component={CodeOfConduct} />
          <Route exact path="/tracks" component={Tracks} />
          <Route
            exact
            path="/proposal-guidelines"
            component={ProposalGuidelines}
          />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/registerspeakers" component={RegisterSpeakers} />
          <Route exact path="/cfp" component={CallForProposal} />
          
          <Route exact path="/404" component={Error404} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}
