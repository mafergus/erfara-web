import React from 'react';
import ReactDOM from 'react-dom';

import Card_Profile from './Card_Profile';
import Card_Event from './Card_Event';

export default class SearchBarResultsBox extends React.Component {

//expected props:
// array of users
//  array of events

constructor(){
  super();
  this.state = {
    currentTab: 1
  }
}

  render() {
    return(
      <div className="search-results-container">
          <div className="search-results-menu">
            <button onClick={this.setTab.bind(this, 1)} >users</button>
            <button onClick={this.setTab.bind(this, 2)}>events</button>
            <button onClick={this.setTab.bind(this, 3)}>???</button>
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
    if(this.state.currentTab === 1){
      return(
        this.renderProfileCards()
      );
    } else if (this.state.currentTab === 2){
      return(
        this.renderActivityCards()
      );
    } else {
      // default failsafe option
      return <p>Nothing here mang</p>
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
            return <Card_Event  key={event.id} event={event} />;
          })
      );
    }
  }

}