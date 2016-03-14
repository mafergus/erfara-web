import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';
import { Link } from 'react-router';
import Menu from './Menu';
var Alert = require('react-bootstrap').Alert;
var Button = require('react-bootstrap').Button;
var Modal = require('react-bootstrap').Modal;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var Modal = require('react-modal');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler } = Router;
var ParseComponent = ParseReact.Component(React);

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class SignUp extends ParseComponent {

  constructor() {
    super();
    this.setState({ modalIsOpen: false });
    this.render = this.render.bind(this);
    this.loginFb = this.loginFb.bind(this);
  }

  componentWillMount() {
  // This is called once the facebook SDK is loaded
    window.fbAsyncInit = function() {                       
      Parse.FacebookUtils.init({                            
        appId      : '1686372394915080',
        cookie     : true,                                  
        xfbml      : true,                                  
        version    : 'v2.4'                                 
      });                                                   
      console.log('fbAsyncInit complete')                   
    };                                                      
                                                                                          
    (function(d, s, id){                                   
       var js, fjs = d.getElementsByTagName(s)[0];          
       if (d.getElementById(id)) {return;}                  
       js = d.createElement(s); js.id = id;                 
       js.src = '//connect.facebook.net/en_US/sdk.js';      
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk')); 
  }

  observe() {
  }

  loginFb() {
    Parse.FacebookUtils.logIn(null, {
      success: function(user) {
        if (!user.existed()) {
          alert("User signed up and logged in through Facebook!");
        } else {
          alert("User logged in through Facebook!");
        }
      },
      error: function(user, error) {
        alert("User " + user + " cancelled the Facebook login or did not fully authorize, error: " + error);
      }
    });
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.closeModal}
          closeTimeoutMs={500}
          style={customStyles} >

          <div className="centered-container">
            <div style={{width: "100%"}}><p onClick={this.props.onClosed} className="close-button-x">X</p></div>
            <div style={{float: "clear"}}></div>
            <p style={{fontSize: "20px", fontFamily: "Roboto-Light", color: "rgba(26, 16, 2, 0.6)", marginBottom: "50px", marginTop: "20px"}}>Login or Sign Up</p>
            <div onClick={this.loginFb} className="centered-container fb-button" style={{backgroundColor: "#3A5998", width: "400px", height: "50px", flexDirection: "row", marginBottom: "30px"}}>
              <img src={ require("../img/fbIcon.png") } style={{ height: "22px", width: "22px", marginRight: "10px"}}></img>
              <p style={{fontSize: "13px", fontFamily: "Roboto-Light", color: "white"}}>Login with Facebook</p>
            </div>
            <img src={ require("../img/or_divider.png") } style={{ width: "100%", marginBottom: "20px"}}></img>
            <div className="login-box-username centered-container" style={{width: "100%", marginBottom: "7px"}}>
              <input type="email" placeholder="Email Address" style={{width: "94%", height: "100%", border: "none", outline: "none", fontSize: "14px", fontFamily: "Roboto-Regular"}} />
            </div>
            <div className="login-box-username centered-container" style={{width: "100%", marginBottom: "10px"}}>
              <input type="password" placeholder="Password" style={{width: "94%", height: "100%", border: "none", outline: "none", fontSize: "14px", fontFamily: "Roboto-Regular"}} />
            </div>
            <div className="centered-container search-go-btn" style={{width: "400px", height: "20px", marginBottom: "15px"}}>
              <p style={{fontSize: "16px", fontFamily: "Roboto-Thin", color: "white"}}>Go</p>
            </div>

          </div>
        </Modal>
      </div>
    );
  }

}
