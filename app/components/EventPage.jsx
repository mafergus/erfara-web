import React from "react";
import autoBind from "react-autobind";

export default class EventPage extends React.Component {
  
  constructor() {
    super();
    autoBind(this);
  }

  render() {
    return <div style={{ height: "500px", backgroundColor: "green" }}>
    </div>;
  }
}