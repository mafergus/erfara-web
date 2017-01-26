import React, { PropTypes } from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import MessagesList from "./MessagesList";
import MessagesWindow from "./MessagesWindow";

function mapStateToProps(state, props) {
  return {
    messages: state.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: () => dispatch(sendMessage),
  };
}

export class MessagingPage extends React.Component {
  
  constructor() {
    super();
    autoBind(this);
  }

  render() {
    return <div style={{ width: "100%", height: "100%", position: "fixed", top: "64px", left: "0" }}>
      <MessagesList messages={this.props.messages} style={{ display: "inline-block", height: "100%", marginTop: "0px", width: "25%" }}/>
      <MessagesWindow style={{ width: "80%", height: "500px", display: "inline-block", border: "2px solid green" }}/>
    </div>
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MessagingPage);