import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Education from './components/education/Education';
import Home from './components/home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/education">
            <Education />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
