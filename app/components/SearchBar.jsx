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

default export class Searchbar extends ParseComponent {

  constructor() {
    super();
    //set search state variable to "";
  }

  observe(props, state) {
    // search state variable - text
    // search state variable - skeleton_experience_object

    // if search state variable - text.length >=2 && (skeleton_experience_object)
    return {
      // one compound query containig:
      //   event query with experience_id of skeleton_experience_object
      //   user query with exp_shared containing skeleton_experience_object
      //   event query with description containing search state variable
    }
    // else
    //   return nothing
  }

  render() {

    return(
    // input bar that calls method which updates search 
    //    state variable: updateSearchQuery()
    // search results container with cards correctly stacked: renderCards()
    );

  }

  updateSearchQuery() {
    // only triggers once there are more than 2 characters and sets
    // search state variable - text

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