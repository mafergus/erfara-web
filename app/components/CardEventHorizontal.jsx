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

export default class CardEventHorizontal extends ParseComponent {
  
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

  onCardClick() {
    console.log("Event id " + this.props.event.objectId);

    this.context.history.pushState(null, '/events/' + this.props.event.objectId);
  }

  render() {

    return(
      <div className="card-event-horizontal card-1" onClick={this.onCardClick.bind(this)}>
        <div className="photo-div">
          <img className="photo" src={this.props.event.photo._url} alt="Photo"/>
        </div>
        <div className="stripe">
        </div>
        <div className="info">
          <div className="title">
            <h1> {this.props.event.title} </h1>
          </div>
          <div className="time">
            {this.getTime()}
          </div>
          <div className="userbubble">
              <UserBubble owner={this.data.owner[0]} text="yes" />
          </div>
          <div className="location">
            todo:GeoLocations
          </div>
          <div className="availability">
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

CardEventHorizontal.contextTypes = {
  history: React.PropTypes.object.isRequired,
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