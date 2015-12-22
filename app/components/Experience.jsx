import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';
import HomeExperienceCard from './HomeExperienceCard';
var ParseComponent = ParseReact.Component(React);

export default class Experience extends ParseComponent {
  mixins: [ParseReact.Mixin] // Enable query subscriptions

  // getInitialState is not used in React ES6 components. Hardcode it in the constructor.
  constructor() {
    super();
  }

  componentDidUpdate() {
    this.getDOMNode().scrollTop = 0;
    window.scrollTo(0,0);
  }

  observe(nextProps, nextState) {
    return {
      events: (new Parse.Query("Event").equalTo("experience", this.props.params.experienceId )),
      experience: (new Parse.Query("Experience").equalTo("objectId", this.props.params.experienceId))
    };
  }

  render() {

    let { experienceId } = this.props.params;
    console.log("DATA " + JSON.stringify(this.data) + " data? " + this.data.toString() );
    console.log("Experience " + this.data.experienced + " exp[0] " + this.data.experience[0] + JSON.stringify(this.data.experience));

    var photoUrl = "";
    var title = "";
    if (this.data.experience && this.data.experience.length > 0) {
      photoUrl = this.data.experience[0].photo._url;
      title = this.data.experience[0].name;
    }

    return(
      <div className="experience">

        <div id="jumbo-div">
          <img src={ photoUrl }></img>
          <div id="overlay"></div>
          <div id="title-container"><h1>YOGA</h1></div>
        </div>

        <div id="filter-bar">
        </div>

        <div id="cards-div">
          <div id="cards-container">
          </div>
        </div>
      </div>
    );
  }

}
