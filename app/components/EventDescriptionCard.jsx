import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';
import HomeExperienceCard from './HomeExperienceCard';
import CardProfile from './CardProfile';
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var ParseComponent = ParseReact.Component(React);

export default class EventDescriptionCard extends ParseComponent {
  mixins: [ParseReact.Mixin] // Enable query subscriptions]

  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };

    // Bind callback methods to make `this` the correct context.
    this.userDescriptionClickHandler = this.userDescriptionClickHandler.bind(this);
  }


  observe(nextProps, nextState) {
  }

  userDescriptionClickHandler(e) {
    console.log("isExpanded " + this.state.isExpanded);
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  render() {
    console.log("render isExpanded " + this.state.isExpanded);
    var moreText = (this.state.isExpanded ? "" : "...more");
    return(
      <div className="event">
        <div className="user-description-card card-1" onClick={ this.userDescriptionClickHandler }>
          <div className="centered-container" id="user-info">
            <div style={{textAlign: "center"}}>
              <img id="user-img" src="http://www.meganfox.com/wp-content/uploads/2014/01/3.jpg"></img>
              <p>Megan F.</p>
            </div>
          </div>
          <div className={this.state.isExpanded ? "description-expanded" : "description-contracted"}>
            <p>
            Welcome to my BBQ! Every Sunday when it’s warm/weather permitting I host a BBQ class in my backyard to anyone who wants to come over. I’ll show you how to make classic BBQ staples - just bring some beer or sides and join the fun!  
  Welcome to my BBQ! Every Sunday when it’s warm/weather permitting I host a BBQ class in my backyard to anyone who wants to come over. I’ll show you how to make classic BBQ staples - just bring some beer or sides and join the fun!  
  Welcome to my BBQ! Every Sunday when it’s warm/weather permitting I host a BBQ class in my backyard to anyone who wants to come over. I’ll show you how to make classic BBQ staples - just bring some beer or sides and join the fun!  
  Welcome to my BBQ! Every Sunday when it’s warm/weather permitting I host a BBQ class in my backyard to anyone who wants to come over. I’ll show you how to make classic BBQ staples - just bring some beer or sides and join the fun! 
            </p>
          </div>
          <div style={{width: "100%"}}><p style={{color: "rgba(0, 0, 0, 0.3)", marginBottom: "8px", textAlign: "center"}}>{moreText}</p></div>
        </div>
      </div>
    );
  }
}

