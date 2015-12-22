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

  componentDidMount(){
    console.log(this.queryErrors());
  }

  observe(nextProps, nextState) {
    // search state variable - text
    // search state variable - searchExperienceObject
    var searchText = nextState.searchStateVariableText;
    var searchObject = nextState.searchExperienceObject;
    var searchRegex = new RegExp(searchText, "i");

    if (searchText.length > 2 && searchObject){
      //   event query with experience_id of searchObject
      var eventObjectIdQuery = new Parse.Query('Event').equalTo("experience", searchObject).ascending("updatedAt");
      //   experience query with title containing searchText
      var experienceTitleQuery = new Parse.Query('Experience').matches("name", searchRegex);
      var experienceDescriptionQuery = new Parse.Query('Experience').matches('description', searchRegex);
      var experienceCompoundQuery = Parse.Query.or(experienceTitleQuery, experienceDescriptionQuery);
      
      //   NEEDS TO ADD CHANGE TO A SKILLSHARE QUERY...!!!!!!!!
      var skillShareQuery = new Parse.Query('SkillShare').equalTo("experience_id", searchObject);

      //console.log("SearchBar.observe() queries processed with :", nextState);
      return { eventResults: eventObjectIdQuery,
               experienceResults: experienceCompoundQuery,
               skillShareResults: skillShareQuery }
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
       </div>
        <div className="searchbar-results-div">
          <SearchBarResultsBox skillshares={this.data.skillShareResults} events={this.data.eventResults} experiences={this.data.experienceResults} />
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
    this.data.eventResults       = undefined;
    this.data.experienceResults  = undefined;
    this.data.skillShareResults  = undefined;
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
