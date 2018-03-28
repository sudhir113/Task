import React from 'react';
import  ReactDOM  from 'react-dom';
import {Provider} from 'react-redux';
import {Route,Router,BrowserRouter} from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/font-awesome/css/font-awesome.css'
import $ from 'jquery';
import './style/style.css';
import configureStore from './store/configureStore';
import Routes from './Routes/routes';
import {AUTH_USER} from './action/actionTypes';
import history from "./history";
const store =configureStore();


const token = localStorage.getItem('token');

if (token) {
    // we need to update application state
    store.dispatch({ type: AUTH_USER });
}
ReactDOM.render(     
  <Provider store={store}>
     <Router history={history}>
			<Routes/>
			</Router>
    </Provider>,
    document.getElementById('app')        
  );