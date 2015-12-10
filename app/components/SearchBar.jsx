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

    //create a placeholder skeleton object without a real ID
    var placeholderSkeletonObject = Parse.Object.extend('Experience');

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
    if (searchText.length >=2 && searchObject){
      // individual queries:
        //   event query with experience_id of searchObject
        var eventObjectIdQuery = new Parse.Query('Event').equalTo("experience_id", searchObject);
        //   user query with exp_shared containing skeleton_experience_object
        var userExpSharedQuery = new Parse.Query(Parse.User).containedIn("exp_shared", searchObject);
        //   event query with description containing search state searchStateVariableText
        var eventDescriptionQuery = new Parse.Query('Event').containedIn("description", searchText);
      // compound query:
        var compoundEventQuery = Parse.Query.or(eventObjectIdQuery, eventDescriptionQuery);
      return {
        eventResults: compoundEventQuery,
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
    //
    return(
      <div>
        <div className="searchbar-div">
          <input className="searchbar-input" id="searchbar-input" type="text" onChange={this.updateSearchQuery.bind(this)} />
        </div>
        <div className="searchbar-results-div">
        </div>
      </div>
    // input bar that calls method which updates search 
    //    state variable: updateSearchQuery()
    // search results container with cards correctly stacked: renderCards()
    )

  }

  updateSearchQuery() {

    // only triggers once there are more than 2 characters and sets
    // search state variable - text
    var searchQuery = document.getElementById("searchbar-input").value;

    if(searchQuery.length >= 2){
      console.log("Searchbar.updateSearchQuery() - Current search length >=2 and is: " + searchQuery.length);
      this.setState({
        searchStateVariableText: searchQuery
      });
      console.log("Searchbar.updateSearchQuery() - this.state.searchStateVariableText: " + this.state.searchStateVariableText);
    }
    // if search state variable !== ""
    // figure out which type of experience objectID based on text
    //    query.containedIn("title", "search state variable")?
    // create skeleton_experience_object and setstate
  }

  renderCards() {
    // for this.data.query.map(object => {  
    // if it's an event card, render an event card
    // if it's a profile card, render a profile card
    // })
  }

}