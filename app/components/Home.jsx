import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';
import HomeExperienceCard from './HomeExperienceCard';
import CardProfile from './CardProfile';
import EventCard from './EventCard';
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var ParseComponent = ParseReact.Component(React);
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

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

  onEventClick(id) {
    console.log("onEventClick id " + JSON.stringify(id) );

    this.context.history.pushState(null, '/events/' + id.id);
  }

  observe(nextProps, nextState) {
    return {
      events: (new Parse.Query("Event").include("owner").include("experience"))
    };
  }

  render() {
    let self = this;
    var rows = [];
    var rowCards = [];
    this.data.events.forEach(function (event, i) {
      var id = event.objectId;
      rowCards.push(<EventCard event={event} onUserClick={ self.onExperienceClick.bind(self, {id} ) } />);
      // if (rowCards.length == 3) {
        // rows.push((<Row style={{textAlign: "center", backgroundColor: "green"}}>{rowCards}</Row>));
        // rowCards = [];
      // }
    });
    if (rowCards.length !== 0) {
      rows.push((<Row style={{textAlign: "center"}}>{rowCards}</Row>));
    }

    return(
      <div className="home">

        <div id="jumbo-div" style={{marginBottom: "20px"}}>
          <img id="bg-img"></img>
          <div id="overlay"></div>
          <div style={{position: "absolute", left: "15%", top: "30px"}}>
            <h1 className="text-h1" style={{marginBottom: "17px"}}>Ocean Beach Music Sunday</h1>
            <h2 className="text-h2">Sunday, December 16, 2015</h2>
            <div id="subtext">
              <h2 className="text-h2">6:00-8:00pm</h2>
              <div id="location"></div>
              <h2 className="text-h2">Ocean Beach</h2>
            </div>
          </div>
        </div>

       {/* <div id="cards-div">
          <div id="cards-container">
            {rows}
          </div>
        </div> */}

        <div className="centered-container" style={{display: "inline-block", marginLeft: "5%", marginRight: "5%"}}>
          <Grid lg={10} md={10} fluid>
            {rows}
          </Grid>
        </div>
      </div>
    );
  }
}

Home.contextTypes = {
  history: React.PropTypes.object.isRequired,
};
