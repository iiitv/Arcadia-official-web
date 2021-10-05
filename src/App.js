import React , {Component} from 'react';
import Games from "./components/games/Games";
import './App.css';
class App extends Component{
  render(){
    return (
      <div className= "App">
        <Games />
      </div>
    );
  }
}

export default App;
