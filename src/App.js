import React , {Component} from 'react';
import Games from "./components/games/Games";
import Navbar from "./components/navbar/Navbar";
import './App.scss';
class App extends Component{
  render(){
    return (
      <div className= "App">
        <Navbar />
        <Games />
      </div>
    );
  }
}

export default App;
