import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import autoBind from 'react-autobind';
import firebase from '../actions/database';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class SignUpModal extends React.Component {

  constructor() {
    super();
    autoBind(this);

    this.state = {
      open: false,
    };
  }

  handleOpen() {
    console.log("HANDLE OPEN");
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  handleSignUpFb() {
    // var provider = new firebase.auth.FacebookAuthProvider();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    return;

    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log("YAYAYAYAYA");
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
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

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}/>,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}/>,
    ];

    return (
      <span>
        <FlatButton 
          label="Sign Up" 
          primary={true}
          onTouchTap={this.handleOpen} />
        <Dialog
          title="Sign Up"
          actions={actions}
          modal={true}
          open={this.state.open}>
          <RaisedButton
            label="Sign Up With Facebook"
            primary={true}
            onTouchTap={this.handleSignUpFb}/>
        </Dialog>
      </span>
    );
  }
}