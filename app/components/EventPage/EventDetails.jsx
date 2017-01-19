import React, { PropTypes } from "react";
import autoBind from "react-autobind";
import { minBlack, lightBlack, darkBlack } from "material-ui/styles/colors"
import MapsPlace from 'material-ui/svg-icons/maps/place';
import ActionSchedule from 'material-ui/svg-icons/action/schedule';

const STYLE = {
  color: darkBlack,
  fontWeight: "normal",
  fontSize: "0.8em",
  display: "inline-block",
};

export default class EventDetails extends React.Component {

  constructor() {
    super();
    autoBind(this);
  }

  render() {
    return <div style={{ backgroundColor: "white", border: "10px black", padding: "1em 0 1em 1em" }}>
      <span style={{ display: "block", marginBottom: "0.5em" }}>
        <MapsPlace color={minBlack} style={{ display: "inline-block", verticalAlign: "middle", marginRight: "0.8em" }}/>
        <a style={STYLE}>Tue Jan 17 from 7:30 PM to 10:00 PM (PST)</a>
      </span>
      <span style={{ display: "block" }}>
        <ActionSchedule color={minBlack} style={{ display: "inline-block", verticalAlign: "middle", marginRight: "0.8em" }}/>
        <a style={STYLE}>The Old Pro, 541 Ramona St, Palo Alto, CA 94301, USA</a>
      </span>
    </div>;
  }
  
}