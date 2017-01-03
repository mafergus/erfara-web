import React, { PropTypes } from 'react';
import autoBind from 'react-autobind';
import SignUpModal from './SignUpModal';
import FlatButton from 'material-ui/FlatButton';

export default class HeaderLinks extends React.Component {
  
  static propTypes = {
    className: PropTypes.any,
    style: PropTypes.object,
  };

  constructor() {
    super();
    autoBind(this);
  }

  signUp() {
    alert("sign up");
  }

  logIn() {
    alert("log in");
  }

  render() {
    return <div style={this.props.style}>
      <FlatButton
        label="Sign Up"
        primary={true}
        onTouchTap={this.signUp}
      />
      <FlatButton
        label="Log In"
        primary={true}
        onTouchTap={this.logIn}
      />
    </div>
  }
}