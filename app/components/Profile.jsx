import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';
var ParseComponent = ParseReact.Component(React);

export default class Profile extends ParseComponent {

  // getInitialState is not used in React ES6 components. Hardcode it in the constructor.
  constructor() {
    super();
  }

  observe(nextProps, nextState) {
  }

  render() {
    return(
      <div>
      Profile
      </div>
    )
  }

}