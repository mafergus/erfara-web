import '../stylesheets/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import autoBind from 'react-autobind';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getEvents } from '../actions/getEvents';
import { Jumbotron, Button } from 'react-bootstrap';
import MeetingsList from './MeetingsList';
import Home from './Home';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends React.Component {

  constructor() {
    super();
    autoBind(this);
  }

  render() {
    console.log("App render");
    return (
      <MuiThemeProvider>
        <div className="container-fluid">
          <Home />
        </div>
      </MuiThemeProvider>
    )
  }
}

          // <Jumbotron className="row col-lg-8 centered" style={{marginBottom: "2em"}}>
          //   <h1>This is a new Meetings App</h1>
          //   <p>Meetings are vital to coordination and coordination is vital to life!</p>
          //   <p><Button bsStyle="primary" onClick={this.showModal}>Add Meeting</Button></p>
          // </Jumbotron>
          // <MeetingsList />