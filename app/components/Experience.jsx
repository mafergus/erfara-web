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

  observe(nextProps, nextState) {
    return {
      events: (new Parse.Query("Event").equalTo("experience", this.props.params.experienceId )),
      experience: (new Parse.Query("Experience").equalTo("objectId", this.props.params.experienceId))
    };
  }

  render() {
    // var cards = this.data.experiences.map(function (experience, i) {
    //   console.log("Experience " + i + " name " + experience.name + " photo url " + experience.photo._url);
    //   var row = [];
    //   return (<HomeExperienceCard />);
    // });
    // var rows = [];
    // var rowCards = [];
    // this.data.experiences.forEach(function (experience, i) {
    //   var url = experience.photo.url();
    //   rowCards.push(<HomeExperienceCard name={experience.name} photo={url} />);
    //   if (rowCards.length == 3) {
    //     rows.push((<div className="cards-container-row">{rowCards}</div>));
    //     rowCards = [];
    //   }
    // });
    // if (rowCards.length !== 0) {
    //   rows.push((<div className="cards-container-row">{rowCards}</div>));
    // }

    let { experienceId } = this.props.params;
    console.log("DATA " + JSON.stringify(this.data) + " data? " + this.data.toString() );
    console.log("Experience " + this.data.experienced + " exp[0] " + this.data.experience[0] + JSON.stringify(this.data.experience));

    var photoUrl = (this.data.experience && this.data.experience.length > 0) ? this.data.experience[0].photo._url : "";

    return(
      <div className="experience">

        <div id="jumbo-div">
          <img src={ photoUrl }></img>
          <div id="overlay"></div>
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
