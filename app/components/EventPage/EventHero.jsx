import React, { PropTypes } from "react";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class EventHero extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  
  constructor() {
    super();
  }

  render() {
    const { title } = this.props;
    return <div style={{ position: "relative" }} className="eventHeroImage">
      <h3 style={{ fontSize: "1.8em", fontWeight: "normal", position: "absolute", bottom: "0", left: "0", margin: "0.7em" }}>{title}</h3>
      <FloatingActionButton
        mini={true}
        onTouchTap={this.handleTouchTapDemo}
        style={{ position: "absolute", right: "0.7em", bottom: "0.7em" }}
      >
        <ContentAdd />
      </FloatingActionButton>
    </div>;
  }
}