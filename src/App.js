import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import {IsUserRedirect} from './helpers/routes';



function App() {

  const user = {};

  return (
    <Router>

      <IsUserRedirect user = {user} loggedInPath = {ROUTES.BROWSE} path = {ROUTES.SIGN_IN} exact>
        <Signin></Signin>
      </IsUserRedirect>
  
      <IsUserRedirect user = {user} loggedInPath = {ROUTES.BROWSE} path = {ROUTES.SIGN_UP} exact>
        <Signup></Signup>
      </IsUserRedirect>

      <Route exact path = '/browse'>
        <Browse></Browse>
      </Route>

      <Route exact path = {ROUTES.HOME}>
        <Home></Home>
      </Route>
      
    </Router>
    
  );
}

export default App;
