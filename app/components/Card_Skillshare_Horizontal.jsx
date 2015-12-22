
import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
var ParseComponent = ParseReact.Component(React);
import UserBubble from './UserBubble';

export default class CardSkillshareHorizontal extends ParseComponent {

  //props passed a full skillshare object

  constructor() {
    super();
  }

  observe(nextProps, nextState){

    return {
      // event owner
      owner: (new Parse.Query(Parse.User)).equalTo("objectId", this.props.skillshare.owner.objectId).limit(1)
      // event participants
    }
  }
  render() {

    return(
      <div className="card-skillshare-horizontal">
        <div className="photo-div">
          <div className="photo">
            <img src={this.props.skillshare.photo._url} alt="photo" />
          </div>
        </div>
        <div className="stripe">
        </div>
        <div className="info">
          <div className="top-left-cluster">
            <div className="title">
              {this.props.skillshare.title}
            </div>
            <div className="userbubble">
                <UserBubble owner={this.data.owner[0]} text="yes" />
            </div>  
          </div>
          <div className="description"> 
            <b>Description: </b>{this.props.skillshare.description}
          </div>
          <div className="rating">
          todo:Rating
          </div>
          <div className="location">
          todo:Location
          </div>
        </div>
      </div>
    );
  }
}
