import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';
import HomeExperienceCard from './HomeExperienceCard';
import CardProfile from './CardProfile';
import EventComment from './EventComment';
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var ParseComponent = ParseReact.Component(React);

export default class EventDiscussionCard extends ParseComponent {
  mixins: [ParseReact.Mixin] // Enable query subscriptions]

  constructor(props) {
    super(props);
  }


  observe(nextProps, nextState) {
    return {
      comments: (new Parse.Query("EventComment").equalTo("eventId", "BrI3kE3mux").include("author")),
    };
  }

  render() {
    var eventComments = [];
    if (this.data.comments && this.data.comments.length > 0) {
      this.data.comments.forEach(function (comment, i) {
        eventComments.push(<li><EventComment comment={comment} /></li>);
      });
    }
    return(
      <div className="event">
        <div className="event-discussion-card card-1">
          <ul style={{height: "400px", overflow: "hidden", overflowY: "scroll", padding: "0px", margin: "0px"}}>
          {eventComments}
          </ul>
        </div>
      </div>
    );
  }
}

