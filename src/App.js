
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home';
import Nomatch from './Components/Nomatch/Nomatch';
import Destination from './Components/Destination/Destination';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Private Route/PrivateRoute';

 export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path ="/destination/by/:id">
          <Destination/>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <Nomatch></Nomatch>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
