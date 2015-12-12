/**

Note: The underlying Parse query for the cards should be located in the container
      which the cards will be generated in iteratively:

  renderActivityCards(){
    return(
        this.data.eventCards.map((event) => {
          return <Card_Event  key={event.id} event={event} />;
        })
    );
  }

Note: The underlying container should be an ES6 Parse-React component to ensure data is loaded
      before any cards are attempted to be rendered.

*/


import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
var ParseComponent = ParseReact.Component(React);
import UserBubble from './UserBubble';

export default class CardProfile extends ParseComponent {
  
  //Props - is passed a full event Parse JSON object

  constructor() {
    super();
  }

  observe(nextProps, nextState){

    return {
      // event owner
      owner: (new Parse.Query(Parse.User)).equalTo("objectId", this.props.event.owner.objectId).limit(1)
      // event participants
    }
  }

  render() {

    return(
      <div className="card-event-horizontal">
        <div className="card-event-horizontal-photo-div">
          <img className="card-event-horizontal-photo" src={this.props.event.photo._url} alt="Photo"/>
        </div>
        <div className="card-event-horizontal-stripe">
        </div>
        <div className="card-event-horizontal-info">
          <div className="card-event-horizontal-info-title">
            <h1> {this.props.event.title} </h1>
          </div>
          <div className="card-event-horizontal-info-time">
            {this.getTime()}
          </div>
          <div className="card-event-horizontal-info-userbubble">
              <UserBubble owner={this.data.owner[0]} text="yes" />
          </div>
          <div className="card-event-horizontal-info-location">
            todo:GeoLocations
          </div>
          <div className="card-event-horizontal-info-availability">
            todo:Availability
          </div>
        </div>
      </div>
    );
  }

  getTime(){
  var options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }
    var dateString = this.props.event.time;
    var localDateTime = dateString.toLocaleString("en-GB", options);
    return localDateTime;
  }

};



/*

  // method here to render those comments in eventComment components
  renderComments(){
    return (
      this.data.comments.map((comment) => {
        return <EventComment key={comment.objectId} comment={comment} />;
      })
    );
  }

  addComment(){
    var _this = this;
    var currentUser = Parse.User.current();
    var parseEvent = Parse.Object.extend('Event');
    var currentEventSkeletonObjectId = new parseEvent({id: this.props.event.objectId});
    if(!currentUser){ 
      alert("Login First"); 
      return;
    } else {
      var commentText = prompt("Enter Comment");
      if (commentText){
        ParseReact.Mutation.Create('EventComment', {
          text: commentText,
          "author": currentUser,
          "event_id": currentEventSkeletonObjectId
        }).dispatch();
        _this.refreshQueries();
      } else {
        alert("Empty comments not allowed");
      }
    } 
  }
*/