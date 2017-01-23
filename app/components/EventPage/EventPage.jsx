import React, { PropTypes } from "react";
import Immutable from "immutable";
import ImmutablePropTypes from "react-immutable-proptypes";
import { connect } from "react-redux";
import autoBind from "react-autobind";
import FullWidthSection from '../FullWidthSection';
import RaisedButton from 'material-ui/RaisedButton';
import Hero from "../Hero";
import EventDescription from "./EventDescription";
import EventDetails from "./EventDetails";
import AttendeesList from "./AttendeesList";
import { getEvent } from "../../actions/getEvents";

function mapStateToProps(state, props) {
  return {
    event: state.events.get(props.params.id),
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

  componentWillMount() {
    this.props.getEvent(this.props.params.id);
  }

  componentDidMount() {
    console.log("id: ", this.props.params.id);
  }

  render() {
    // if (!this.event) { return <div></div> };
    return <FullWidthSection>
      <div style={{ width: "40%", margin: "0 auto", position: "relative" }}>
        <AttendeesList style={{ position: "absolute", top: "0", width: "200px", marginLeft: "-210px", backgroundColor: "white" }}/>
        <Hero title={this.props.event && this.props.event.title} image={this.props.event && this.props.event.photo}/>
        <EventDetails />
        <EventDescription />
      </div>
    </FullWidthSection>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
