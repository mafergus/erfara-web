import React from 'react';
import ReactDOM from 'react-dom';

import Card_Profile from './Card_Profile';
import Card_Event from './Card_Event';
import Card_Event_Horizontal from './Card_Event_Horizontal';
import Card_Experience_Horizontal from './Card_Experience_Horizontal';
import Card_Skillshare_Horizontal from './Card_Skillshare_Horizontal';

export default class SearchBarResultsBox extends React.Component {

//expected props:
//  array of skillshares
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
                <input type="radio" value="buttonSkillShare" name="menubuttons" id="buttonSkillShare" />
                <label htmlFor="buttonSkillShare" id="buttonSkillShareLbl" onClick={this.setTab.bind(this, "buttonSkillShare")}>SkillShares</label> 
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
      case "buttonExp":        return this.renderExperienceCards(); break;
      case "buttonEvt":        return this.renderEventCards(); break;
      case "buttonSkillShare": return this.renderSkillShareCards(); break;
      default:                 return this.renderEventCards(); break;
    }
  }

  renderSkillShareCards(){
    if(this.props.skillshares){
      return(
        this.props.skillshares.map((skillshare) => {
          return <Card_Skillshare_Horizontal key={skillshare.id} skillshare={skillshare} />;
        })
      );
    }

  }

  renderEventCards(){
    if(this.props.events){
      return(
          this.props.events.map((event) => {
            return <Card_Event_Horizontal key={event.id} event={event} />;
          })
      );
    }
  }

  renderExperienceCards(){
    if(this.props.experiences){
      return(
          this.props.experiences.map((experience) => {
            return <Card_Experience_Horizontal key={experience.id} experience={experience} />;
          })
      );
    }
  }

}