import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';
var ParseComponent = ParseReact.Component(React);

export default class HomeExperienceCard extends React.Component {

  // getInitialState is not used in React ES6 components. Hardcode it in the constructor.
  constructor() {
    super();
  }

  observe(nextProps, nextState) {}

  render() {
    console.log("Photo url " + this.props.photo);
    return(
      <div className="experience-card">
          <img src={this.props.photo} id="bg"></img>
          <div id="overlay"></div>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}><h1>{this.props.name}</h1></div>
          <div id="img-container">
            <img className="userImage" src="http://bit.ly/1TGdlHL"></img>
            <img className="userImage" src="http://bit.ly/1Q8skwh"></img>
            <img className="userImage" src="http://bit.ly/1TGdlHL"></img>
            <img className="userImage" src="http://bit.ly/1Q8skwh"></img>
          </div>
          <div id="icons-container">
              <img src={ require("../img/event.png") } className="event-icon"></img>
              <p className="icon-text">130</p>
              <img src={ require("../img/members_icon.png") } className="users-icon"></img>
              <p className="icon-text" style={{marginRight: '0px'}}>348</p>
          </div>
      </div>
    );
  }

};
