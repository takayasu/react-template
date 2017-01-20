import React, { Component } from 'react';
import Menu from './Menu';

require('../../node_modules/bootstrap/dist/css/bootstrap.css');

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Menu />
        <div>
            React simple starter
        </div>
      </div>
    );
  }
}
