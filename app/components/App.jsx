import '../main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Authentication from './Authentication';
import { Link } from 'react-router';
import Menu from './Menu';

const App = React.createClass({

  alertMe(id) {
    alert(id);
  },

  render() {

    return (
      <div className="app">
        <div id="auth-div">
          <Authentication />
        </div>

        <div className="erfara-header">
          <div className="icon-container">
            <img id="erfara-icon" src={ require("../img/erfara_icon.png") }></img>
            <p onClick={this.alertMe.bind(this, "thisesting")}>Erfara</p>
          </div>
          <div className="header-links-container">
            <Link to="home">Home</Link>
            <Link to="discover">Discover</Link>
            <Link to="messages">Messages</Link>
            <Link to="profile">Profile</Link>
          </div>
          <Menu />
        </div>

        <div style={{position: 'absolute', top: '60px', width: '100%', height: '100%'}}>
          <div className="Content" style={{height: '100%', width: '100%'}}>
            {this.props.children}
          </div>
        </div>

        <div className="our-content" style={{width: '100%', height: '100%', marginTop: '200px', backgroundColor: 'red'}}>
        </div>

        {/*<div id="main-div">

          <div className="app-searchbar-div">
            <SearchBar />
          </div>

          <div className="card-event-div">
            <h1>Barbecue Activity near you</h1>
            {this.renderActivityCards()}
          </div>

          <div className="card-profile-div">
            <h1> Users sharing skills in barbecue </h1>
            {this.renderProfileCards()}
          </div>
        </div> */}

      </div>
    )
  }
})

module.exports = App;
