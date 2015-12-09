import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
var ParseComponent = ParseReact.Component(React);

export default class EventComment extends ParseComponent {

  observe() {
    
  }

  render () {
    return (
    <div className="event-comment-div">
      <p>{this.props.comment.text}</p>

    </div>
    );
  }

};