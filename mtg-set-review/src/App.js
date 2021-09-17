import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import LandingPage from "./Pages/LandingPage";
import logo from './logo.svg';
import './App.css';

// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
library.add(fab, faCheckSquare, faArrowRight);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LandingPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
