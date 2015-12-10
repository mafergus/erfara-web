import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
var ParseComponent = ParseReact.Component(React);

import Menu from './Menu';
import Authentication from './Authentication';
import Card_Profile from './Card_Profile';
import Card_Event from './Card_Event';

  

export default class App extends ParseComponent {

  constructor() {
    super();

  }


  // By extending ParseComponent, it is possible to observe queries
  observe(props, state) {

    var event = Parse.Object.extend('Event');
    var bbq = "imjf2tIP5v"
 
    return {
      profileCards: (new Parse.Query(Parse.User)).equalTo("exp_sharing", bbq),
      eventCards: (new Parse.Query(event)).equalTo("experience_id", bbq)
    }

  }

  alertMe(text) {
    alert(text);
  }

  render() {
    var self = this;
    return (
      <div className="app">

        <div id="auth-div">
          <Authentication />
        </div>

        <div className="erfara-header">
          <div className="icon-container">
            <img id="erfara-icon"></img>
            <p>Erfara</p>
          </div>
          <div className="header-links-container">
            <p onClick={this.alertMe.bind(this, "Home")}>Home</p>
            <p onClick={this.alertMe.bind(this, "Discover")}>Discover</p>
            <p onClick={this.alertMe.bind(this, "Messages")}>Messages</p>
            <p onClick={this.alertMe.bind(this, "Profile")}>Profile</p>
          </div>
          <Menu />
        </div>

        <div id="main-div">
          <div className="card-event-div">
            <h1>Barbecue Activity near you</h1>
            {this.renderActivityCards()}
          </div>

          <div className="card-profile-div">
            <h1> Users sharing skills in barbecue </h1>
            {this.renderProfileCards()}
          </div>
        </div>

      </div>
    );
  }

  renderActivityCards(){
    return(
        this.data.eventCards.map((event) => {
          return <Card_Event  key={event.id} event={event} />;
        })
    );
  }

  renderProfileCards(){
    return(
        this.data.profileCards.map((user) => {
          return <Card_Profile  key={user.id} user={user} />;
        })
    );
  }


  loginParse(event){
    event.preventDefault();
    Parse.User.logIn(prompt("username"), prompt("password"), {
      success: function(user) {
        console.log("Successfully logged in");
      },
      error: function(user, error) {
        console.log("User login failed with error: " + error.message);

      }
    });
  }

};