import React from 'react';

export default class Note extends React.Component {
  render() {
    return <li className="note">
             <p>
               {this.props.task}

               <button className="button-remove"
                            onClick={this.removeNote.bind(this)}> x
               </button >
               <button className="button-edit"
                            onClick={this.edit.bind(this)}> ?
               </button>
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