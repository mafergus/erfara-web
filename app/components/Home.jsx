import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';
import HomeExperienceCard from './HomeExperienceCard';
import CardProfile from './Card_Profile';
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var ParseComponent = ParseReact.Component(React);

export default class Home extends ParseComponent {
  mixins: [ParseReact.Mixin] // Enable query subscriptions

  // getInitialState is not used in React ES6 components. Hardcode it in the constructor.
  constructor() {
    super();
  }

  onExperienceClick(id) {
    console.log("onExperienceClick id " + JSON.stringify(id) );

    this.context.history.pushState(null, '/experiences/' + id.id);
  }

  observe(nextProps, nextState) {
    return {
      experiences: (new Parse.Query("Experience"))
    };
  }

  render() {
    let self = this;
    var rows = [];
    var rowCards = [];
    this.data.experiences.forEach(function (experience, i) {
      var url = experience.photo.url();
      var id = experience.objectId;
      console.log("Experience " + JSON.stringify(experience) + " id " + experience.objectId);
      rowCards.push(<HomeExperienceCard name={experience.name} photo={url} onUserClick={ self.onExperienceClick.bind(self, {id} ) } />);
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
          <div id="text">
            <div id="text-bg"></div>
            <h1>Kayaking</h1>
            <h2>...one of over 1,452 and counting experiences on Erfara</h2>
          </div>
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

Home.contextTypes = {
  history: React.PropTypes.object.isRequired,
};
