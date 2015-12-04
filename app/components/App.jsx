import React from 'react';
import Parse from 'parse';
import Menu from './Menu';
import Authentication from './Authentication';
  

export default class App extends React.Component {


  render() {
    return (
      <div className="app">
        <div>
          <Menu />
        </div>

        <div>
          <Authentication />
        </div>
      </div>
    );
  }

};