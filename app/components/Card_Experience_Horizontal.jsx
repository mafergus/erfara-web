import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
var ParseComponent = ParseReact.Component(React);
import UserBubble from './UserBubble';

export default class CardEventHorizontal extends ParseComponent {
  
  //Props - is passed a full experience Parse JSON object

  constructor() {
    super();
  }

  observe(nextProps, nextState){
    return {
      
    }
  }

  render() {

    return(
      <div className="card-experience-horizontal">
        <div className="card-experience-horizontal-photo-div">
          <img className="card-experience-horizontal-photo" src={this.props.experience.photo._url} alt="Photo"/>
        </div>
        <div className="card-experience-horizontal-stripe">
        </div>
        <div className="card-experience-horizontal-info">
        </div>
      </div>
    );
  }

};
