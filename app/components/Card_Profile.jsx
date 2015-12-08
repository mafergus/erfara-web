/**

Note: The underlying Parse query for the cards should be located in the container
      which the cards will be generated in iteratively:

      query.map((object) => {  <Card object={object} /> })

*/


import React from 'react';

export default class CardProfile extends React.Component {

  render() {

    return(
      <div className="card-profile">
        <div className="card-profile-photo">
          <p>card-profile-photo</p>
        </div>
        <div className="card-profile-info">
          <p>card-profile-info</p>
        </div>
      </div>
    );

  }

};