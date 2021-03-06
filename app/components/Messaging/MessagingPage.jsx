import React, { PropTypes } from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import ConversationList from "./ConversationList";
import MessagesWindow from "./MessagesWindow";
import store from "../../store/store";
import { addMessage } from "../../actions/messageActions";

function mapStateToProps(state, props) {
  return {
    conversations: state.conversations,
    authedUser: state.authedUser,
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

    this.state = {
      conversation: null,
    }
  }

  onConversationSelected(conversationId) {
    this.setState({ conversationId });
  }

  sendMessage(text) {
    store.dispatch(addMessage(this.state.conversationId, this.props.authedUser.uid, text, new Date()));
  }

  componentWillMount() {
    const { conversations } = this.props;
    if (conversations && conversations.length > 0) {
      this.setState({ conversationId: conversations[0] });
    }
  }

  render() {
    return <div style={{ width: "100%", height: "100%", position: "fixed", maxWidth: "1440px", top: "64px", left: "0", display: "flex" }}>
      <ConversationList conversations={this.props.conversations} onConversationSelected={this.onConversationSelected} style={{ display: "inline-block", height: "100%", marginTop: "0px", width: "30%" }}/>
      <MessagesWindow conversation={this.props.conversations.get(this.state.conversationId)} onSendMessage={this.sendMessage} style={{ width: "70%", height: "100%", display: "inline-block" }}/>
    </div>
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MessagingPage);