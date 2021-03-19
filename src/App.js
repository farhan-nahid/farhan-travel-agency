import { createContext, useState } from "react";
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
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
//import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";

export const UserContext = createContext ();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
   
    <UserContext.Provider value={ [loggedInUser, setLoggedInUser] }>
      <p>Name: {loggedInUser.name}</p>
    <Router>
     <NavBar />
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <PrivateRoute path="/destination/:id">
          <Destination />
          </PrivateRoute>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
