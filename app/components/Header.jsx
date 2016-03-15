require('../stylesheets/header.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Menu from './Menu';
import SignUp from './SignUp';
var Row = require('react-bootstrap').Row;
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

export default class Header extends React.Component {

  // getInitialState is not used in React ES6 components. Hardcode it in the constructor.
  constructor() {
    super();
    this.signupOpen = false;
    this.onSignUpOpened = this.onSignUpOpened.bind(this);
    this.onSignUpClosed = this.onSignUpClosed.bind(this);
  }

  observe(nextProps, nextState) {
    return {
      events: (new Parse.Query("Event").equalTo("experience", this.props.params.experienceId )),
      experience: (new Parse.Query("Experience").equalTo("objectId", this.props.params.experienceId))
    };
  }

  onSignUpOpened() {
    // alert("CLICKY CLICK");
    this.signupOpen = true;
    this.setState({modalIsOpen: true});
  }

  onSignUpClosed() {
    this.signupOpen = false;
    this.setState({modalIsOpen: false});
  }

  render() {

    return(
        <div className="erfara-header" style={{borderBottom: "1px solid #DDDDDD"}}>
          <div className="icon-container">
            <img id="erfara-icon" src={ require("../img/erfara_icon.png") } style={{ height: "36px", width: "36px"}}></img>
            <p style={{fontFamily: "Roboto-Regular", fontSize: "24px", marginLeft: "5px"}}>Erfara</p>
          </div>
          <div className="header-links-container">
            <div><p style={{ textDecoration: "none", fontSize: "16px", fontFamily: "Roboto-Regular" }} onClick={this.onSignUpOpened}>Sign Up</p></div>
            <div><p style={{ textDecoration: "none", fontSize: "16px", fontFamily: "Roboto-Regular" }} onClick={this.onSignUpOpened}>Log In</p></div>
          </div>
          <SignUp modalIsOpen={this.signupOpen} onClosed={this.onSignUpClosed}/>
        </div>
    );
  }

}
