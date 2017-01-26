import React, { PropTypes } from "react";
import autoBind from "react-autobind";

export default class MessagesWindow extends React.Component {

  static propTypes = {
    style: PropTypes.object,
  }

  constructor() {
    super();
    autoBind(this);
  }

  render() {
    const { style } = this.props;
    return <div style={ style }></div>
  }  
}