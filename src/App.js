import './App.scss'
import { Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './Components/login';
import Dashbord from './Components/dashboard';
import LandingPage from './Components/landingPage';
import Games from './Components/games/Games'
import Navbar from './Components/navbar/Navbar'
function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
       <Route exact path = "/" component={LandingPage}/>
       <Route  path = "/" component={Navbar}/>
       <Route path = "/login" component={Login}/>
       <Route path = "/dashboard" component={Dashbord}/>
       <Route path = "/games" component={Games}/>
     </BrowserRouter>
    </div>
  );
}

export default App;
