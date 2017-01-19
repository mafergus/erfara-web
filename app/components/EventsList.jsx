import React, { PropTypes } from "react";
import autoBind from "react-autobind";
import { connect } from 'react-redux';
import { getEvents } from "../actions/getEvents";
import { GridList, GridTile } from 'material-ui/GridList';
import EventCard from "./EventCard";
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    marginTop: "1em",
    width: "70%",
    height: 450,
    overflowY: 'auto',
  },
};

function mapStateToProps(state) {
  return {
    events: state.events,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEvents: () => dispatch(getEvents()),
  };
}

export class EventsList extends React.Component {

  static propTypes = {
    events: PropTypes.array,
  };
  
  constructor() {
    super();
    autoBind(this);
  }

  componentWillMount() {
    this.props.getEvents();
  }

  render() {
    const { events } = this.props;
    if (!events) {
      return <div>LOADING</div>;
    }

    return <div style={styles.root}>
      <GridList
        cols={4}
        padding={35}
        cellHeight="auto"
        style={styles.gridList}
      >
        {events && events.map((event) => (
          <GridTile
            key={event.photo}
            title={event.title}
            subtitle={<span>by <b>{event.description}</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img src={event.photo} />
          </GridTile>
        ))}
      </GridList>
  </div>;
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);