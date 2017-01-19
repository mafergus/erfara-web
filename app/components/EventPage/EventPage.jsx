import React, { PropTypes } from "react";
import { connect } from "react-redux";
import autoBind from "react-autobind";
import FullWidthSection from '../FullWidthSection';
import RaisedButton from 'material-ui/RaisedButton';
import EventHero from "./EventHero";
import EventDescription from "./EventDescription";
import EventDetails from "./EventDetails";
import AttendeesList from "./AttendeesList";

function mapStateToProps(state, props) {
  return {
    event: state[props.uuid],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEvent: () => dispatch(getEvent),
  };
}

export class EventPage extends React.Component {

  static propTypes = {
    uuid: PropTypes.string,
    event: PropTypes.object,
    getEvent: PropTypes.func.isRequired,
  };
  
  constructor() {
    super();
    autoBind(this);
  }

  render() {
    return <FullWidthSection>
      <div style={{ width: "40%", margin: "0 auto", position: "relative" }}>
        <AttendeesList style={{ position: "absolute", top: "0", width: "30%", marginLeft: "-31%", backgroundColor: "white" }}/>
        <EventHero title="Tuesday Drinks in Palo Alto"/>
        <EventDetails />
        <EventDescription />
      </div>
    </FullWidthSection>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
