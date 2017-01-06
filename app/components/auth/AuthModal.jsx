import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { grey100, lightBlack } from 'material-ui/styles/colors';
import autoBind from 'react-autobind';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class AuthModal extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    onGoogleClick: PropTypes.func.isRequired,
    onFacebookClick: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    autoBind(this);

    this.state = {
      open: false,
    };
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    const { title, onGoogleClick, onFacebookClick } = this.props;

    return (
      <span>
        <FlatButton 
          label={title}
          primary={true}
          onTouchTap={this.handleOpen} />
        <Dialog
          contentStyle={{textAlign: "center", width: "40%", marginBottom: "300px"}}
          title={title}
          titleStyle={{ fontSize: "1.1em", textAlign: "left", padding: "12px 0px 12px 25px", color: lightBlack }}
          modal={false}
          onRequestClose={this.handleClose}
          open={this.state.open}>
          <button
            style={{margin: "3em 8em 3em 0em", verticalAlign: "middle"}}
            className="googleSignUpButton"
            onClick={onGoogleClick}></button>
          <button
            style={{verticalAlign: "middle"}}
            className="facebookSignUpButton"
            onClick={onFacebookClick}></button>
        </Dialog>
      </span>
    );
  }
}