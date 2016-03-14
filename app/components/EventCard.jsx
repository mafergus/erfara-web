import '../stylesheets/event-card.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';
import HomeExperienceCard from './HomeExperienceCard';
import CardProfile from './CardProfile';
import EventComment from './EventComment';
var Col = require('react-bootstrap').Col;
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var ParseComponent = ParseReact.Component(React);

export default class EventCard extends ParseComponent {
  mixins: [ParseReact.Mixin] // Enable query subscriptions]

  constructor(props) {
    super(props);
  }

  observe(nextProps, nextState) {
    return {
    };
  }

  onEventClick(id) {
    console.log("onEventClick id " + JSON.stringify(id) );

    this.context.history.pushState(null, '/events/' + id);
  }

  render() {
    var event = this.props.event;
    var url = (event.photo.url() === null) ? event.experience.photo.url() : event.photo.url();
    var id = event.objectId;
    var hostImage = event.owner.photo.url();
    var date = "Sat, March 15th, 12:15pm";
    var spotsRemaining = "4/4"
    console.log("Event owner photo url " + hostImage);
    console.log("Event " + JSON.stringify(event) + " id " + event.objectId);

    return(
      <Col lg={12} md={12} sm={12} xs={12} style={{marginBottom: "50px", display: "inline-block", textAlign: "left"}}>
        <div className="event-card card-1" onClick={this.onEventClick.bind(this, id)}>
          <img id="event-image" style={{height: "240px", width: "100%"}} src={url}></img>
          <img id="host-image" src={hostImage}></img>
          <div style={{marginLeft: "10px", marginTop: "4px"}}>
            <h1>{event.title}</h1>
            <div style={{marginTop: "5px"}}>
              <h2>Sat, March 15th, 12:15pm</h2>
              <div className="container">
                <h3 className="hello-sass" style={{alignSelf: "flex-end"}}>{spotsRemaining} Spots Remaining</h3>
                <div className="rsvp-button centered-container" style={{float: "right", width: "112px", height: "37px", marginRight: "15px", marginTop: "23px", borderRadius: "2px", backgroundColor: "orange", float: "right"}}><p style={{color: "white", fontFamily: "Roboto-Regular", fontSize: "14px"}}>RSVP</p></div>
              </div>
              <div style={{float: "clear"}}></div>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

EventCard.contextTypes = {
  history: React.PropTypes.object.isRequired,
};

