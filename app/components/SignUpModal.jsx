import React from 'react';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { grey200 } from 'material-ui/styles/colors';
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
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
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

    const BUTTON_STYLE = {
      display: "block",
      width: "40%",
      margin: "0 auto 0.5em auto",
    };

    return (
      <span>
        <FlatButton 
          label="Sign Up"
          primary={true}
          onTouchTap={this.handleOpen} />
        <Dialog
          contentStyle={{textAlign: "center"}}
          title="Sign Up"
          titleStyle={{ fontSize: "1.1em" }}
          actions={actions}
          modal={true}
          open={this.state.open}>
          <Divider style={{height: "2px", marginBottom: "0.5em", backgroundColor: grey200}}/>
          <RaisedButton
            label="Sign Up With Google"
            style={BUTTON_STYLE}
            primary={true}
            onTouchTap={this.handleSignUpGoogle}/>
          <RaisedButton
            label="Sign Up With Facebook"
            style={BUTTON_STYLE}
            primary={true}
            onTouchTap={this.handleSignUpFacebook}/>
        </Dialog>
      </span>
    );
  }
}