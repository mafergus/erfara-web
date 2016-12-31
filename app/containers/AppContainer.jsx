import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../store/store';
import { getEvents } from "../actions/getEvents";
import App from "../components/App";
import autoBind from "react-autobind";
import { bindActionCreators } from 'redux';

// function mapStateToProps(state) {
//   return {
//     events: state.events
//   };
// }

function mapDispatchToProps(dispatch) {
  console.log("mapDispatchToProps dispatch: ", dispatch);
  return {
    getEvents: () => dispatch(getEvents()),
  };
}

export class AppContainer extends React.Component {

  static propTypes = {
    getEvents: PropTypes.func
  };

  constructor() {
    super();
    autoBind(this);
  }

  componentDidMount() {
    console.log("componentDidMount store: ", store);
    store.dispatch(() => getEvents());
    // getEvents.bind(store)();
    // this.props.getEvents();
  }

  render() {
    console.log("AppContainer");
    return <App />
  }
  
}

export default connect(null, mapDispatchToProps)(AppContainer);