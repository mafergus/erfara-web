import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
var ParseComponent = ParseReact.Component(React);
import Note from './Note.jsx';


export default class App extends ParseComponent {
  
  observe(props, state) {
    return {
      items: new Parse.Query('TodoItem').ascending('createdAt')
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.data.items.map(this.renderNote)}
        </ul>
      </div>
    );
  }

  renderNote(note) {
    return (
      <Note task={note.task} key={note.id}/>
    );
  }

};