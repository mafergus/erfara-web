import './stylesheets/main.css';
require('./stylesheets/main.scss');

import AppContainer from './containers/AppContainer';
import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// Create the mount point and attach it to the DOM
var mountNode = document.createElement('div');
mountNode.setAttribute("id", "mountNode");
document.body.appendChild(mountNode);

const main = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(main, document.getElementById("mountNode"));