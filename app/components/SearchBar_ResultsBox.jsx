import React from 'react';
import ReactDOM from 'react-dom';

import Card_Profile from './Card_Profile';
import Card_Event from './Card_Event';
import Card_Profile_Horizontal from './Card_Profile_Horizontal';
import Card_Event_Horizontal from './Card_Event_Horizontal';
import Card_Experience_Horizontal from './Card_Experience_Horizontal';

export default class SearchBarResultsBox extends React.Component {

//expected props:
//  array of users
//  array of events
//  array of experiences

constructor(){
  super();
  this.state = {
    currentTab: undefined
  }
}

componentDidMount(){
  document.getElementById("buttonEvt").checked = true;
}

  render() {
    return(
      <div className="search-results-container">
          <div className="menu">
            <div className="menu-buttons">
              <form>
                <input type="radio" value="buttonExp" name="menubuttons" id="buttonExp" />
                <label htmlFor="buttonExp" id="buttonExpLbl" onClick={this.setTab.bind(this, "buttonExp")}>Experiences</label>
                <input type="radio" value="buttonEvt" name="menubuttons" id="buttonEvt" />
                <label htmlFor="buttonEvt" id="buttonEvtLbl" onClick={this.setTab.bind(this, "buttonEvt")}>Events</label>
                <input type="radio" value="buttonUsr" name="menubuttons" id="buttonUsr" />
                <label htmlFor="buttonUsr" id="buttonUsrLbl" onClick={this.setTab.bind(this, "buttonUsr")}>Users</label> 
              </form>
              </div>
          </div>
          <div className="render-area">
            {this.renderCards()}
          </div>
      </div>
    );
  }

  setTab(id){
    this.setState({
      currentTab: id
    })
  }

  renderCards(){
    switch(this.state.currentTab){
      case "buttonExp": return this.renderExperienceCards(); break;
      case "buttonEvt": return this.renderEventCards(); break;
      case "buttonUsr": return this.renderProfileCards(); break;
      default: return this.renderEventCards(); break;
    }
  }

  renderProfileCards(){
    console.log("render area users:", this.props.users);
    if(this.props.users){
      return(
          this.props.users.map((user) => {
            return <Card_Profile_Horizontal  key={user.id} user={user} />;
          })
      );
    }

  }

  renderEventCards(){
    console.log("render area events:", this.props.events);
    if(this.props.events){
      return(
          this.props.events.map((event) => {
            return <Card_Event_Horizontal key={event.id} event={event} />;
          })
      );
    }
  }

  renderExperienceCards(){
    console.log("render experience events:", this.props.experiences);
    if(this.props.experiences){
      return(
          this.props.experiences.map((experience) => {
            return <Card_Experience_Horizontal key={experience.id} experience={experience} />;
          })
      );
    }
  }

}