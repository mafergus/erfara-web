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
var ParseReact = require('parse-react');
var ParseComponent = ParseReact.Component(React);

export default class CardProfile extends ParseComponent {

  observe(){

    // query for comments related to this event

    return {
      // event comments
      // event owner
      // event participants
    }
  }

  render() {

    return(
      <div className="card-event">
        <div className="card-event-photo">
          <img src={this.props.event.photo._url} alt="Photo" height="100%" width="100%" />
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
          </div>
        </div>

      </div>
    );
  }

  // method here to render those comments in eventComment components
  addComment(){

  }

};