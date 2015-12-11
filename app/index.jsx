import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import MainApp from './components/MainApp.jsx';
import Parse from 'parse';

Parse.initialize("2ORhMZvPcIVIQXCKRevAcDKKB3qTKdISH1s7kunP", "EVbY8lGJqEfzDkSceJ8qZDRbeSrpfGMy2hbRkZOH");

// Launch hoisted functions and variables below
main();

function main() {

  // Create a div called app for App.jsx to be rendered into
  const app = document.createElement('div');
  document.body.appendChild(app);
  // Render App.jsx into
  // ReactDOM.render(<App />, app);
}
