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
      <div className="card-profile">
        <div className="card-profile-photo">
          <img src={this.props.user.photo._url} alt="Photo" height="100%" width="100%" />
        </div>
        <div className="card-profile-info">
          <p>{this.props.user.username}</p>
          {console.log(this.props.user)}
        </div>
      </div>
    );

  }

};