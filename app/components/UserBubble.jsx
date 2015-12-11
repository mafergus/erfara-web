import React from 'react';

export default class userBubble extends React.Component {

  render () {

    if(!this.props.owner || !this.props.owner.photo || !this.props.owner.photo._url){
      return (
        <div className="user-bubble-div"></div>
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
