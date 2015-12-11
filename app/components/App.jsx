import React from 'react'
import { render, findDOMNode } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, History, Route, IndexRoute, Link } from 'react-router'
import Authentication from './Authentication';
import Menu from './Menu';
import Card_Profile from './Card_Profile';
import Card_Event from './Card_Event';
import Home from './Home';
import SearchBar from './SearchBar';
import Messages from './Messages';
import Profile from './Profile';

const history = useBasename(createHistory)({
  basename: '/'
})

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

const NotFound = React.createClass({
  render() {
    return <h2>Not found</h2>
  }
})

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={SearchBar} />
      <Route path="home" component={Home} />
      <Route path="discover" component={SearchBar} />
      <Route path="messages" component={Messages} />
      <Route path="profile" component={Profile} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.body)
