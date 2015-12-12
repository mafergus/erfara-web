/*

PROTOTYPE: Unsure if the searchbar should render results and use a callback
to pass the results to a containing object, or if the Searchbar and results containers 
should be one component

For now, a temporary container beneath the searchbar will be used to display results
to ensure the searchbar is doing it's job

*/
import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';
var ParseComponent = ParseReact.Component(React);

import SearchBarResultsBox from './SearchBar_ResultsBox';

export default class Searchbar extends ParseComponent {

  // getInitialState is not used in React ES6 components. Hardcode it in the constructor.
  constructor() {
    super();

    this.state = {
      searchStateVariableText: "",
      searchExperienceObject: undefined,
      searchResultsTab: "events"
    }
  }

  observe(nextProps, nextState) {
    // search state variable - text
    // search state variable - searchExperienceObject
    var searchText = nextState.searchStateVariableText;
    var searchObject = nextState.searchExperienceObject;

    if (searchText.length > 2 && searchObject){
      //   event query with experience_id of searchObject
      var eventObjectIdQuery = new Parse.Query('Event').equalTo("experience_id", searchObject).ascending("updatedAt");
      //   user query with exp_shared containing searchExperienceObject
      var userExpSharedQuery = new Parse.Query(Parse.User).containedIn("exp_sharing", [searchObject]).ascending("updatedAt");
      //console.log("SearchBar.observe() queries processed with :", nextState);
      return { eventResults: eventObjectIdQuery,
               userResults: userExpSharedQuery    }
    } else {
      //console.log("SearchBar.observe() - no queries processed, current state: ", nextState);
      return {
        // Nothing; don't run unnecessary queries
      }
    }
  }

  render() {
    return(
      <div className="searchbar-container">
        <div className="searchbar-input-div">
          <div className="searchbar-input-div-header">Search Filters</div>
          <input className="searchbar-input" ref="searchBarInput" type="text" 
                onChange={this.updateSearchQuery.bind(this)} placeholder="Type to Search"/>
          {/* 
          <button onClick={this.logErrors.bind(this)}>State/Errors?</button>
          <button onClick={this.showData.bind(this)}>Current this.data?</button>
          <button onClick={this.pendingQs.bind(this)} >pendingQueries? </button>
          {*/}
       </div>
        <div className="searchbar-results-div">
          <SearchBarResultsBox users={this.data.userResults} events={this.data.eventResults} />
        </div>
      </div>
    )
  }

  updateSearchQuery() {
    var searchQuery = ReactDOM.findDOMNode(this.refs.searchBarInput).value;
    this.setState({searchStateVariableText: searchQuery});
    this.updateParseQueries(searchQuery, searchQuery.length);
  }

  // only triggers once there are more than 2 characters and sets
  updateParseQueries(searchText, searchLength){
    //console.log(searchLength);
    var _this = this;
    var experienceQuery = new Parse.Query('Experience');

    if(searchLength <3){
      this.clearDataStates();
    } else if (searchLength >= 3){
        //console.log("searchlength >=3 triggered");
        // figure out which type of experience objectID based on text and setstate
        experienceQuery.matches("name", searchText, "i");
        experienceQuery.find({
          success: function(experience){
            // If result array is empty, clear out existing data
            if(experience.length < 1 && _this.data.eventResults 
                                     && _this.data.userResults) _this.clearDataStates();
            _this.setState({searchExperienceObject: experience[0]});
          }, 
          error: function(error) { console.log("SearchBar.updateSearchQuery.experienceQuery failed with: " + error.message); }
        });
      }
  }

  clearDataStates() {
    this.data.eventResults = undefined;
    this.data.userResults  = undefined;
  }

  renderCards() {
    // for this.data.query.map(object => {  
    // if it's an event card, render an event card
    // if it's a profile card, render a profile card
    // })
  }

//########### Temporary debugging remove once component finished ########
//#######################################################################
  logErrors() {                                                        //
    console.log("Errors :", this.queryErrors());                       //
    console.log("state currently : ", this.state);                     //
  }                                                                    //
                                                                       //
  pendingQs(){                                                         //
    console.log(this.pendingQueries());                                //
  }                                                                    //
                                                                       //
  showData(){                                                          //
    console.log(this.data.eventResults, this.data.userResults);        //
  }                                                                    //
//#######################################################################

}
