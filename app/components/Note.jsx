import React from 'react';

export default class Note extends React.Component {
  render() {
    return <li>
             <p>
               <button type="button" 
                 onClick={this.edit.bind(this)}>
                 ?
              </button>
              &#160;&#160;&#160;
               <button type="button" 
                 onClick={this.removeNote.bind(this)}>
                 x
              </button>
              &#160;&#160;&#160;&#160;&#160;
              {this.props.task}
              </p>

            </li>;
  }

  edit() {
    var text = window.prompt("Enter new task text");
    this.props.edit(this.props.id, text);
  }

  removeNote() {
    this.props.removeNote(this.props.id);
  }
}