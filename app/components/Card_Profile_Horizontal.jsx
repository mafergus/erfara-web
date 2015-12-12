/**

Note: The underlying Parse query for the cards should be located in the container
      which the cards will be generated in iteratively:

       renderProfileCards(){
        return(
            this.data.profileCards.map((user) => {
              return <Card_Profile  key={user.id} user={user} />;
            })
        );
       }

Note: The underlying container should be an ES6 Parse-React component to ensure data is loaded
      before any cards are attempted to be rendered.

*/


import React from 'react';

export default class CardProfile extends React.Component {

  render() {

    return(
      <div className="card-profile-horizontal">
        <div className="photo-div">
          <div className="photo">
            <img src={this.props.user.photo._url} alt="Photo" />
          </div>
        </div>
        <div className="stripe">
        </div>
        <div className="info">
          <div className="top-left-cluster">
            <div className="name"> 
              <h1>{this.props.user.first_name}</h1>
            </div>
            <div className="badges">
              {this.getBadges()}
            </div>
            <div className="location">
              {this.getLocation()}
            </div>
          </div>
          <div className="expertise">
            {this.getExpertise()}
          </div>
          <div className="endorsements">
            {this.getEndorsements()}
          </div>
          <div className="bottom-right-cluster">
            <div className="response-rate">
              {this.getResponseRate()}
            </div>
            <div className="last-active">
              {this.getLastActive()}
            </div>
          </div>         
        </div>
      </div>
    );
  }

  getBadges(){
    return(
      <span>todo:Badges</span>
    );
  }

  getLocation(){
    return(
      <span>todo:Location</span>
    );
  }

  getExpertise(){
    return(
      <span>todo:Expertise</span>
    );
  }

  getEndorsements(){
    return(
      <span>todo:Endorsements</span>
    );
  }

  getResponseRate(){
    return(
      <span>todo:ReponseRate</span>
    );
  }

    getLastActive(){
    return(
      <span>todo:LastActive</span>
    );
  }

};