import React, { PropTypes } from "react";
import autoBind from "react-autobind";
import { minBlack, lightBlack, darkBlack } from "material-ui/styles/colors"

export default class EventDescription extends React.Component {

  static PropTypes = {
    date: PropTypes.string.isRequired,
    location: PropTypes.object,
    locationString: PropTypes.string,
  };

  constructor() {
    super();
    autoBind(this);
  }

  render() {
     return <div style={{ backgroundColor: "white", padding: "1.4em" }}><a style={{ color: lightBlack }}>
          Hey folks,

    Welcome to the Tuesday night Drinks. This week we are at The Old Pro in Palo Alto.

    [IF YOU ARE VIEWING THIS FROM THE CS MOBILE APP(ANDROID/iPHONE/etc), CHANCES ARE YOU MIGHT NOT SEE THE WALL, USE A MOBILE BROWSER]

    There are a few other bars & food places around, so we can decide where to go before and after!

    If you cant find us, please coordinate using this page, check out for updates! If weather is good we will be outside at the back, if not look for us inside. Either way watch this space for updates

    Dont miss out. Let everyone else know when you are coming in.

    RSVP's and posting of ETA expected. Please let me know when you are going to come in, based on that I will come in as well. If i dont see any times below, I assume people are showing up later than 7:30, so please post your ETA! :)

    Travelers, this might be a good time to meet some locals and get some advice and also in finding hosts, if necessary.

    Also, I've created a meetup.com group and a facebook group: 
    http://www.meetup.com/Tuesday-Night-Drinks-V2-0/ 
    https://www.facebook.com/groups/SouthBaySFTuesdayNightDrinks/

    Thanks, 
    Marcos
      </a></div>;
  }
  
}