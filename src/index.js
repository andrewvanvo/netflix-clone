import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import {GlobalStyles} from './global-styles';
import {firebase} from './lib/firebase.prod';
import {FirebaseContext} from './context/firebase';



ReactDOM.render(
  <>
    <FirebaseContext.Provider value = {{firebase}}></FirebaseContext.Provider>
    <GlobalStyles/>
    <App /> 
  </>,
  document.getElementById('root')
);


