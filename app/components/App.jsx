import React from 'react';
import Parse from 'parse';
var ParseReact = require('parse-react');
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

    return {
      profileCards: (new Parse.Query(Parse.User)).equalTo("exp_sharing", "imjf2tIP5v"),
      eventCards: (new Parse.Query(event))
    }

  }

  render() {
    return (
      <div className="app">
        
        <div className="menu-div">
          <Menu />
        </div>

        <Authentication />

        {/* <button onClick={this.loginParse.bind(this)}>Login as Rob</button>

        <div className="card-event-div">
          <h1>Barbecue Activity near you</h1>
          {this.renderActivityCards()}
          {console.log(this.data.eventCards)}
        </div>

        <div className="card-profile-div">
          <h1> Users sharing skills in barbecue </h1>
          {this.renderProfileCards()}
        </div> */}

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
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    Parse.User.logIn("rob@example.com", "foobar", {
      success: function(user) {
        console.log("Successfully logged in");

      },
      error: function(user, error) {
        console.log("User login failed with error: " + error.message);

      }
    });
  }

};