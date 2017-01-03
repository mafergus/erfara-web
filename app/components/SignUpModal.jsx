import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import autoBind from 'react-autobind';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class SignUpModal extends React.Component {

  constructor() {
    super();
    autoBind(this);

    this.state = {
      open: false,
    };
  }

  handleOpen() {
    console.log("HANDLE OPEN");
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}/>,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}/>,
    ];

    return (
      <span>
        <FlatButton 
          label="Sign Up" 
          primary={true}
          onTouchTap={this.handleOpen} />
        <Dialog
          title="Sign Up"
          actions={actions}
          modal={true}
          open={this.state.open}>
          Only actions can close this dialog.
        </Dialog>
      </span>
    );
  }
}