import React , {Component} from 'react';
import Games from "./components/games/Games";
import Navbar from "./components/navbar/Navbar";
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
        </Switch>
      </Router>
    </div>
  );
  }

export default App;
