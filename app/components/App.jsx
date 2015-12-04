import React from 'react';
import Menu from './Menu';
import Login from './Login';
  

export default class App extends React.Component {


  render() {
    return (
      <div className="app">
        <div>
          <Menu />
        </div>
        <div>
          <Login />
        </div>
      </div>
    );
  }

};