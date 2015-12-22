import './main.css';

import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import { createHistory, useBasename } from 'history';
import { Link, Route, IndexRoute} from 'react-router';
import Router from 'react-router';
import Home from './components/Home';
import SearchBar from './components/SearchBar';
import Messages from './components/Messages';
import Profile from './components/Profile';
import Experience from './components/Experience';

Parse.initialize("2ORhMZvPcIVIQXCKRevAcDKKB3qTKdISH1s7kunP", "EVbY8lGJqEfzDkSceJ8qZDRbeSrpfGMy2hbRkZOH");

// Create the mount point and attach it to the DOM
var mountNode = document.createElement('div');
mountNode.setAttribute("id", "mountNode");
document.body.appendChild(mountNode);

 var history = createHistory({
   queryKey: false
 });

// const history = useBasename(createHistory)({basename: '/'});

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App} >
      <IndexRoute component={Experience} />
      <Route path="home" component={Home} />
      <Route path="discover" component={SearchBar} />
      <Route path="messages" component={Experience} />
      <Route path="profile" component={Profile} />
      <Route path="experiences/:experienceId" component={Experience} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById("mountNode"));

const NotFound = React.createClass({
  render() {
    return <h2>Not found</h2>
  }
})


