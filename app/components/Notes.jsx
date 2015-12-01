import React from 'react';
import Note from './Note.jsx';

export default class Notes extends React.Component {

  render() {
    return(
      <ul className="notes">
        {this.props.items.map(this.renderNotes.bind(this))}
      </ul>
    );
  }

  renderNotes(note){
    return <Note task={note.task}
                   key={note.id} 
                     id={note.id}
                      className="note"
                        edit={this.props.onEdit}
                         removeNote={this.props.removeNote} />
  }

}