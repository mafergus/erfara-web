import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Menu from './Menu';

export default class Header extends React.Component {

  // getInitialState is not used in React ES6 components. Hardcode it in the constructor.
  constructor() {
    super();
  }

  observe(nextProps, nextState) {
    return {
      events: (new Parse.Query("Event").equalTo("experience", this.props.params.experienceId )),
      experience: (new Parse.Query("Experience").equalTo("objectId", this.props.params.experienceId))
    };
  }

  render() {

    return(
        <div className="erfara-header">
          <div className="icon-container">
            <img id="erfara-icon" src={ require("../img/erfara_icon.png") }></img>
            <p>Erfara</p>
          </div>
          <div className="header-links-container">
            <Link to="home">Home</Link>
            <Link to="discover">Discover</Link>
            <Link to="messages">Messages</Link>
            <Link to="profile">Profile</Link>
          </div>
        </div>
    );
  }

}
