import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';
import HomeExperienceCard from './HomeExperienceCard';
import CardProfile from './Card_Profile';
var ParseComponent = ParseReact.Component(React);

export default class Home extends ParseComponent {
  mixins: [ParseReact.Mixin] // Enable query subscriptions

  // getInitialState is not used in React ES6 components. Hardcode it in the constructor.
  constructor() {
    super();
  }

  observe(nextProps, nextState) {
    return {
      experiences: (new Parse.Query("Experience"))
    };
  }

  render() {
    var cards = this.data.experiences.map(function (experience, i) {
      console.log("Experience " + i + " name " + experience.name + " photo url " + experience.photo._url);
      var row = [];
      return (<HomeExperienceCard />);
    });
    // cards.map(function (card, i) {
    //   console.log("Card " + i);
    //   if ( ( (i % 3) === 0) && (i !== 0) ) {
    //     console.log("NEW ROW");
    //   }
    // });
    var rows = [];
    var rowCards = [];
    this.data.experiences.forEach(function (experience, i) {
      var url = experience.photo.url();
      rowCards.push(<HomeExperienceCard name={experience.name} photo={url} />);
      if (rowCards.length == 3) {
        rows.push((<div className="cards-container-row">{rowCards}</div>));
        rowCards = [];
      }
    });
    if (rowCards.length !== 0) {
      rows.push((<div className="cards-container-row">{rowCards}</div>));
    }

    return(
      <div className="home">

        <div id="jumbo-div">
          <img src={ require("../img/kayaking.jpg") }></img>
          <div id="overlay"></div>
        </div>

        <div id="filter-bar">
        </div>

        <div id="cards-div">
          <div id="cards-container">
            {rows}
          </div>
        </div>
      </div>
    );
  }

}
