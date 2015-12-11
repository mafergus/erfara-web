import React from 'react';
import ReactDOM from 'react-dom';

import Card_Profile from './Card_Profile';
import Card_Event from './Card_Event';
import Card_Profile_Horizontal from './Card_Profile_Horizontal';
import Card_Event_Horizontal from './Card_Event_Horizontal';

export default class SearchBarResultsBox extends React.Component {

//expected props:
// array of users
//  array of events

constructor(){
  super();
  this.state = {
    currentTab: undefined
  }
}

  render() {
    return(
      <div className="search-results-container">
          <div className="search-results-menu">
            <button onClick={this.setTab.bind(this, 1)}>Experiences</button>
            <button onClick={this.setTab.bind(this, 2)}>Events</button>
            <button onClick={this.setTab.bind(this, 3)}>Users</button>
          </div>
          <div className="search-results-render-area">
            {this.renderCards()}
          </div>
      </div>
    );
  }

  setTab(option){
    console.log(option)
    this.setState({
      currentTab: option
    })
  }

  renderCards(){
    switch(this.state.currentTab){
      case 1: return <p>Todo: EventCards</p>; break;
      case 2: return this.renderActivityCards(); break;
      case 3: return this.renderProfileCards(); break;
      default: return this.renderActivityCards(); break;
    }
  }

  renderProfileCards(){
    console.log("render area users:", this.props.users);
    if(this.props.users){
      return(
          this.props.users.map((user) => {
            return <Card_Profile  key={user.id} user={user} />;
          })
      );
    }

  }

  renderActivityCards(){
    console.log("render area events:", this.props.events);
    if(this.props.events){
      return(
          this.props.events.map((event) => {
            return <Card_Event_Horizontal key={event.id} event={event} />;
          })
      );
    }
  }

}