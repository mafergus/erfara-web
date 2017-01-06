import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import autoBind from 'react-autobind';
import firebase from '../../actions/database';
import AuthModal from './AuthModal';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class LogInModal extends React.Component {

  constructor() {
    super();
    autoBind(this);
  }

  handleSignUpFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      var user = result.user;
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log("errorCode: ", errorCode, " errorMessage: ", errorMessage);
    });
  }

  handleSignUpGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return <AuthModal 
      title="Log In"
      onGoogleClick={this.handleSignUpGoogle}
      onFacebookClick={this.handleSignUpFacebook}/>;
  }
}