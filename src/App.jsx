import './App.css';
import 'react-virtualized/styles.css'
import React, { Component } from 'react';
import One from './One/One';
import Two from './Two/Two';
import Three from './Three/Three';
import Four from './Four/Four';
const { BrowserRouter, Route } = require('react-router-dom');

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="base">
          <Route exact path="/one" component={One} />
          <Route exact path="/two" component={Two} />
          <Route exact path="/three" component={Three} />
          <Route exact path="/four" component={Four} />
        </div>
      </BrowserRouter>
    );
  }
}
