import React, { PropTypes } from "react";
import { connect } from "react-redux";
import autoBind from "react-autobind";
import AppBar from 'material-ui/AppBar';
import { white, orange500 } from 'material-ui/styles/colors';
import ErfaraIcon from '../components/ErfaraIcon';
import AuthModal from '../components/auth/AuthModal';
import LoggedInUserComponent from "../components/LoggedInUserComponent";

const STYLE = {
  position: 'fixed',
  // Needed to overlap the examples
  zIndex: 4,
  backgroundColor: white,
  top: 0,
}

function mapStateToProps(state) {
  return {
    user: state.authedUser,
  };
}

export class AppBarContainer extends React.Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  
  constructor() {
    super();
    autoBind(this);
  }

  onTitleTouchTap() {
    this.context.router.push('/');
  }

  renderIconRight() {
    const { user } = this.props;
    if (!user) {
      return <div>Oops</div>;
    }

    return Object.keys(user).length > 0 ?
      <LoggedInUserComponent 
        name={user.displayName.split(" ")[0]}
        image={user.photoUrl}/> : 
      <div style={{ marginTop: "6px" }}>
        <AuthModal title="Log In" />
        <AuthModal title="Sign Up" />
      </div>;
  }

  render() {
    return <AppBar
      className="appBar"
      title="Erfara"
      titleStyle={{ fontFamily: "LobsterTwo-Regular", color: orange500 }}
      onTitleTouchTap={this.onTitleTouchTap}
      iconElementLeft={
        <ErfaraIcon color={orange500} style={{marginLeft: "1em", marginRight: "0.1em", height: "1.85em", width: "1.85em", marginTop: "10px"}}/>
      }
      iconElementRight={ this.renderIconRight() }
      style={STYLE}
    />;
  }
}

export default connect(mapStateToProps)(AppBarContainer);