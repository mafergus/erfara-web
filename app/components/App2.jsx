import React from 'react';
import ReactDOM from 'react-dom';
import autoBind from "react-autobind";
import MeetingsList from './MeetingsList';
import store from '../store/store';
import "../stylesheets/main.scss";
import { Jumbotron, Button } from 'react-bootstrap';

export default class App2 extends React.Component {

  constructor() {
    super();
    autoBind(this);

    this.state = {
      modalOpen: false,
    };
  }

  showModal() {
    this.setState({modalOpen: true});
  }

  hideModal() {
    this.setState({modalOpen: false});
  }

  onSubmitModal(meeting) {
    this.hideModal();
    // store.dispatch(addMeeting(meeting));
  }

  render() {
    return <div className="container-fluid">
      <Jumbotron className="row col-lg-8 centered" style={{marginBottom: "2em"}}>
        <h1>This is a new Meetings App</h1>
        <p>Meetings are vital to coordination and coordination is vital to life!</p>
        <p><Button bsStyle="primary" onClick={this.showModal}>Add Meeting</Button></p>
      </Jumbotron>
      <MeetingsList />
    </div>
  }
}