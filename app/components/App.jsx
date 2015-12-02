import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
var ParseComponent = ParseReact.Component(React);
import Notes from './Notes';
import Menu from './Menu';
  

export default class App extends ParseComponent {
  
  observe(props, state) {
    return {
      items: new Parse.Query('TodoItem').descending('createdAt')
    };
  }

  render() {
    return (
      <div className="app">

        <Menu />

        <form className="add-note-form" 
                onSubmit={this.addNote.bind(this)}>
          <input type="text" id="add-note-form-text" />
          <button>Add note</button>
        </form>
        <Notes items={this.data.items} 
                 onEdit={this.editTask}
                   removeNote={this.removeNote}/>
      </div>
    );
  }

  addNote(event) {
    // Stop form submission default refresh behavior
    event.preventDefault();
    var text = document.getElementById("add-note-form-text").value;
    console.log("button event - add note: " + text);
    //Parse create object
    ParseReact.Mutation.Create('TodoItem', {
      task: text
    }).dispatch();
    document.getElementById("add-note-form-text").value = "";
  }

  editTask(todoId, text){
    console.log("App.js editing todoitem: " + todoId);
    ParseReact.Mutation.Set(todoId, {
      task: text
    }).dispatch();
  }

  removeNote(todoId) {
    console.log("App.js destroying todoitem: " + todoId);
    ParseReact.Mutation.Destroy(todoId).dispatch();
  }


};