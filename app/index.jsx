import './stylesheets/main.css';
require('./stylesheets/main.scss');

import AppContainer from './containers/AppContainer';
import App2 from './components/App2';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// Create the mount point and attach it to the DOM
var mountNode = document.createElement('div');
mountNode.setAttribute("id", "mountNode");
document.body.appendChild(mountNode);

// ReactDOM.render((
//   <Router history={browserHistory}>
//     <Route path="/" component={AppContainer} >
//     </Route>
//   </Router>
// ), document.getElementById("mountNode"));

// const NotFound = React.createClass({
//   render() {
//     return <h2>Not found</h2>
//   }
// })

const main = (
  <Provider store={store}>
    <App2 />
  </Provider>
);

ReactDOM.render(main, document.getElementById("mountNode"));

      // <IndexRoute component={Home} />
      // <Route path="home" component={Home} />
      // <Route path="signup" component={SignUp} />
      // <Route path="discover" component={Discover} />
      // <Route path="messages" component={Event} />
      // <Route path="profile" component={Profile} />
      // <Route path="experiences/:experienceId" component={Experience} />
      // <Route path="events/:eventId" component={Event} />
      // <Route path="*" component={NotFound} />
