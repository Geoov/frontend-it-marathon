import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Education from "./components/education/Education";
import Profile from "./components/citizen/Profile";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="router-wrapper">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
