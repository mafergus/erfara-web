/*

PROTOTYPE: Unsure if the searchbar should render results and use a callback
to pass the results to a containing object, or if the Searchbar and results containers 
should be one component

For now, a temporary container beneath the searchbar will be used to display results
to ensure the searchbar is doing it's job

*/
import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
var ParseComponent = ParseReact.Component(React);

export default class Searchbar extends ParseComponent {

  // getInitialState is not used in React ES6 components. Hardcode it in the constructor.
  constructor() {
    super();

    this.state = {
      searchStateVariableText: "",
      skeleton_experience_object: undefined
    }
  }

  observe(props, state) {
    // search state variable - text
    // search state variable - skeleton_experience_object
    var searchText = this.state.searchStateVariableText;
    var searchObject = this.state.skeleton_experience_object;

    // if searchText.length >=2 && (searchObject)
    if (searchText && searchObject){
      // individual queries:
        //   event query with experience_id of searchObject
        var eventObjectIdQuery = new Parse.Query('Event').equalTo("experience_id", searchObject);
        //   user query with exp_shared containing skeleton_experience_object
        var userExpSharedQuery = new Parse.Query(Parse.User).equalTo("exp_sharing", searchObject);
        console.log("SearchBar.observe() queries processed with :");
        console.log(this.state.searchStateVariableText);
        console.log(this.state.skeleton_experience_object);
      return {
        eventResults: eventObjectIdQuery,
        userResults: userExpSharedQuery
      }
    } else {
      console.log("SearchBar.observe() - no queries processed");
      return {
        // Nothing; don't run unnecessary queries
      }
    }
  }

  render() {
    return(
      <div>
        <div className="searchbar-div">
          <input className="searchbar-input" id="searchbar-input" type="text" onChange={this.updateSearchQuery.bind(this)} />
          <button onClick={this.logErrors.bind(this)}>Errors?</button>
          <button onClick={this.showData.bind(this)}>Data?</button>
        </div>
        <div className="searchbar-results-div">
        </div>
      </div>
    // input bar that calls method which updates search 
    //    state variable: updateSearchQuery()
    // search results container with cards correctly stacked: renderCards()
    )
  }

  logErrors() {
    console.log(this.queryErrors());
    console.log("state currently : ");
    console.log(this.state);
  }

  showData(){
    console.log(this.data.eventResults);
    console.log(this.data.userResults);
  }

  updateSearchQuery() {
    // Lexically scoped helper-variables for subsequent nested functions
    var _this = this;
    var searchQuery = document.getElementById("searchbar-input").value;
    //  var experienceObject = Parse.Object.extend('Experience');
    var experienceQuery = new Parse.Query('Experience');

    // only triggers once there are more than 2 characters and sets
    if(searchQuery.length >= 2){
      // figure out which type of experience objectID based on text and setstate
      experienceQuery.matches("name", searchQuery, "i");
      experienceQuery.find({
        success: function(experience){
          // If result array is empty, clear out existing data
          if(experience.length < 1 && _this.data.eventResults && _this.data.userResults){
            _this.data.eventResults = undefined;
            _this.data.userResults = undefined;
          }

          var skeletonExperience = experience[0];
          _this.setState({
            searchStateVariableText: searchQuery ,
            skeleton_experience_object: skeletonExperience
          });
          _this.refreshQueries();
        }, 
        error: function(error){
          console.log("SearchBar.updateSearchQuery.experienceQuery failed with: " + error.message);
        }
      });
    } else {
      // clear data if searchQuery<3
        _this.data.eventResults = undefined;
        _this.data.userResults = undefined;
    }
  }

  renderCards() {
    // for this.data.query.map(object => {  
    // if it's an event card, render an event card
    // if it's a profile card, render a profile card
    // })
  }

}

//barb