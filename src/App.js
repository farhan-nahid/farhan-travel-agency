import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Destination from './Component/Destination/Destination';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import NavBar from "./Component/NavBar/NavBar";
import NotFound from "./Component/NotFound/NotFound";


function App() {
  return (
    <Router>
     <NavBar />
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path="/destination">
          <Destination />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
