import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Homes from './Component/Home/Homes/Homes';
// import ServiceDetails from './Component/Home/Homes/RecentWork/ServiceDetails';
import Details from './Component/Home/Homes/RecentWork/Details';
import About from './Component/Home/Homes/About/About';
import Blog from './Component/Home/Homes/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Homes></Homes>
          </Route>
          <Route  path='/about'>
            <About></About>
          </Route>
          <Route path='/blog'>
            <Blog></Blog>
          </Route>
        

      <Route path='/friend/:id'>
       <Details></Details>
      </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
