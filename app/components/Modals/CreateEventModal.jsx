import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import firebase from '../../actions/database';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { grey100, lightBlack, darkBlack } from 'material-ui/styles/colors';
import autoBind from 'react-autobind';
import { addAuthedUser, addUser } from "../../actions/userActions";
import TextField from "material-ui/TextField";
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import store from "../../store/store";
import { addEvent } from "../../actions/eventActions";

function mapStateToProps(state) {
  return {
    userId: state.authedUser["localId"],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addEvent: () => dispatch(addEvent),
  };
}

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export class CreateEventModal extends React.Component {

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    autoBind(this);

    this.timestamp = new Date();
  }

  onError(error, type) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    console.log(type, " errorCode: ", errorCode, " errorMessage: ", errorMessage);
  }

  addNewEvent() {
    store.dispatch(addEvent(this.name, this.description, this.timestamp, this.props.userId));
    this.props.onRequestClose();
  }

  dateChange(placeholder, date) {
    this.timestamp.setFullYear(date.getFullYear());
    this.timestamp.setMonth(date.getMonth());
    this.timestamp.setDate(date.getDate());
  }

  timeChange(placeholder, date) {
    this.timestamp.setHours(date.getHours());
    this.timestamp.setMinutes(date.getMinutes());
  }

  render() {
    const { title } = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.onRequestClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.addNewEvent}
      />,
    ];

    return (
        <Dialog
          actions={actions}
          contentStyle={{textAlign: "center", width: "60%", height: "500px"}}
          title={"Create Event"}
          titleStyle={{ fontSize: "1.1em", textAlign: "left", padding: "12px 0px 12px 25px", color: darkBlack }}
          modal={false}
          onRequestClose={this.props.onRequestClose}
          open={this.props.isOpen}>
          <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
            <TextField
              hintText="Event Name"
              floatingLabelText="Event Name"
              onChange={(event, value) => { this.name = value; }}
            />
            <TextField
              hintText="Description"
              floatingLabelText="Description"
              onChange={(event, value) => { this.description = value; }}
            />
            <DatePicker hintText="Date" onChange={this.dateChange} />
            <TimePicker hintText="12hr Format" onChange={this.timeChange} />
          </div>
        </Dialog>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventModal);
