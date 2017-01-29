import React, { PropTypes } from "react";
import autoBind from "react-autobind";
import { darkBlack, lightBlack, faintBlack } from "material-ui/styles/colors";
import Hero from "../Hero";
import UserDetails from "./UserDetails";

const H3STYLE = {
  display: "inline-block",
  fontSize: "1.8em",
  fontWeight: "normal",
  margin: "0 auto",
};

const IMG_STYLE = {
  borderRadius: "50%",
  height: "80px",
  width: "80px",
  margin: "0 auto",
  objectFit: "cover",
};

export default class MainContent extends React.Component {

  static propTypes = {
    user: PropTypes.object,
  }
  
  constructor() {
    super();
    autoBind(this);
  }

  render() {
    const { user } = this.props;
    const STYLE = {
      border: `1px solid ${faintBlack}`,
      borderRadius: "1%",
    };

    return <div>
      <Hero image={user.coverImage}>
        <img style={IMG_STYLE} src={user.photoURL}/>
        <h3 style={ H3STYLE }>{user.name}</h3>
      </Hero>
      <UserDetails />
    </div>;
  }
}