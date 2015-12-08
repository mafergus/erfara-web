import React from 'react';
import Parse from 'parse';
import Menu from './Menu';
import Authentication from './Authentication';
import Card_Profile from './Card_Profile';
  

export default class App extends React.Component {

  /**
  componentWillMount() {
    var _this = this;

    // This is for the Parse query to generate an array of User objects with Barbecue as a exp_sharing

    var queryPCards = new Parse.Query(Parse.User);
    queryPCards.equalTo("exp_sharing", "imjf2tIP5v");
    queryPCards.find({
      success: function (users) {
        console.log("Users found to be sharing BBQ: ")
        console.log(users);
        _this.setState({
          profileCards: users
        })
      }
    });
  }
  */

  render() {
    return (
      <div className="app">
        <div>
          <Menu />
        </div>

        <div>

        </div>

        <div className="card-profile-div">
        </div>
      </div>
    );
  }

 
};