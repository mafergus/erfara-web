import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getMeetings } from '../actions/getMeetings';
import { getEvents } from '../actions/getEvents';
import MeetingCard from '../components/MeetingCard';
import { Grid, Row } from 'react-bootstrap';

function mapStateToProps(state) {
  return {
    meetings: state.meetings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMeetings: () => dispatch(getMeetings()),
    getEvents: () => dispatch(getEvents()),
  };
}

export class MeetingsList extends React.Component {

  static propTypes = {
    className: PropTypes.any,
    style: PropTypes.object,
  };

  componentWillMount() {
    this.props.getMeetings();
    this.props.getEvents();
  }

  render() {
    const { meetings, className, style } = this.props;
    let cards = [];
    if (meetings && meetings.meetings) {
      const keyList = Object.keys(meetings.meetings);
      for (var i=0; i<keyList.length; i++) {
        console.log("Key: ", keyList[i], " Value: ", meetings.meetings[keyList[i]]);
        const meeting = meetings.meetings[keyList[i]];
        cards.push(<MeetingCard 
          key={i}
          className="meeting-card col-lg-3"
          title={meeting.name} 
          details={meeting.agenda} 
          guests={meeting.guests}/>);
      }
    }
    return <Row className={className} style={style}> 
      {cards}
    </Row>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingsList);