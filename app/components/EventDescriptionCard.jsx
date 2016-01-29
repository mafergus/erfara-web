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
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  render() {
    var moreText = (this.state.isExpanded ? "" : "...more");
    return(
      <div className="event">
        <div className="user-description-card card-1" onClick={ this.userDescriptionClickHandler }>
          <div className="centered-container" id="user-info">
            <div style={{textAlign: "center"}}>
              <img id="user-img" src={this.props.creatorPhotoUrl}></img>
              <p>{this.props.creatorName}</p>
            </div>
          </div>
          <div className={this.state.isExpanded ? "description-expanded" : "description-contracted"}>
            <p>{this.props.description}</p>
          </div>
          <div style={{width: "100%"}}><p style={{color: "rgba(0, 0, 0, 0.3)", marginBottom: "8px", textAlign: "center"}}>{moreText}</p></div>
        </div>
      </div>
    );
  }
}

