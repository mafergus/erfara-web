import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';
import HomeExperienceCard from './HomeExperienceCard';
import CardProfile from './CardProfile';
import EventDescriptionCard from './EventDescriptionCard';
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var ParseComponent = ParseReact.Component(React);

export default class Event extends ParseComponent {
  mixins: [ParseReact.Mixin] // Enable query subscriptions

  observe(nextProps, nextState) {
  }

  render() {

    return(
      <div className="event">

        <div id="jumbo-div">
          <img className="background-img" id="bg-img"></img>
          <div id="overlay"></div>
          <div id="text">
            <h1 style={{marginBottom: "17px"}}>Some Badass Event</h1>
            <h2>Sunday, December 16, 2015</h2>
            <div id="subtext">
              <h2>6:00-8:00pm</h2>
              <div id="location"></div>
              <h2>Ocean Beach</h2>
            </div>
            <div id="img-container">
              <img id="jumboUserImage" src="http://www.meganfox.com/wp-content/uploads/2014/01/3.jpg"></img>
              <img id="jumboUserImage" src="http://bit.ly/1Q8skwh"></img>
              <img id="jumboUserImage" src="http://www.meganfox.com/wp-content/uploads/2014/01/3.jpg"></img>
              <img id="jumboUserImage" src="http://bit.ly/1Q8skwh"></img>
            </div>
          </div>
        </div>

        <div className="centered-container">
          <div id="content" style={{marginTop: "10px"}}>
            
            <EventDescriptionCard />
            
            <div id="subcontent" style={{width: "100%", marginTop: "10px"}}>
              <div id="left-content" style={{backgroundColor: "red", width: "80%", height: "500px", display: "inline-block"}}>
              </div>
              <div id="right-content" style={{backgroundColor: "yellow", width: "20%", height: "500px", display: "inline-block"}}>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    );
  }
}

