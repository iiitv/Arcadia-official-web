import React , {Component} from 'react';
import Games from "./components/games/Games";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import LandingPage from "./components/landingPage/LandingPage";
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App(){
  return(
    <div className= "App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/games">
            <Games />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
  }

export default App;
