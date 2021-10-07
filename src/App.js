import { Route} from 'react-router';
import './App.scss'
import { BrowserRouter } from 'react-router-dom';
import Login from './Components/login';
import Dashbord from './Components/dashboard';
import LandingPage from './Components/landingPage';
import Footer from './components/footer/footer';
import Games from './components/games/Games';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Route exact path = "/" component={LandingPage}/>
       <Route path = "/login" component={Login}/>
       <Route path = "/dashboard" component={Dashbord}/>
     </BrowserRouter>
     <Games />
     <Footer />
    </div>
  );
}

export default App;
