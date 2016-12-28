import './stylesheets/main.css';
require('./stylesheets/main.scss');

import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './components/Home';
import SignUp from './components/SignUp'
import Discover from './components/Discover';
import Messages from './components/Messages';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Event from './components/Event';

Parse.initialize("2ORhMZvPcIVIQXCKRevAcDKKB3qTKdISH1s7kunP", "EVbY8lGJqEfzDkSceJ8qZDRbeSrpfGMy2hbRkZOH");

// Create the mount point and attach it to the DOM
var mountNode = document.createElement('div');
mountNode.setAttribute("id", "mountNode");
document.body.appendChild(mountNode);

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="signup" component={SignUp} />
      <Route path="discover" component={Discover} />
      <Route path="messages" component={Event} />
      <Route path="profile" component={Profile} />
      <Route path="experiences/:experienceId" component={Experience} />
      <Route path="events/:eventId" component={Event} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById("mountNode"));

const NotFound = React.createClass({
  render() {
    return <h2>Not found</h2>
  }
})


