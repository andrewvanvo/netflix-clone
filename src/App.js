import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';



function App() {
  return (
    <Router>

      <Route exact path = '/signin'>
        <Signin></Signin>
      </Route>

      <Route exact path = '/signup'>
        <Signup></Signup>
      </Route>

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
