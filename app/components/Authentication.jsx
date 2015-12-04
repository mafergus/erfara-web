import React from 'react';
import Parse from 'parse';


export default class Authentication extends React.Component {

  render () {
    return(
      <div>
      <div>
        {this.welcomeMessage()}
      </div>
      <div id="loginform">
        <div id="facebook" onClick={this.loginFacebook.bind(this)}>
          <div id="facebook-icon"></div>
          <div id="connect">Connect with Facebook</div>
        </div>
        <div id="mainlogin">
          <div id="or">or</div>
            <h1 id="auth-h1">Login or Create Account</h1>
          <form onSubmit={this.authenticate.bind(this)} >
              <input type="text" placeholder="username or email" required id='username' />
              <input type="password" placeholder="password" required id='password' />
              <button type="submit" onClick={this.authenticate.bind(this)} id="login-button"><div id="button-arrow-right"></div></button>
          </form>
          <div id="note"><a href="#">Forgot your password?</a></div>
        </div>
      </div>
        <button onClick={this.logout.bind(this)}>Log out</button>
      </div>
    );
  }

  authenticate(event){
    event.preventDefault();
    var _this = this;
    //Check to see if username is already being used, signup or login as necessary
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var query = new Parse.Query(Parse.User);
    query.equalTo("username", username);
    query.find({
      success: function(user){
        console.log(user);
        if(user.length>0){
          console.log("Successfully retrieved user: " + user.username);
          _this.loginParse(_this);
        } else {
          console.log(user);
          console.log("Successfully queried datastore, no user found");
          _this.createParseUser(_this);
        }
      },
      error: function(user, error){
        console.log("User query failed with error:" + error.message);
      }
    })
  }

  loginParse(that){
    var _this = that;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    Parse.User.logIn(username, password, {
      success: function(user) {
        console.log("Successfully logged in");
        _this.forceUpdate();
      },
      error: function(user, error) {
        console.log("User login failed with error: " + error.message);
        _this.forceUpdate();
      }
    });
  }

  createParseUser(that){
    var _this = that;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var newUser = new Parse.User();
    newUser.set("username", username);
    newUser.set("password", password);
    newUser.set("email", username);
    newUser.signUp(null, {
      success: function(user) {
        console.log("New user successfully created");
        _this.forceUpdate();
      },
      error: function(user, error) {
        alert("User signup failed with error: " + error.code + " " + error.message);
        _this.forceUpdate();
      }
    });
  }

  loginFacebook() {
    var _this = this;
    Parse.FacebookUtils.logIn(null, {
      success: function(user) {
      if (!user.existed()) {
        console.log("User signed up and logged in through Facebook!");
        _this.updateParseFields(_this);
      } else {
        console.log("User logged in through Facebook!");
        _this.updateParseFields(_this);
      }
    },
      error: function(user, error) {
        console.log("User cancelled the Facebook login or did not fully authorize.");
        _this.forceUpdate();
      }
    });
  }

updateParseFields(that){
  var _this = that;
  FB.api('/me', function(response) {
    console.log(JSON.stringify(response));
    Parse.User.current().save(
    {
      username: response.name
    },
    { 
      success: function(object) {
            // update ui
          }, error: function(object, error) {
            // update ui
          }
        });
  });
  _this.forceUpdate();
}

  logout(event){
    Parse.User.logOut();
    console.log("Current user logged out, this should be null: " + Parse.User.current());
    this.forceUpdate();
  }

  welcomeMessage(){
  console.log("Welcome msg fired");
  var currentUser = Parse.User.current();
    if (currentUser) {
        return <h1> Welcome {currentUser.get("username")} </h1>;
    } else {
        return <h1> Please Log In </h1>;
    }
  }

};