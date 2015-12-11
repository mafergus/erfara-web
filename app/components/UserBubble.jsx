import React from 'react';

export default class userBubble extends React.Component {

//props - takes an owner prop; a full owner object

  render () {

    if(!this.props.owner || !this.props.owner.photo || !this.props.owner.photo._url){
      return (
        <div className="user-bubble-div"></div>
      );
    } else if (this.props.owner && this.props.text === "yes"){
        return (
          <div className="user-bubble-div">
            <img src={this.props.owner.photo._url} alt="." className="user-bubble-photo" />
            <span> {this.props.owner.first_name} {this.props.owner.last_name[0]}.</span>
          </div>  
        );    
    } else {
        return (
          <div className="user-bubble-div">
            <img src={this.props.owner.photo._url} alt="." className="user-bubble-photo" />
          </div>  
        );    
    }
  }

};
