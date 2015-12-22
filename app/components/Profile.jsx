import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';
var ParseComponent = ParseReact.Component(React);

export default class Profile extends ParseComponent {

  // getInitialState is not used in React ES6 components. Hardcode it in the constructor.
  constructor() {
    super();
  }

  observe(nextProps, nextState) {
  }

  render() {
    return(
      <div className="profile-container">
        <button onClick={this.login.bind(this)}>Temporary Login Btn</button>
        <button onClick={this.logout.bind(this)}>Temp Logout Btn</button>
        <span> Current user = {Parse.User.current() ?  Parse.User.current().getUsername() : "no session"} </span>
        <div className="profile-column">
          <div className="row">
            <div className="bio profile-column-card">
            </div>
          </div>
          <div className="row">
            <div className="references profile-column-card">
            </div>
            <div className="following profile-column-card">
            </div>
          </div>
          <div className="row">
            <div className="learning profile-column-card">
            </div>
          </div>
          <div className="row">
            <div className="sharing profile-column-card">
            </div>
          </div>
          <div className="row">
            <div className="upcoming profile-column-card">
            </div>
            <div className="feed">
            </div>
          </div>
        </div>
      </div>
    )
  }

 login(){
  var _this = this;
  var username = prompt("username");
  var password = prompt("password");
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

 logout() {
  var _this = this;
  Parse.User.logOut().then( function(){ _this.forceUpdate(); });
 }

}