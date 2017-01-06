import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import autoBind from 'react-autobind';
import firebase from '../../actions/database';
import AuthModal from './AuthModal';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class SignUpModal extends React.Component {

  constructor() {
    super();
    autoBind(this);
  }

  handleSignUpFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log("YAYAYAYAYA");
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
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
      title="Sign Up"
      onGoogleClick={this.handleSignUpGoogle}
      onFacebookClick={this.handleSignUpFacebook}/>;
  }
}