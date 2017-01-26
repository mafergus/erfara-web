import React, { PropTypes } from "react";
import { connect } from "react-redux";
import autoBind from "react-autobind";
import { darkBlack, lightBlack } from "material-ui/styles/colors";

function mapStateToProps(state, props) {
  return {
    user: state.users.get(props.message.from),
  }
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export class MessageListItem extends React.Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };
  
  constructor() {
    super();
    autoBind(this);
  }

  render() {
    const { message, user } = this.props;
    const photo = user && user.photoURL;
    if (!message || !user) { return <div></div>; }
    return <li style={{ display: "flex", alignItems: "center", height: "90px", borderBottom: "2px solid red", padding: "1em", backgroundColor: "white" }}>
      <img src={photo} style={{ height: "50px", width: "50px", minWidth: "50px", borderRadius: "50%", marginRight: "20px", display: "inline-block", flexShrink: "1" }}/>
      <div className="title ellipsis" style={{ color: darkBlack, fontWeight: "500" }}>
        {user.name}
        <p className="subtitle ellipsis" style={{ color: lightBlack, fontSize: "0.9em", marginTop: "0.3em" }}>{message.message}</p>
      </div>
    </li>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageListItem);