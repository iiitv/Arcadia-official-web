import React , {Component} from 'react';
import Games from "./components/games/Games";
import Navbar from "./components/navbar/Navbar";
import './App.scss';
function App(){
  return(
    <div className= "App">
      <Navbar />
      <Games />
    </div>
  );
  }

export default App;
