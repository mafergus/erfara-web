import React, { PropTypes } from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import autoBind from "react-autobind";
import MessageListItem from "./MessageListItem";

export default class MessagesList extends React.Component {

  static propTypes = {
    messages: ImmutablePropTypes.map,
    style: PropTypes.object,
  };

  constructor() {
    super();
    autoBind(this);
  }

  render() {
    const { messages, style } = this.props;
    const STYLE = {
      ...style,
      listStyle: "none",
      padding: "0",
      backgroundColor: "white",
    }
    return <ul style={STYLE} className="messagesList">
      {messages && messages.map(item => {
        return <MessageListItem message={item} />
      })}
    </ul>
  }  
}