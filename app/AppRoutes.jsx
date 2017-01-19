import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import EventPage from "./components/EventPage/EventPage";

/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > App
 */
const AppRoutes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="event" component={EventPage} />
    <Route path="home" component={Home} />
    <Redirect from="get-started" to="/get-started/required-knowledge" />
    <Route path="get-started">
      <Route path="required-knowledge" component={Home} />
    </Route>
    <Redirect from="customization" to="/customization/themes" />
    <Route path="customization">
    </Route>
    <Redirect from="components" to="/components/app-bar" />
    <Route path="components">
    </Route>
    <Redirect from="discover-more" to="/discover-more/community" />
    <Route path="discover-more">
    </Route>
  </Route>
);

export default AppRoutes;
