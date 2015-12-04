/*

See https://www.parse.com/docs/js/guide#users-facebook-users

See app/Index.jsx for inline script injection for async loading of facebook SDK

Also see webpack.config.js for 'IN_BROWSER: true' flag in webpack.defineplugin call. 
Without this, xmlhttprequests are treated as a node_module and not a browser capability.

**/

import Parse from 'parse';
import React from 'react';

export default class Login extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.login.bind(this)}>Login With Facebook</button>
      </div>
    );
  }

  login() {
    Parse.FacebookUtils.logIn(null, {
      success: function(user) {
      if (!user.existed()) {
        console.log("User signed up and logged in through Facebook!");
      } else {
        console.log("User logged in through Facebook!");
      }
    },
      error: function(user, error) {
        console.log("User cancelled the Facebook login or did not fully authorize.");
      }
    });
  }

}