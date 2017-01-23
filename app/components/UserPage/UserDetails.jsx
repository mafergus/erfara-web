import React, { PropTypes } from "react";
import autoBind from "react-autobind";
import { darkBlack, lightBlack } from "material-ui/styles/colors";

const TABS = [
  { name: "Erfaras" },
  { name: "About" },
];

const TABSTYLE = {
  display: "inline-block",
  marginRight: "35px",
  color: lightBlack,
};

export default class UserDetails extends React.Component {
  
  constructor() {
    super();
    autoBind(this);
  }

  renderTabs() {
    const tabContent = <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>
      <a style={ TABSTYLE } className="userTabs">Skill Postings</a>
      <a style={ TABSTYLE } className="userTabs">About</a>
    </div>;
    return tabContent;
  }

  render() {
    const tabs = this.renderTabs();
    return <div style={{ width: "100%", height: "400px", backgroundColor: "white" }}>
      {this.renderTabs()}
    </div>
  }
}