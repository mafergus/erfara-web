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
import EventComment from './EventComment';

export default class CardEvent extends ParseComponent {
  
  constructor() {
    super();
  }

  observe(props, state){
    var parseEvent = Parse.Object.extend('Event');
    var currentEventSkeletonObjectId = new parseEvent({id: this.props.event.objectId});

    return {
      comments: (new Parse.Query('EventComment')).equalTo("event_id", currentEventSkeletonObjectId)
      // event owner
      // event participants
    }
  }

  render() {

    return(
      <div className="card-event">
        <div className="card-event-photo-div">
          <img className="card-event-photo" src={this.props.event.photo._url} alt="Photo" height="100%" width="100%" />
        </div>
        <div className="card-event-stripe">
        </div>
        <div className="card-event-info">
        <h1> {this.props.event.title} </h1>
          <div className="card-event-info-text">
            {this.props.event.description}
          </div>
          <div className="card-event-comment-div">
            <h1> Comments </h1>
            <button onClick={this.addComment.bind(this)}> Add Comment.. </button>
            <div>
              {this.renderComments()}
            </div>
          </div>
        </div>

      </div>
    );
  }

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

};
