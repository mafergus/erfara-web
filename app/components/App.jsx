import React from 'react';
import Parse from 'parse';
var ParseReact = require('parse-react');
var ParseComponent = ParseReact.Component(React);


import Menu from './Menu';
import Authentication from './Authentication';
import Card_Profile from './Card_Profile';
  

export default class App extends ParseComponent {

  constructor() {
    super();
  }


  // By extending ParseComponent, it is possible to observe queries
  observe(props, state) {
    return {
      profileCards: (new Parse.Query(Parse.User)).equalTo("exp_sharing", "imjf2tIP5v")
    };
  }

  render() {
    return (
      <div className="app">
        <div>
          <Menu />
        </div>

        <div>

        </div>

        <div className="card-profile-div">
          {this.renderProfileCards()}
        </div>
      </div>
    );
  }

 renderProfileCards(){

  return(
      this.data.profileCards.map((user) => {
        return <Card_Profile  key={user.id} user={user} />;
      })
  );
 }

};