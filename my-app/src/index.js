import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {getHistory} from './histor';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";
import BadgeVisibility from './Date_find';

import Register from './Register';

 ReactDOM.render(

    	
    	   
<Router history={getHistory()}>
   <Switch>
     <Route path="/"  exact  render={(props) => <App {...props} />}/>
     <Route path="/register"  component={Register} />


   </Switch>
</Router>

,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
