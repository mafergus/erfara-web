import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import UserBubble from './UserBubble';
var ParseComponent = ParseReact.Component(React);

export default class EventComment extends ParseComponent {

  constructor() {
    super();
  }

  observe(props, state) {
    var commentAuthorId = this.props.comment.author.objectId;
    return {
      owner: (new Parse.Query(Parse.User)).equalTo("objectId", commentAuthorId).limit(1)
    }
  }

  render () {

    if(this.data.owner[0]){
      return (
      <div>
        <div className="event-comment-div">
          <UserBubble owner={this.data.owner[0]} />
          <div className="event-comment-text"><b>{this.data.owner[0].first_name}: </b> {this.props.comment.text}</div>
        </div>
        <div style={{clear: "both"}}></div>
      </div>
      ); 
    } else {
      return (
      <div>
        <div className="event-comment-div">
          <UserBubble owner={this.data.owner[0]} />
          <div className="event-comment-text">{this.props.comment.text}</div>
        </div>
        <div style={{clear: "both"}}></div>
      </div>
      ); 
    }

  }

};