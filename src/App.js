import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import {IsUserRedirect, ProtectRoute} from './helpers/routes';
import {useAuthListener} from './hooks';



function App() {

  const {user} = useAuthListener();

  return (
    <Router>
      <Switch>
      <IsUserRedirect user = {user} loggedInPath = {ROUTES.BROWSE} path = {ROUTES.SIGN_IN} >
        <Signin></Signin>
      </IsUserRedirect>
  
      <IsUserRedirect user = {user} loggedInPath = {ROUTES.BROWSE} path = {ROUTES.SIGN_UP} >
        <Signup></Signup>
      </IsUserRedirect>

      <ProtectRoute user = {user} path = {ROUTES.BROWSE}>
        <Browse></Browse>
      </ProtectRoute>

      <IsUserRedirect user = {user} loggedInPath = {ROUTES.BROWSE} path = {ROUTES.HOME} exact >
        <Home></Home>
      </IsUserRedirect>
      </Switch>
    </Router>
    
  );
}

export default App;
