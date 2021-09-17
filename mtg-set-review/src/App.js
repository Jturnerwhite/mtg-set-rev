import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import logo from './logo.svg';
import './App.css';

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
