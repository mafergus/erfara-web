import React, { PropTypes } from "react";
import { connect } from "react-redux";
import autoBind from "react-autobind";
import { getUser } from "../../actions/userActions";
import FullWidthSection from '../FullWidthSection';
import EventDescription from "../EventPage/EventDescription";
import BuddyList from "./BuddyList";
import MainContent from "./MainContent";

function mapStateToProps(state, props) {
  return {
    user: state.authedUser,
    users: state.users,
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

  getFollowers() {
    const { user, users } = this.props;
    const followers = [];
    Object.entries(user.followers).map(item => {
      const user = users.get(item[1]);
      if (user) { followers.push(); }
    });
    return followers;
  }

  render() {
    const { user, users } = this.props;
    if (!user || !users || users.length == 0) { return <div/>; }
    return <FullWidthSection>
      <div style={{ width: "40%", margin: "0 auto", position: "relative" }}>
        <BuddyList buddies={this.getFollowers()} style={{ position: "absolute", top: "0", width: "200px", marginLeft: "-210px", backgroundColor: "white" }}/>
        <MainContent user={this.props.user}/>
      </div>
    </FullWidthSection>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);