import React, { PropTypes } from "react";
import autoBind from "react-autobind";
import { darkBlack } from "material-ui/styles/colors";

export default class MessageListItem extends React.Component {

  static propTypes = {
    message: PropTypes.object,
    isMine: PropTypes.bool,
  }

  constructor() {
    super();
    autoBind(this);
  }

  render() {
    const { message, isMine } = this.props;
    return <div style={{ width: "100%", height: "150px", backgroundColor: "blue" }}>
      {isMine ? this.renderMyMessage() : this.renderTheirMessage()}
    </div>;
  }

  renderMyMessage() {
    return <div style={{ backgroundColor: "gray", width: "200px", height: "70px", float: "right" }}>
      <a style={{ color: darkBlack }}>{this.props.message.message}</a>
    </div>;
  }

  renderTheirMessage() {
    return <div style={{ backgroundColor: "red", width: "200px", height: "70px" }}>
      <a style={{ color: darkBlack }}>{this.props.message.message}</a>
    </div>;
  }
}