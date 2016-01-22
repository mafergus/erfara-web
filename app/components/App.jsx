import '../main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Authentication from './Authentication';
import Menu from './Menu';
import Header from './Header';

export default class App extends React.Component {

  render() {

    return (
      <div className="app">
        <div id="auth-div">
          <Authentication />
        </div>

        <Header />

        <div style={{position: 'absolute', top: '0px', width: '100%', height: '100%'}}>
          <div className="Content" style={{position: 'absolute', top: '0px', width: '100%'}}>
            {this.props.children}
          </div>
        </div>

      </div>
    )
  }
}

