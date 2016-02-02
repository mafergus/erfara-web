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
    console.log("EventComment Author: " + this.props.comment.author.username + "\nText: " + this.props.comment.text + "\nCreated: " + JSON.stringify(this.props.comment.createdAt) );
    var userName = this.props.comment.author.username;
    var userImageUrl = (this.props.comment.author.photo ? this.props.comment.author.photo.url() : 
      "http://shackmanlab.org/wp-content/uploads/2013/07/person-placeholder.jpg");
    var createdAt = this.props.comment.createdAt.toLocaleString();
    return (
      <div className="event-comment">
        <div id="img-container">
          <div className="centered-container" style={{width: "100%", height: "100%"}}>
            <img src={userImageUrl}></img>
          </div>
        </div>
        <div id="text-container">
          <div id="text-inner-container">
            <div>
              <h1>{userName}</h1>
              <h4>{createdAt}</h4>
            </div>
            <p>{this.props.comment.text}</p>
          </div>
        </div>
      </div>
    );
  }

};

    // if(this.data.owner[0]){
    //   return (
    //   <div>
    //     <div className="event-comment-div">
    //       <UserBubble owner={this.data.owner[0]} />
    //       <div className="event-comment-text"><b>{this.data.owner[0].first_name}: </b> {this.props.comment.text}</div>
    //     </div>
    //     <div style={{clear: "both"}}></div>
    //   </div>
    //   ); 
    // } else {
    //   return (
    //   <div>
    //     <div className="event-comment-div">
    //       <UserBubble owner={this.data.owner[0]} />
    //       <div className="event-comment-text">{this.props.comment.text}</div>
    //     </div>
    //     <div style={{clear: "both"}}></div>
    //   </div>
    //   ); 
    // }