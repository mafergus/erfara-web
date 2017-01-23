import React, { PropTypes } from "react";
import { connect } from "react-redux";
import autoBind from "react-autobind";
import { getUser } from "../../actions/userActions";
import FullWidthSection from '../FullWidthSection';
import Hero from "../Hero";
import EventDescription from "../EventPage/EventDescription";
import UserDetails from "./UserDetails";
import BuddyList from "./BuddyList";

const H3STYLE = {
  display: "inline-block",
  fontSize: "1.8em",
  fontWeight: "normal",
  margin: "0 auto",
};

function mapStateToProps(state, props) {
  return {
    user: state.users.get(props.uuid),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => dispatch(getUser),
  };
}

export class UserPage extends React.Component {

  static propTypes = {
    getUser: PropTypes.func.isRequired,
    uuid: PropTypes.string,
    user: PropTypes.object,
  };

  constructor() {
    super();
    autoBind(this);
  }

  render() {
    return <FullWidthSection>
      <div style={{ width: "40%", margin: "0 auto", position: "relative" }}>
        <BuddyList style={{ position: "absolute", top: "0", width: "200px", marginLeft: "-210px", backgroundColor: "white" }}/>
        <Hero image="www.google.com">
          <img style={{ backgroundColor: "red", borderRadius: "50%", height: "80px", width: "80px", margin: "0 auto" }}/>
          <h3 style={ H3STYLE }>John Doe</h3>
        </Hero>
        <UserDetails />
      </div>
    </FullWidthSection>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);