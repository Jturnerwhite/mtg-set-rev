import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons'

import LandingPage from "./Pages/Landing.page";
import CardReviewPage from "./Pages/CardReview.page";
import StartPage from "./Pages/SessionPages/Start.page";

import './App.css';

// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
library.add(fab, faCheckSquare, faArrowRight, faSpinner);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/review/:sessionId" component={CardReviewPage} />
        <Route path="/session/start" component={StartPage}/>
        <Route path="/" component={LandingPage}/>
      </Switch>
    </Router>
  );
}

export default App;
