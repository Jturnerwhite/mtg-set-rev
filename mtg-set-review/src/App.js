import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faArrowRight, faArrowLeft, faSpinner, faRetweet } from '@fortawesome/free-solid-svg-icons'

import LandingPage from "./Pages/Landing.page";
import CardReviewPage from "./Pages/CardReview.page";
import StartPage from "./Pages/SessionPages/Start.page";
import SandboxPage from "./Pages/SandboxPage";

import './App.css';

// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
library.add(fab, faCheckSquare, faArrowRight, faArrowLeft, faSpinner, faRetweet);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/review/:sessionId" component={CardReviewPage} />
        <Route path="/session/start" component={StartPage}/>
        <Route path="/sandbox" component={SandboxPage}/>
        <Route path="/" component={LandingPage}/>
      </Switch>
    </Router>
  );
}

export default App;
